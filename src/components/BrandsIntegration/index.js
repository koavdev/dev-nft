import React from 'react'
import "./brandsIntegration.css";


const BrandsIntegration = () => {
  return (
    <div className='brands-integration absolute-center'>
      <img src={require('../../assets/brandLogos.png')} alt='brand-logos' className='bi-logos'/>
    </div>
  )
}

export default BrandsIntegration