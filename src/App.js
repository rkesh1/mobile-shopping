import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ProductListContext from "./context/productListContext";
import LoginContext from "./context/loginContext";
import Header from "./components/Header";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Login from "./Login";

// bootstrap css for grid
import "bootstrap-scss/bootstrap.scss";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const value = {
    products,
    setProducts,
    cart,
    setCart,
  };
  const loginInitial = { isLogin, setIsLogin };
  return (
    <LoginContext.Provider value={loginInitial}>
      <ProductListContext.Provider value={value}>
        <div className="container">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/" component={Home} />
              <Route exact path="/detail/:id" component={ProductDetail} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
        </div>
      </ProductListContext.Provider>
    </LoginContext.Provider>
  );
};

export default App;
