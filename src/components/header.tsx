import React from 'react';
import { HeaderWrap } from '../styles/header';
import {BiChevronDown} from 'react-icons/bi';
// import {AiOutlinePlus} from 'react-icons/ai';

export default function Header({invoices} : {invoices: number | null}){
  return(
    <HeaderWrap>
      <div className="invoicesAmount">
        <h1>Invoices</h1>
        <span>
          {!invoices ? 'No invoices' : invoices}
        </span>
      </div>
      <div className="right">
        <div className="filterBtn">
          <span>Filter</span>
          <BiChevronDown className='chevronIcon' />
        </div>
        <button>
          <div className="plusIcon">
            <span>+</span>
          </div>
          <span>New</span>
        </button>
      </div>
    </HeaderWrap>
  )
}