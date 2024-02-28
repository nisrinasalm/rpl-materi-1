import React from 'react'
import './App.css'

function Item({ data }) {
    return (
        <div className="item">
            {data}
        </div>
    )
}

export default Item;