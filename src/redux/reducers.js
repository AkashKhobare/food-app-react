export const rootReducer = (
    state = { 
        foodItems: [],
        selFoodItem: {}
    }, action) => {
    switch(action.type) {
        case "FETCH_FOOD_ITEMS_SUCCESS":
            return {
                ...state,
                foodItems: action.payload
            }
        case "ADD_SEL_FOOD_ITEM":
            return {
                ...state,
                selFoodItem: action.payload
            }
        default:
            return { 
                state
            }
    }
}