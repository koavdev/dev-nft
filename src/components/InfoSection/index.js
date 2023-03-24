import React from 'react'
import InfoItem from './InfoItem';
import "./infoSection.css";
import { INFO_ITEMS } from '../../data/infoItems';

const InfoSection = () => {
  return (
    <div className='info-section'>
      <div className='is-heading absolute-center'>
        <span className='heading-gradient'>Create and sell your NFTs</span>
      </div>
      <div className='is-items-container'>
        {INFO_ITEMS.map((_infoItem)=>(
          <InfoItem item={_infoItem} />
        ))}
      </div>
    </div>
  )
}

export default InfoSection