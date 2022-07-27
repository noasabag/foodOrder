import classes from "./AvailableMeals.module.css";
import design from "./MealItem.module.css";
import Card from "../UI/Card";
import { DUMMY_MEALS } from "../Files/dummyMeals";
import MealItemForm from "./MealItemForm";
const AvailableMeals = (props) => {
  console.log("AvailableMeals");
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <li key={meal.id} className={design.meal}>
                <div>
                  {<h3>{meal.name}</h3>}
                  {<p className={design.description}>{meal.description}</p>}
                  {<h1 className={design.price}>{meal.price}$</h1>}
                </div>
                <div>
                  <MealItemForm
                    id={meal.id}
                    name={meal.name}
                    price={meal.price}
                    id={meal.id}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
