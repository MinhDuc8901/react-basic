import React from 'react';
import {useLocation} from 'react-router-dom'
import queryString from 'query-string'
function Newinvoice(props) {
    // const location = useLocation()
    // const query = queryString.parse(location.search)
    // console.log(query)
    return (
        <form style={{padding: '1rem'}}>
            <label htmlFor="new-invoice">New Invoice Name</label>
            <input type='text' name='new-invoice' id='new-invoice' />
            <input type='submit' value='Create new invoice' />
        </form>
    );
}

export default Newinvoice;