import React from 'react'
import { orderItem as item } from './OrderItem'
import AddInvoice from './AddInvoice'


export type InvoiceState = {
    orderInformation: item[]
}

class Invoice extends React.Component<{}, InvoiceState> {
    constructor(props: any){
        super(props)

        this.state = {
            orderInformation: []
        }
    }

    handleAddOrder = () => {
        this.setState(curr => ({
            //...curr,
            orderInformation: curr.orderInformation.concat({
                index: this.state.orderInformation.length,
                productCode: '',
                productType: 'Foreign',
                productColor: 'Dark',
                quantity: '',
                price: '',
                discount: '',
                amount: '',
            })
        }))
    }

    handleUupdateOrder = (name: string, value: string, index: number) =>  {
        //console.log(index)
        const item: item = {
            ...this.state.orderInformation[index],
            [name]: value,
        }
        //console.log(item)
        this.setState(curr => ({
            //...curr,
            orderInformation: [
                ...curr.orderInformation,
                curr.orderInformation[index] = item
            ]
        }))
        this.forceUpdate()
    }

    handleRemoveOrder = (index: number) => {
        this.setState(curr => ({
            //...curr,
            orderInformation: curr.orderInformation.filter(order => order.index !== index)
        }))
    }

    render(){
        const { orderInformation } = this.state

        return(
            <AddInvoice 
            orderList={orderInformation}
            addOrder={this.handleAddOrder}
            removeOrder={this.handleRemoveOrder}
            updateOrder={this.handleUupdateOrder}
            />
        )
    }
}

export default Invoice