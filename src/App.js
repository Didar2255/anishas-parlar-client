import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services/Services';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import Error from './Pages/Error/Error/Error';
import Register from './Pages/Login/Register/Register';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivetRoute from './Firebase/PrivetRoute/PrivetRoute';
import Booking from './Pages/Booking/Booking/Booking';
import Navigation from './Pages/Shaered/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivetRoute path='/service/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivetRoute>
            <PrivetRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute path='/booking'>
              <Booking></Booking>
            </PrivetRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
