import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./FoodRecipe.css"

const FoodRecipe = () => {

    const foodItem = useSelector(state => state.selFoodItem)

    return (
        <>
            {
                foodItem && 
                <div>
                    <h3>Recipe of {foodItem.title}</h3>
                    <p>{foodItem.recipe}</p> 
                </div>
            }

            <br />
            <Link to="/food-items">
                <Button variant="primary">Back to home</Button>
            </Link>
        </>
    )
}

export default FoodRecipe;