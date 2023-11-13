
function Header(){
    return(
        <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box text-center">
              <a href="index.html" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="logo-sm-dark" height="22" />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-dark.png" alt="logo-dark" height="24" />
                </span>
              </a>
  
              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="logo-sm-light" height="22" />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-light.png" alt="logo-light" height="24" />
                </span>
              </a>
            </div>
  
            <button
              type="button"
              className="btn btn-sm px-3 font-size-24 d-lg-none header-item"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <i className="ri-menu-2-line align-middle"></i>
            </button>
  
            {/* App Search */}
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="ri-search-line"></span>
              </div>
            </form>
          </div>
  
          <div className="d-flex">
            {/* Language Dropdown */}
            {/* ... */}
  
            {/* Other Dropdowns and Buttons */}
            {/* ... */}
  
            {/* User Dropdown */}
            {/* ... */}
  
            {/* Right Bar Toggle */}
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="mdi mdi-cog"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;