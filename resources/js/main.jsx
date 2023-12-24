import NavBar from "./components/NavBar";
import "../css/component/main.css";
import SideBar from "./components/SideBar";

function Main() {
    return (
        <>
            <header id="header" className="">
                <NavBar />
            </header>
            <section id="sidebar" className="hide px-0">
                <SideBar />
            </section>
            <main className="px-md-5" id="content">
                <section ></section>
            </main>
            <footer id="footer"></footer>
        </>
    );
}

export default Main;
