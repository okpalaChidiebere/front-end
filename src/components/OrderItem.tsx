import React from 'react'

export interface orderItem {
	index: number,
	productCode: number | string,
	productType: string,
	productColor: string,
	quantity: number | string,
	price: number | string,
	discount: number | string,
	amount: number | string,
}

interface Props{
	order: orderItem,
    removeOrder: (index: number) => void,
    updateOrder: (name: string, value: string, index: number) => void
}

const OrderItem: React.FC<Props> = ({ order, updateOrder, removeOrder}) => {

	/*const [ orderItem, updateOrder ] = useState<orderItem>({
		productCode: '',
	    productType: '',
	    productColor: '',
	    quantity: '',
	    price: '',
	    discount: '',
	    amount: '',
	})

	const update = async (name: string, value: string) => {
		updateOrder({
			...orderitem,
			[name]: value 
		})
	}*/

	const handleInputChange = async (
		event: React.ChangeEvent<HTMLInputElement>
		| React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;

		//console.log(value)
		updateOrder(name, value, order.index)
       
    };

    return(
        <tr>
            <td style={{width: "30px"}}>{(order.index + 1)}</td>  
            <td>
				<input 
				type="text" 
				className="form-control" 
				name="productCode" 
				value={order.productCode}
				onChange={handleInputChange}
				/>
			</td>  
            <td>
				  <select className="custom-select" defaultValue="Foreign" name="productType" onChange={handleInputChange}>
				    <option value="Foreign">Foreign</option>
				    <option value="LocalEconomy">Local&Economy</option>
				    <option value="LocalStandard">Local&Standard</option>
				  </select>
            </td>
			<td>
				  <select className="custom-select"  defaultValue="Dark" name="productColor" onChange={handleInputChange}>
				   <option value="Dark">Dark</option>
				    <option value="Green">Green</option>
				    <option value="LightBronze">Light Bronze</option>
				    <option value="White">White</option>
				    <option value="Milk">Milk</option>
				    <option value="Silver">Silver</option>
				    <option value="Blue">Blue</option>
				    <option value="Red">Red</option>
				  </select>
            </td>
            <td>
				<input 
				type="text" 
				className="form-control" 
				name="quantity" 
				value={order.quantity}
				onChange={handleInputChange}/>
			</td>  
            <td>
				<input 
				type="text" 
				className="form-control" 
				name="price" 
				value={order.price}
				onChange={handleInputChange}/>
			</td>  
            <td style={{width: "90px"}}>
				<input 
				type="text" 
				className="form-control" 
				name="discount" 
				style={{width: "60px"}} 
				value={order.discount}
				onChange={handleInputChange}/>
			</td>  
            <td>
				<input 
				type="text" 
				className="form-control" 
				name="amount" 
				readOnly={true} 
				value={order.amount}
				onChange={handleInputChange}/>
			</td>  
            <td style={{width: "70px"}}>
				<input type="button" className="input-button-link" value="Delete" onClick={() => removeOrder(order.index)}/>
			</td>               
        </tr>
    )
}

export default OrderItem