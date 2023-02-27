import { ToastContainer} from 'react-toastify'; //copied from npmjs.com/package/react-toastify
import 'react-toastify/dist/ReactToastify.css'; //copied from npmjs.com/package/react-toastify
import './App.css';

function App() {
  return (
    <div className="App">
     <ToastContainer position='top-center' />
     <h2>Hello React</h2>
    </div>
  );
}

export default App;
