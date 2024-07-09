import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/HomePage';
import IndexPage from './Pages/IndexPage';
import NewPage from './Pages/NewPage';
import ShowPage from './Pages/ShowPage';
import EditPage from './Pages/EditPage';
import ErrorPage from './Pages/ErrorPage';
import './App.css'; // Global styles

function App() {
    return (
        <Router>
            <div className="app-container">
                <NavBar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/transactions" element={<IndexPage />} />
                        <Route path="/transactions/new" element={<NewPage />} />
                        <Route path="/transactions/:id" element={<ShowPage />} />
                        <Route path="/transactions/:id/edit" element={<EditPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;

