import React from 'react';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import './App.css';
import Payment from './Pages/Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAuthListener } from './hooks/hooks';
import Orders from './Pages/Orders/Orders';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);

function App() {
  useAuthListener();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/checkout" component={Checkout} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/payment">
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/orders" component={Orders}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
