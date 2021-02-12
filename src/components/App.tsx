import React from 'react'
import Header from './Header'
import Home from './Home'
import Invoice from './Invoice'


function App() {
  return (
    <div className="site-container">
      <Header />
      <div style={{flexGrow: 4}}>
        <Invoice />
      </div>
      <footer> &#169;2016 God's Hand Aluminium Companies, Inc. All rights reserved</footer>
    </div>
  )
}

export default App;
