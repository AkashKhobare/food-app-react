import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FETCH_FOOD_ITEMS_REQUEST } from "../redux/actions";
import store from "../redux/state";
import FoodItem from "./FoodItem";

import { Navbar, Container } from "react-bootstrap";
import "./FoodItems.css";
import { Food } from "./Food";

const FoodItems = () => {

    const foodItems = useSelector(state => state.foodItems)

    useEffect(() => {
        store.dispatch(FETCH_FOOD_ITEMS_REQUEST)
    }, []); 
      
    return (
        <div>
            <div className="food-items-container">
                {foodItems?.map(foodItem => 
                    <Food key={foodItem.id} foodItem={foodItem}/>
                    // <FoodItem key={foodItem.id} foodItem={foodItem}/>
                    )
                }
            </div>
        </div>
    )

}

export default FoodItems;
