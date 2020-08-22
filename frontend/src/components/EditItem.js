import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import itemsService from '../services/items'

const EditItem = ({ item, items, setItems }) => {
    const history = useHistory()
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const updateItem = (event) => {
        event.preventDefault()
        const id = item.id
        const itemObject = { description, category }
        itemsService.update(id, itemObject).then(updatedItem => {
            console.log(updatedItem)
            setItems(items.map(item => {
                if (item.id === id) {
                    return updatedItem
                }
                return item
            }))
            history.push('/items')
        }).catch(exception => {
            console.log(exception)
            if (exception.status === 401) {
                history.push('/login')
            } else if (exception.status === 400) {
                console.log(exception.data.error)
            }
        })

    }


    return (
        <form onSubmit={updateItem}>
            <div>
                Description:
        <input value={description} onChange={(event) => setDescription(event.target.value)} />
            </div>
            <div>
                Category:
        <input value={category} onChange={(event) => setCategory(event.target.value)} />
            </div>
            <button type="submit">Update Item</button>
        </form>
    )
}

export default EditItem