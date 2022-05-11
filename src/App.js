import './App.css';
import Layout from './components/Layout/Layout';
import React , { useState } from 'react'
import Qrdiv from './components/QRDiv/Qrdiv';
import {Helmet} from 'react-helmet'
// import { SpinnerDotted } from 'spinners-react';


const App = () => {

  const [inputText, setInputText] = useState('');
  const [showQr, setShowQr] = useState(false);
  // const [spinner, setSpinner] = useState(false);

  const handleChange = (event) => {
    // get the input vale
    setInputText(event.target.value);
    // hide QR Element on iput change
    setShowQr(false)
  }

  const generateQR = () => {
    // show QR Element on button click
    // setSpinner(true)
    setShowQr(true)
  }

  return <>
  
  <Helmet>
      <title>QR Code Generator</title>
  </Helmet>
  
  <Layout>
    <div className='container mx-auto px-4 mt-5'>
      <div>
        <h1 className='text-matte-blue'>
          Generate QR Code
        </h1>
      </div>
      <div className='mt-5'>
        <p className='text-black mb-2'>Enter text/url</p>
        <input type='text' onChange={handleChange} className="w-full px-4 py-2 border border-matte-blue rounded-xl" placeholder="Type something" />
        <button onClick={generateQR} disabled={!inputText} className='px-6 py-2 text-white border border-matte-blue bg-matte-blue rounded-3xl mt-4 disabled:opacity-40'>
          Generate
        </button>
      </div>

      { showQr ? <Qrdiv qrlink={inputText} /> : null }

      {/* <div className='mt-10 ml-5' > */}
      {/* <SpinnerDotted size='40' color='#60a3bc' enabled={spinner} /> */}
      {/* { showQr ? <Qrdiv qrlink={inputText} /> : null } */}
      {/* </div> */}

    </div>
  </Layout>

  </>
}

export default App;
