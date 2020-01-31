import React from 'react';
import GroceryList from './Grocerylist';

function Mylist({list}){
    const showMyList = `Here's my grocery list: ${list}`
    return (
        <div>
            <GroceryList list={showMyList}/>
        </div>
    )
}

export default Mylist;