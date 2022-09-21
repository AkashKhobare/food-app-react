import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_SEL_FOOD_ITEM } from '../redux/actions';
import store from '../redux/state';

const FoodItem = () => {

  const foodItem = useSelector(state => state.selFoodItem);
  
  return (
      foodItem &&
      <div>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>{foodItem.title}</Card.Title>
            <Card.Text>
              {foodItem.description}
            </Card.Text>
            <Link to={`/food-items/${foodItem.title}/recipe`}>
              <Button variant='primary'>
                Details
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
  )
}

export default FoodItem;