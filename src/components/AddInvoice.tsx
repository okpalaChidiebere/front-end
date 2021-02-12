import React, { useState } from 'react'
import OrderItem, { orderItem as item } from './OrderItem'
//import Invoice from './Invoice'
//import orderItem from '../model/orderItem'

interface Props{
    orderList: item[],
    addOrder: () => void,
    removeOrder: (index: number) => void,
    updateOrder: (name: string, value: string, index: number) => void
}

const AddInvoice: React.FC<Props> = ({ orderList, addOrder, updateOrder, removeOrder }) => {

    return(
        <form className="add-invoice-container">
            {JSON.stringify(orderList)}
            <div className="pageHeader"><h1> Customer name and ID </h1></div>
            <div className="add-invoice-form">
                <div>
                    <div className="sold-invoice-info">
                        <span>Sold-To: Cash Customer</span>
                        <span>Bill-To: Cash Cutomer</span>
                    </div>
                    <div> <input type = "button" value ="Begin Sale" className="main-btn"/></div>
                </div>
                <div>Basic Information</div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th style={{width: "30px"}}>No</th>  
                                <th>ProductCode</th>  
                                <th>ProductType</th>  
                                <th>ProductColor</th>  
                                <th>Quantity(in Pcs)</th>  
                                <th>Price</th>  
                                <th style={{width: "90px"}}>Discount</th>  
                                <th>Amount</th>
                                <th style={{width: "70px"}}><input type="button" value="+" onClick={addOrder}/></th>  
	                        </tr>
                        </thead>
                        <tbody>
                            {orderList.length > 0 
                            && orderList.map((order, index) => <OrderItem 
                                key={index} 
                                order={order}
                                removeOrder={removeOrder}
                                updateOrder={updateOrder}
                                /> )}
                        </tbody>
                    </table>
                </div>
                <div>
                    <span style={{padding: '20px', display: 'inline-block'}}>
                        <label className="inlineFormCustomSelect">Choose an Option to start a Work Order</label>
                        <select name="paymentStatus" value="PaidSupplied">
				            <option value="PaidSupplied">Paid & Supplied</option>
				            <option value="PaidNotSupplied">Paid & Not Supplied</option>
				            <option value="NotPaidSupplied">Not Paid & Supplied</option>
				            <option value="NotPaidNotSupplied">Not Paid & Not Supplied</option>
				            <option value="NotFullPaymentSupplied">Not Full Payment & Supplied</option>
				            <option value="NotFullPaymentNotSupplied">Not Full Payment & Not Supplied</option>
				        </select>
                    </span>
                    <span style={{padding: '20px', display: 'inline-block'}}>
                        <label>Customer Type</label>
				        <select name="paymentType" value="Cash">
		                    <option value="NoPaymentYet" >No Payment yet</option>
				            <option value="Cash">Cash</option>
				            <option value="Cheque">Cheque</option>
				            <option value="NotCompletePaymentCash" >Not Complete Payment Cash</option>
				            <option value="NotCompletePaymentCheque" >Not Complete Payment Cheque</option>
				        </select>
                    </span>
                    <span className="invoice-tableFoot"> 
                    <table>
                        <tfoot>
                            <tr>
                                <td>Amount Paid:</td>
                                <td><input type="text" className="form-control" name="amountPaid"/></td>
                            </tr>
                            <tr>
                                <td>total:</td>
                                <td style={{textAlign:'center'}} className="total">0</td>
                            </tr>
                        </tfoot> 
                    </table>
                    </span>
                </div>
            </div>
        </form>
    )
}

export default AddInvoice