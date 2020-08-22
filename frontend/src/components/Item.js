import React from 'react'
import EditItem from './EditItem'

const Item = ({ item, items, setItems }) => {

    if (!item) {
        return null
    }

    return (
        <div>
            <h2>Item page</h2>
            <p>[{item.category}] - {item.description} {item.id}</p>
            <EditItem item={item} items={items} setItems={setItems} />
        </div>
    )
}

export default Item