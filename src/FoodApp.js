import React from 'react';
import { connect, Provider } from 'react-redux';
import './App.css';

import Main from './components/Main';
import { FETCH_FOOD_ITEMS_REQUEST } from './redux/actions';
import store from './redux/state';

const FoodApp = () => {

  return (
    <Provider store={store}>
      <main className="food-app-container"> 
        <Main />
      </main>
    </Provider>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchFoodItems: () => {
    store.dispatch(FETCH_FOOD_ITEMS_REQUEST);
  }
 });

 const mapStateToProps = state => {
  return {
    foodItems: state.foodItems
  }
 }
 
connect(mapStateToProps, mapDispatchToProps)(FoodApp);

export default FoodApp;