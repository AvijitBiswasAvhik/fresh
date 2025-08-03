import React, { useState, useCallback, useEffect } from "react";
import "./../../css/component/chatbot.css";
import OpenRouter from "../OpenRouter";
import DOMPurify from "dompurify";
export default function ChatBot() {
    let [sent, setSent] = useState({
        time: 0,
        running: false,
        history: {
            messages: [],
            current: {
                role: "user",
                content: "",
            },
        },
    });
    const prepare = useCallback(
        () => [
            setSent((pre) => {
                return {
                    ...pre,
                    running: true,
                    history: {
                        ...pre.history,
                        messages: [
                            ...pre.history.messages,
                            pre.history.current,
                        ],
                        current: { role: "user", content: "" },
                    },
                };
            }),
        ],
        []
    );
    useEffect(() => {
        if (sent.running) {
            send();
        }
    }, [sent.running]);
    const send = useCallback(() => {
        OpenRouter.post("", {
            model: "deepseek/deepseek-r1:free",
            messages: sent.history.messages,
        })
            .then((response) => {
                if (response?.data.choices[0].message) {
                    setSent((pre) => {
                        return {
                            ...pre,
                            running: false,
                            time: 0,
                            history: {
                                ...pre.history,
                                messages: [
                                    ...pre.history.messages,
                                    response?.data.choices[0].message,
                                ],
                            },
                        };
                    });
                } else {
                    setSent((pre) => {
                        return {
                            ...pre,
                            running: false,
                        };
                    });
                }
            })
            .catch((error) => {
                setSent((pre) => {
                    return {
                        ...pre,
                        running: false,
                        history: {
                            ...pre.history,
                            messages: [
                                ...pre.history.messages,
                                {
                                    role: "assistant",
                                    content: "some thig error happend",
                                    refusal: true,
                                },
                            ],
                        },
                    };
                });
            });
    }, [sent.history.messages]);

    return (
        <div className="container">
            <div className="header">Chatbot</div>
            <div className="chat-container">
                <div className="messages">
                    {sent.history.messages &&
                        sent.history.messages.map((el, i) => {
                            if (el.role == "user") {
                                return (
                                    <p className="user-text" key={i}>
                                        <b>{el.content}</b>
                                    </p>
                                );
                            } else {
                                const convertToHTML = (text) => {
                                    let html = text
                                    // Convert Markdown headers
                                    .replace(/^### (.*)$/gm, "<h3>$1</h3></br>")
                                    .replace(/^## (.*)$/gm, "<h2>$1</h2></br>")
                                    .replace(/^# (.*)$/gm, "<h1>$1</h1>")
                            
                                    // Convert bold, italic, and inline code
                                    .replace(/\*\*(.*?)\*\*/g, "<li><strong>$1</strong></li>")
                                    .replace(/(<li>.*?<\/li>)/g, "<ol>$1</ol>") // Bold
                                    .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic
                                    .replace(/`(.*?)`/g, "<code>$1</code> </br>") // Inline code
                            
                                    // Convert smart quotes, em-dash
                                    .replace(/“/g, "&ldquo;")
                                    .replace(/”/g, "&rdquo;")
                                    .replace(/‘/g, "&lsquo;")
                                    .replace(/’/g, "&rsquo;")
                                    .replace(/ — /g, " &mdash; ")
                            
                                    // Convert math symbols
                                    .replace(/√/g, "&radic;")
                                    .replace(/π/g, "&pi;")
                                    .replace(/≈/g, "&asymp;");
                            
                                // **Escape special characters LAST** (so that HTML renders properly)
                                // html = html
                                //     .replace(/&/g, "&amp;") // Escape existing & first
                                //     .replace(/</g, "&lt;")
                                //     .replace(/>/g, "&gt;");
                                            // Replace smart quotes, em-dash, etc.
                                            // .replace(/“/g, "&ldquo;")
                                            // .replace(/”/g, "&rdquo;")
                                            // .replace(/‘/g, "&lsquo;")
                                            // .replace(/’/g, "&rsquo;")
                                            // .replace(/ — /g, " &mdash; ")

                                            // // Math symbols
                                            // .replace(/√/g, "&radic;")
                                            // .replace(/π/g, "&pi;")
                                            // .replace(/≈/g, "&asymp;")

                                            // // Markdown headers
                                            // .replace(
                                            //     /^### (.*)$/gm,
                                            //     "<h3>$1</h3>"
                                            // )
                                            // .replace(
                                            //     /^## (.*)$/gm,
                                            //     "<h2>$1</h2>"
                                            // )
                                            // .replace(
                                            //     /^# (.*)$/gm,
                                            //     "<h1>$1</h1>"
                                            // )

                                            // // Bold, italic, code
                                            // .replace(
                                            //     /\*\*(.*?)\*\*/g,
                                            //     "<strong>$1</strong>"
                                            // ) // Bold
                                            // .replace(
                                            //     /\*(.*?)\*/g,
                                            //     "<em>$1</em>"
                                            // ) // Italic
                                            // .replace(
                                            //     /`(.*?)`/g,
                                            //     "<code>$1</code>"
                                            // ) // Inline code

                                            // // Special character escaping (MUST BE LAST)
                                            // .replace(/&/g, "&amp;") // Escape existing & first
                                            // .replace(/</g, "&lt;")
                                            // .replace(/>/g, "&gt;")
                                    
                                    console.log(html)
                                    console.log(text)
                                    return html
                                };
                                return (
                                    <div
                                        key={i}
                                        dangerouslySetInnerHTML={{
                                            __html: convertToHTML(el.content),
                                        }}
                                    />
                                );
                            }
                        })}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        className="chat-input"
                        placeholder="Type a message..."
                        value={sent.history.current.content}
                        onChange={(e) => {
                            e.stopPropagation();
                            setSent((pre) => {
                                return {
                                    ...pre,
                                    history: {
                                        ...pre.history,
                                        current: {
                                            ...pre.history.current,
                                            content: e.target.value,
                                        },
                                    },
                                };
                            });
                        }}
                    />
                    {sent.running == false ? (
                        <button className="send-btn" onClick={prepare}>
                            Send
                        </button>
                    ) : (
                        <div
                            className={`timing ${
                                sent.running ? "active" : "inactive"
                            }`}
                        ></div>
                    )}
                </div>
            </div>
        </div>
    );
}
