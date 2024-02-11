import React, { FC, useState } from 'react'
import './styles.css'
import Pizza from '../models/Pizza'

interface AddPizzaFormProps {
    addPizza(newPizza: Pizza): void
}

const initState = {
    title: '',
    price: '',
    img: ''
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = useState<typeof initState>(initState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPizza((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { title, price, img } = newPizza

        if (title && price && img) {
            addPizza({ title, img, price: Number(price), id: Date.now() })
        }
        setNewPizza(initState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='title'
                type="text"
                placeholder='Название'
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                name='price'
                type="text"
                placeholder='Стоимость'
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                name='img'
                type="text"
                placeholder='Изображение'
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type="submit">+ Добавить в меню</button>
        </form>
    )
}

export default AddPizzaForm