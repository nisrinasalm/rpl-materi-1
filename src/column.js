import React, { useState } from 'react'
import Modal from './modal'
import Item from './item'
import './App.css'

function Column({ itemList, colTitle, color }) {
    const [showModal, setShowModal] = useState(false);

    const openAddNewTaskModal = () => {
        setShowModal(true);
    };

    const addItem = (task, column) => {
        console.log(task);
        itemList.push(task);
        setShowModal(false);
    };

    return (
        <div className="column">
            <header className="columnHeading"> 
                <h3>
                    {colTitle}
                </h3>
            </header>
            <div className="items">
            {
                itemList.map((i, index) => (
                    <Item
                        key={index}
                        data={i} 
                    />
                ))
            }
            </div>
            <div>
                {showModal &&
                (<Modal
                showModal={showModal}
                setShowModal={setShowModal}
                columnTitle={colTitle}
                addItem={addItem}
            />)}

            </div>
            <button className="addNew" onClick={openAddNewTaskModal}>
                + Add task
            </button>
        </div>
    )
}

export default Column;