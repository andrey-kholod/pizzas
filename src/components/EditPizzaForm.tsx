import React, { FC, useState } from 'react'
import './styles.css'
import Pizza from '../models/Pizza'
import { context } from '../context'

interface EditPizzaFormProps {
    data: Pizza
    handleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, handleToggleEdit }) => {
    const utils = React.useContext(context)



    const [editPizza, setEditPizza] = useState<Pizza>(data)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditPizza((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { title, price, img } = editPizza

        if (title && price && img) {
            utils?.updatePizza(editPizza)
        }
    }

    return (
        <form className='edit-form'
            onSubmit={handleSubmit}>
            <input
                name='title'
                type="text"
                placeholder='Название'
                onChange={handleChange}
                value={editPizza.title}
            />
            <input
                name='price'
                type="text"
                placeholder='Стоимость'
                onChange={handleChange}
                value={editPizza.price}
            />
            <input
                name='img'
                type="text"
                placeholder='Изображение'
                onChange={handleChange}
                value={editPizza.img}
            />
            <button type="submit">Подтвердить</button>
        </form>
    )
}

export default EditPizzaForm