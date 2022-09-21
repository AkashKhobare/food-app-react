import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ADD_SEL_FOOD_ITEM } from "../redux/actions";
import store from "../redux/state";

export const Food = ({foodItem}) => {

    return (
        <Link to={`/food-items/${foodItem.title}`}>
            <Button variant="success" onClick={() => {
                store.dispatch({
                    ...ADD_SEL_FOOD_ITEM, payload: foodItem
                }) 
            }}>
                {foodItem.title}
            </Button>
        </Link>
    )
}