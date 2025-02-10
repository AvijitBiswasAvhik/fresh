import React, { useState, useCallback, useEffect } from "react";
import "./../../css/component/chatbot.css";
import OpenRouter from "../OpenRouter";
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
        console.log(sent.history.messages);
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
                console.log(error);
            });
    }, [sent.history.messages]);

    console.log(sent);
    return (
        <div className="container">
            <div className="header">Chatbot</div>
            <div className="chat-container">
                <div className="messages">
                    {sent.history.messages &&
                        sent.history.messages.map((el, i) => {
                            console.log(el);
                            if (el.role == "user") {
                                return (
                                    <p className="user-text">{el.content}</p>
                                );
                            } else {
                                return (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: el.content.replace(
                                                /\n/g,
                                                "<br>"
                                            ),
                                        }}
                                    ></p>
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
