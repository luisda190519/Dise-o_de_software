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
                <Main />
            </div>
        </div>
    );
}

export default App;
