import React from 'react';

const Item = ({item, onDeleteItem, onToggleItem}) => {
    const {id, description, quantity, packed} = item || {}
    return (
        <li>
            <input type="checkbox" value={packed} onChange={() => onToggleItem(id)}/>
            <span style={packed ? {textDecoration: 'line-through'} : {}}>{quantity} {description}</span>
            <button onClick={() => onDeleteItem(id)} title={`Delete ${description}`}>❌</button>
        </li>
    );
};

export default Item;