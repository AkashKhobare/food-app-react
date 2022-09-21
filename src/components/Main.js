import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import FoodItems from "./FoodItems";
import FoodRecipe from "./FoodRecipe";
import { FANavbar } from "./FANavbar";
import FoodItem from "./FoodItem";

const Main = () => {

    return (
        <>
        <FANavbar />
        <BrowserRouter>
            <Routes>
                <Route path="/food-items" element={<FoodItems />} />
                <Route path="/food-items/:food" element={<FoodItem />} />
                <Route path="/food-items/:food/recipe" element={<FoodRecipe />} />
                <Route exact path="/" element={<Navigate to="/food-items" replace />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Main;