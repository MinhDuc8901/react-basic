import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Invoices from './pages/invoices'
import Expenses from './pages/expenses'
import NotFound from './pages/notfound'
import Invoice from './pages/invoice'
import NewInvoice from './pages/Newinvoice'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      
          <Route path='/' element={<App/>}  >
            <Route path='invoices' element={<Invoices />}  >
              <Route index element={<h2 style={{padding:'1rem'}}>Please select an invoice</h2>}/>
              <Route path=':invoiceID' element={<Invoice />}/>
              <Route path='new' element={<NewInvoice />}/>
            </Route>
            <Route path='expenses' element={<Expenses/>}  />
            <Route path='*' element={<NotFound />} />
          </Route>


      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
