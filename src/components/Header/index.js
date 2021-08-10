import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import ProductListContext from "../../context/productListContext";
import loginContext from "../../context/loginContext";
import "./style.scss";

const Header = () => {
  console.log("header,");
  const [isShow, setIsShow] = useState(false);
  const { cart } = useContext(ProductListContext);
  const cartLen = cart.length;

  const { isLogin, setIsLogin } = useContext(loginContext);
  const logout = () => {
    showLogout();
    setIsLogin(!isLogin);
  };

  const showLogout = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <nav className="bg-light">
        <div className="flex-between p10">
          <Link to="/">
            <h1 className="logo">Mob Online</h1>
          </Link>
          <div className="user-info flex">
            <div className="flex">
              {isLogin ? (
                <div className="user-profile flex mr10 relative">
                  <img src="/assest/img/icons/profile.png" alt="" width="30" />
                  <span onClick={showLogout}>User Name</span>
                  {isShow && (
                    <div className="absolute position-logout">
                      <button
                        type="button"
                        className="btn btn-outline-secondary mr10"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-outline-secondary mr10"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>

            <div className="cart_icon flex">
              {" "}
              <Link to="/cart">
                <img src="/assest/img/icons/cart.png" alt="" />
              </Link>
              <div className="cart_count">
                <span>{cartLen}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
