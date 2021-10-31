import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddService from './pages/AddService/AddService';
import Booking from './pages/Booking/Booking';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound'
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>


            <PrivateRoute path="/booking/:serviceId">

              <Booking></Booking>

            </PrivateRoute>

            <PrivateRoute path="/AddService">
              <AddService></AddService>
            </PrivateRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
           <Footer></Footer>

         
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
