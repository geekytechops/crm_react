import React, { useState , useEffect } from 'react';
import $ from 'jquery';

function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const signInValidation = () => {
    // Add your sign-in validation logic here
  };

  useEffect(()=>{
    $('#page-topbar').hide();
  },[])

  return (
    <div className="bg-pattern" style={{ overflow: 'hidden' }}>
      <div className="bg-overlay"></div>
      <div className="account-pages my-5 pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="card">
                <div className="card-body p-4">
                  <div>
                    <div className="text-center">
                      <a href="index.html">
                        <img
                          src="images/logo-light.png"
                          alt=""
                          height="50"
                          className="auth-logo logo-light mx-auto"
                        />
                      </a>
                    </div>
                    <form autoComplete="off">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label className="form-label" htmlFor="username">
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder="Enter username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              autoComplete="off"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="form-label" htmlFor="userpassword">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="user_password"
                              placeholder="Enter password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              autoComplete="off"
                            />
                          </div>

                          <div className="row">
                            <div className="col-12">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="remember-me"
                                  checked={rememberMe}
                                  onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label className="form-label form-check-label" htmlFor="customControlInline">
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <div className="col-7"></div>
                          </div>

                          <div className="mt-2 d-flex justify-content-center align-items-center">
                            <div style={{ width: '100%', zIndex: 1 }}>
                              <button
                                style={{ width: '100%' }}
                                className="btn btn-primary waves-effect waves-light"
                                onClick={signInValidation}
                              >
                                <span id="login-text">Log In</span>
                              </button>
                            </div>
                            <div className="fa-2x" style={{ color: '#fff', position: 'absolute', display: 'flex' }}>
                              <i id="login-spinner" className="fas fa-cog fa-spin"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="text-white-50">© {new Date().getFullYear()} Shiftwave. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login