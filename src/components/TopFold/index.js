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
            <img className='tf-r-diamond-img' alt='diamond-banner' src="https://i.seadn.io/s/primary-drops/0x560e8da96ee847cdf59bd90c309a2a51958f99a5/24195256:hero:partner_logo_url:5f0cef4b-6204-49fa-b753-fafd7cb3f7af.gif?auto=format&w=1920"/>

          </div>

          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src="https://openseauserdata.com/files/390e1abc8bbddeae18015452f33ae280.gif"/>

          </div>

          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src="https://media.tenor.com/zCuNNsdqLZQAAAAC/m6-mutant.gif"/>

          </div>

          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src="https://media.tenor.com/uHVmd0uBuU0AAAAC/bored-ape-yacht-club-nft.gif"/>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TopFold;