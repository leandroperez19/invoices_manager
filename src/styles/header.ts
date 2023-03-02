import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 80%;
  height: 3em;
  position: relative;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .invoicesAmount{
    h1{
      font-size: 30px;
      font-weight: 500;
      color: #fff;
    }
    span{
      color: #aaa;
    }
  }
  .right{
    display: flex;
    height: 100%;
    align-items: center;
    .filterBtn{
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 5px;
    span{
      color: #fff;
      font-size: 18px;
    }
    .chevronIcon{
      color: #7C5DFA;
      font-size: 22px;
    }
  }
  button{
    height: 100%;
    padding:  7px;
    color: #fff;
    position: relative;
    border-radius: 25px;
    border: none;
    outline: none;
    background-color: #7C5DFA;
    display: flex;
    align-items: center;
    .plusIcon{
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      width: 30px;
      height: 100%;
      span{
        font-size: 28px;
        font-weight: 600;
        color: #7C5DFA;
        margin: 0;
      }
    }
    span{
      margin: 0 7px;
      font-size: 18px;
    }
  }
  }
`