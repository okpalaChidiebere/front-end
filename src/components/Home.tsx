import React, { Fragment, useState } from 'react'
import CashManagement from './modal/CashManagement'

function Home() {

  const [ viewModal, openModal ] = useState({
    showCashManagementModal: false,
  })

  const { showCashManagementModal } = viewModal

  const handleShowCMModal = () => {
    openModal({...viewModal, showCashManagementModal: !showCashManagementModal})
  }

  return (
    <Fragment>
      <div className="home-container">
        <div className="home-pic"></div>
        <div className="home-nav-buttons">
          <button className="main-btn" onClick={handleShowCMModal}> Cash management </button>
          <button className="main-btn"> Cash management </button>
        </div>
      </div>
      <CashManagement show={showCashManagementModal} handleClose={handleShowCMModal}/>
    </Fragment>
  );
}

export default Home;