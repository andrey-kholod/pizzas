import React, { FC, useState } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './models/Pizza'
import DisplayPizzas from './components/DisplayPizzas';
import { context } from './context';

const App: FC = () => {

  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map(pizza => pizza.id === newPizza.id ? newPizza : pizza))
  }

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(newPizzasList)
  }

  console.log(pizzasList)

  return (
    <context.Provider value={{updatePizza, deletePizza}}>
      <div className="App">
        <div className="wrap">
          <span className="heading">Наша пиццерия</span>
          <AddPizzaForm
            addPizza={addPizza}
          />
          <DisplayPizzas pizzasList={pizzasList} />
        </div>
      </div>
    </context.Provider>
  );
}

export default App;
