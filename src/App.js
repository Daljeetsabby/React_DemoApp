import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Registration from './Registration/Registration';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import loginpage from './Registration/loginpage';
import HomePage from './homepage/HomePage';
import EditProduct from './Component/EditProduct';
import ViewProduct from './Component/ViewProduct'
import UserDetails from './Component/UserDetails';
import { useHistory } from 'react-router-dom';

const AddProduct = lazy(() => import('./Component/AddProduct'));
const About = lazy(() => import('./Component/About'));
const store = configureStore();
const loggedIn = localStorage.getItem("loggedIn");

function App() {
  const history = useHistory()
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/register" component={Registration} />
              <Route exact path="/" component={HomePage} />
              <Route path="/about" render={() => (<Suspense fallback={<h1>Loading...</h1>}> <About /> </Suspense>)} />
              <Route path="/login" component={loginpage} />
              <Route path="/addProduct" render={() => (<Suspense fallback={<h1>Loading...</h1>}> <AddProduct /> </Suspense>)} />
              <Route path="/updateProduct" component={EditProduct} />
             {/* loggedIn ? <Route path="/ViewProduct" component={ViewProduct} /> :  <Redirect from="/ViewProduct" to="/"/> */}
              <Route exact path="/UserDetail" component={UserDetails} />
              <Route path="/ViewProduct" component={ViewProduct} />
              <Redirect from="/home" to="/" />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}
export default App;
