import styled from 'styled-components';
import {Link } from 'react-router-dom';
import callNow from '../../assets/callNow.png';
export const HeaderContainer = styled.div`
  display: flex;
  background: rgb(0,212,255);
  background: linear-gradient(90deg, rgba(0,212,255,0.6110819327731092) 0%, rgba(157,183,157,0.7511379551820728) 100%, rgba(165,174,167,0.2189250700280112) 100%, rgba(2,0,36,1) 100%);
  height: 80px;
  width: 100%;
  align-items: center;

`;
export const OrdinarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
width: 11%;
overflow: hidden;
height: 100%;
cursor: pointer;
&:hover{
  font-size: 20px;
  background-color: #A8C4B3;
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
  
  & h2{
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
  & last-child{
    position: relative;
  }
  }
`;

export const CallNowButton = styled.div`
align-items: center;
background-image: url(${callNow});
background-size: cover;
justify-content: center;
width: 11%;
height: 100%;
cursor: pointer;
.divTel{
  width: 100%;
  height: 100%;
}
`;

export const OrdinarButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 11%;
overflow: hidden;
height: 100%;
cursor: pointer;
&:hover{
  font-size: 20px;
  background-color: #A8C4B3;
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
  
  & h2{
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
  }
`;
export const LanguageDiv = styled.div`
  padding: 5px 5px;
  cursor: pointer;
`;
export const LanguageDivContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 20%;
 
`;