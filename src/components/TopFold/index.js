import React from 'react';
import Button from '../../common/styles/Button';
import "./topFold.css";

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
        <div className='tf-heading'>
          Discover collect, & sell <span className='heading-gradient'>Extraordinary</span> NFTs
        </div> 
        <div className='tf-description'>
          Please make sure that you are buying and selling the most trending NFTs out there.
          Welcome to my channel koav dev.
        </div>
        <div className='tf-left-btns'>
          <Button btnType="PRIMARY" btnText="Explore"/>
          <Button btnType="SECONDARY" btnText="Create" customClass='tf-left-secondary-btn'/>
        </div>
        <div className='tf-left-infoStats'>
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>200K+</div>
            <div className='tf-infoItem-label'>Collections</div>
          </div>
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>10K+</div>
            <div className='tf-infoItem-label'>Artists</div>
          </div>
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>423K+</div>
            <div className='tf-infoItem-label'>Community</div>
          </div>
        </div>
      </div>
      <div className='tf-right'>
        <div className='tf-r-bg-blob'>

        </div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src="https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256"/>

          </div>

          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src="https://i.seadn.io/gcs/files/c3a312c53514642e8041c65e10b40a52.gif?auto=format&w=256"/>

          </div>

          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src="https://i.seadn.io/gcs/files/389b0bb1803898cb2517b1f4d4d75635.gif?auto=format&w=256"/>

          </div>

          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src="https://i.seadn.io/gcs/files/8604de2d9aaec98dd389e3af1b1a14b6.gif?auto=format&w=256"/>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TopFold;