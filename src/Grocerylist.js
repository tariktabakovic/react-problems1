// for each create a new create-react-app
// ^ run npx create-react-app ^
// 1. grocery list with three items
// 2. gangster pet names
// 3. favorite movies

import React from 'react';


function Grocerylist({list}){
    return(
        <div>
            <h1>
                {list}
            </h1>
        </div>
    );
}

export default Grocerylist;