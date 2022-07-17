import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import {AccountBox} from './components/accountBox/index';
import Header from './components/subComponents/Header';
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top:2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function App() {
  return (
    <>
    <ToastContainer/>
    <Header/>
    <AppContainer>
      <AccountBox/>
    </AppContainer>
    </>
  );
}

export default App;
