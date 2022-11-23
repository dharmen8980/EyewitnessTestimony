import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {useState} from 'react'



function MyApp({ Component, pageProps }) {
  const [formData, setFormData] = useState({});
  const updateFormData = (newData) => {
    setFormData({...formData, ...newData});
  };
  return <div>
  {/* <Navbar/> */}
  <Component {...pageProps} updateFormData={updateFormData} />
  </div>
};

export default MyApp
