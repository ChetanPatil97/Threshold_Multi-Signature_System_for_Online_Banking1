import { ToastContainer} from 'react-toastify'; //copied from npmjs.com/package/react-toastify
import 'react-toastify/dist/ReactToastify.css'; //copied from npmjs.com/package/react-toastify
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import UserLogin from './components/UserLogin';

function App() {
  return (
    
     
     <Router>
      <Switch>
      <Route path='/user/login' exact component = {UserLogin} />
      </Switch>
      </Router>
   
  );
}

export default App;
