import React from 'react'

const Qrdiv = ({qrlink}) => {



  return (
    <div className='mt-6'>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?data=`+qrlink+`&size=150x150`} alt="" title="" />
    </div>

    
  )

  
}

export default Qrdiv