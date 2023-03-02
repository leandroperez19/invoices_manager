import React from 'react';
import { Wrapper } from '../styles/navbar';
import {BsFillSunFill} from 'react-icons/bs';

export default function Navbar(){
  return(
    <Wrapper>
      <div className="logo">
        <img src="https://invoicesmanager.netlify.app/static/media/logo.e8c9e71e.svg" alt="logo" />
        <div></div>
      </div>
      <div className="right-bottom">
        <BsFillSunFill className='themeSwitch' />
        <div className="profileImg">
          <img src="" alt="" />
        </div>
      </div>
    </Wrapper>
  ) 
}