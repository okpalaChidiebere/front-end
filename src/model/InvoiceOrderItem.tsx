/*export class InvoiceOrderItem {

    constructor(
        private _productCode: number | string = '',
        private _productType: string = '',
	    private _productColor: string = '',
	    private _quantity: number | string = '',
	    private _price: number | string = '',
	    private _discount: number | string = '',
	    private _amount: number | string = '',
    ) {}
}*/
export interface orderItem {
	productCode: number | string,
	productType: string,
	productColor: string,
	quantity: number | string,
	price: number | string,
	discount: number | '',
	amount: number | string,
}
