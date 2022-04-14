import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Invoices} from '../data/invoices'
function Invoice(props) {
    const params = useParams();
    const navi = useNavigate();
    
    const invoice = Invoices.find( invoice => invoice.id.toString() === params.invoiceID)
    React.useEffect(()=>{
        if(!invoice) navi('..')
    },[invoice])
    return (
        <h2 style={{padding: '1rem'}}>
            Invoice #{invoice?.id} for {invoice?.name}
            
        </h2>
    );
}

export default Invoice;