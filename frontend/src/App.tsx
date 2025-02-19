import Menu from "./index";
import React from "react";
import Products from "./Products/Products"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
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
                <Routes>
                    <Route path="/catalog" element={<Products />} />
                </Routes>
            </main>
            <footer>
                <p>© 2025 Operation Bus App Team 10 </p>
            </footer>
        </div>
    );
}

export default App;
