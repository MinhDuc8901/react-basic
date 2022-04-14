import React, {useEffect} from 'react';
import productApi from '../api/productApi'

function Expenses(props) {
    useEffect(() =>{
        const fetchProduct= async ()=>{
            const params = {
                _limit: 10,
            }
            const productList = await productApi.getAll(params);
            console.log(productList)
        }
        fetchProduct()
    },[])
    return (
        <main>
            <h2>Expenses</h2>
        </main>
    );
}

export default Expenses;