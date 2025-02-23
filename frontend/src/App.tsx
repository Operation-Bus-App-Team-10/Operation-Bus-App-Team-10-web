import Menu from "./index";
import React from "react";
import "./index.css";

function App() {
    return (
        <div className="grid-container">
            <header>
                <h1>Welcome to Our Website</h1>
                <Menu />
            </header>
            <main>
                <p>This is a simple website structure.</p>
            </main>
            <footer>
                <p>© 2025 Operation Bus App Team 10 </p>
            </footer>
        </div>
    );
}
.form{
    display: flex;
    justfiy-content: center;
    align-items: center;
    height: 100%;
}
.form-container{
    display: flex;
    flex-direction: column;
    width: 32rem;
    padding: 2 rem;
    border: 0.1rem #c0c0c0 solid;
    border-radius: 0.5rem;
    list-style-type: none;
}
.form-container li {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-top: 1rem;
}
input{
    padding: 1rem;
    border: 0.1rem #c0c0c0 solid;
    border-radius: 0.5rem;
}




export default App;
