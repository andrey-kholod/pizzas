import React, {FC} from 'react'
import Pizza from '../models/Pizza'
import NewSinglePizza from './NewSinglePizza'

interface DisplayPizzasProps {
    pizzasList: Pizza[]
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList}) => {
    return (
        <div className='container'>
            {pizzasList.map((pizza) => {
                return <NewSinglePizza pizza={pizza} key={pizza.id}/>
            })}
        </div>
    )
}

export default DisplayPizzas