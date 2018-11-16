import React, { Fragment } from 'react';



class StorePicker extends React.Component {

    render() {
        return (


            <form classname="store-selector">

        
        {/*This is how you comment in React. You use curly braces */}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit"> Visit Store </button>
            </form>



        )
    }
}

export default StorePicker;
