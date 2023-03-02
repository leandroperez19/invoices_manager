import styled from "styled-components";

export const Wrapper = styled.div`
  height: 5em;
  width: 100vw;
  background-color: #1E2139;
  position: relative;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 100vh;
    width: 5em;
    flex-direction: column;
    border-radius: 0 25px 25px 0;
  }
  .logo{
    width: 10%;
    max-width: 80px;
    height: 100%;
    border-radius: 0 25px 25px 0;
    background-color: #7C5DFA;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @media (min-width: 768px) {
      width: 100%;
      height: 10%;
    }
    img{
      z-index: 5;
    }
    div{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background-color: #9277FF;
      border-radius: 25px 0 0 0;
    }
  }
  .right-bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    .themeSwitch{
      font-size: 25px;
      color: #ccc;
    }
    .profileImg{
      /* margin-top: 20px; */
      margin-bottom: 60px;
      border-top: 1px solid #ccc;
      width: 100%;
      background-color: #004;
      height: fit-content;
      img{
        height: 75px;
        width: 25px;
        background-color: #fff;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
`