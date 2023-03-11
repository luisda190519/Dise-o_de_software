import Sidebar from "./Views/Sidebar";
import Navbar from "./Views/Navbar";
import Main from "./Views/Main";

function App() {
    return (
        <div>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <div className=""  >
                    <Main />
                </div>
            </div>
        </div>
    );
}

export default App;
