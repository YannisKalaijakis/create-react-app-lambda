import React from 'react';
import { VideoBackground } from './VideoBackground';
import { WebsiteOverlay } from './WebsiteOverlay';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';



function App() {
    return (
        <div className="flex relative w-full h-full">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
