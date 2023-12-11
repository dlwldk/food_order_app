import { Fragment } from 'react';

import MealSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
};

export default Meals;