import React from 'react';
import styled from 'styled-components';
import { AccountBox } from '../accountBox/index';
import { Routes, Route} from "react-router-dom";
import Home from './Home';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top:2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Main = () => {
    return (
        <>
            <AppContainer>
            <Routes>
                <Route path="/" element={<AccountBox />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
            </AppContainer>
        </>
    )
}

export default Main;