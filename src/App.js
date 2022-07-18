import { ToastContainer } from 'react-toastify';
import Main from "./components/subComponents/Main.jsx";
import Header from './components/subComponents/Header';



function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Main/>
    </>
  );
}

export default App;
