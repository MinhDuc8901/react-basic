import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {Invoices} from '../data/invoices'


function invoices(props) {
    return (
        <main>
            <h2>Invoices</h2>
            <Link to='new'>New Invoices</Link>
            <div style={{display: 'flex'}}>
                <nav style={{padding: '1rem', borderRight: '1px solid '}}>
        	        {Invoices.map( item=>
                        <Link to={item.id.toString()} key={item.id} style={{display: 'block', margin: '1rem'}}>
                        {item.name}</Link>
                    )}
                </nav>
                <Outlet/>
            </div>
        </main>
    );
}

export default invoices;