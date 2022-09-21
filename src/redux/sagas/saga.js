import axios from "axios";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"

function* fetchFoodItems() {
    const foodItemsAPI = "http://localhost:3010/food-items";
    try {
        const { data } = yield call(axios.get, foodItemsAPI);
        console.log(data)
        yield put({ type: "FETCH_FOOD_ITEMS_SUCCESS", payload: data })
    } catch(e) {
        yield put({ type: "FETCH_FOOD_ITEMS_FAILURE", message: e.message })
    }
}

function* fetchFoodItemsRequest() {
    yield takeLatest("FETCH_FOOD_ITEMS_REQUEST", fetchFoodItems)
}

export default function* rootSaga() {
    yield fetchFoodItemsRequest();
}