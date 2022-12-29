import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import ProfileProduct from "../pages/ProfileProduct"

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/profile/:name" element={<ProfilePage/>}/>
            <Route path="/product/:id" element={<ProfileProduct/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router