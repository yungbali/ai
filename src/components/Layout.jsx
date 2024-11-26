import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <main className="wrapper sb-default">
      <header className="gx-header">
        <div className="container-fluid">
          <div className="gx-header-items">
            <div className="left-header">
              <Link to="/" className="gx-sb-logo">
                Amigo GPT
              </Link>
            </div>
            <div className="right-header">
              <Link to="/settings" className="btn-topic m-r-5">
                <i className="ri-settings-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <div className="gx-main-content">
        <div className="container-fluid">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;