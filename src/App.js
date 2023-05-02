import Slider from './components/Slider';
import ComingSoon from './components/ComingSoon';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Slider />
      <ComingSoon />
      <ToastContainer />
    </>
  );
}

export default App;
