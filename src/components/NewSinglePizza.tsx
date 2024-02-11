import React, { FC, useContext, useState } from 'react'
import Pizza from '../models/Pizza'
import { MdEdit, MdDelete } from "react-icons/md";
import EditPizzaForm from './EditPizzaForm';
import { context } from '../context';

interface SinglePizzaProps {
    pizza: Pizza
}

const NewSinglePizza: FC<SinglePizzaProps> = ({ pizza }) => {

    const contextDelete = useContext(context)

    const [edit, setEdit] = useState(false)

    const handleToggleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete = () => {
        contextDelete?.deletePizza(pizza.id)
    }

    return (
        <div className='pizza'>
            <img src={`/images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>

            <div className='pizza-controls'>
                <MdEdit onClick={handleToggleEdit}/>
                <MdDelete onClick={handleDelete}/>
            </div>

            {edit ? <EditPizzaForm data={pizza} handleToggleEdit={handleToggleEdit} /> : null}
        </div>
    )
}

export default NewSinglePizza