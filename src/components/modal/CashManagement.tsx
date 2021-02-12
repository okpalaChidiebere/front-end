import React from 'react'

interface Props{
    handleClose: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void), 
    show: Boolean, 
}

const CashManagement: React.FC<Props> = (props) => {
    
    const { handleClose, show } = props
    const showHideClassName = show ? `modal display-block` : `modal display-none`

    return(
        <div className={showHideClassName}>
            <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>Cash Management</h2>
            <button className="main-btn">Quick Till Cash Order</button>
            <button className="main-btn">Till Transaction Report</button>
            </div>
        </div>
    )
}

export default CashManagement