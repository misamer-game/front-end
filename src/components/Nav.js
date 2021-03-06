import React from "react";

const authenticatedOptions = (changeActivePage, onSignout) => (
  <React.Fragment>
    <li
      className="nav-item changeNav"
      onClick={() => changeActivePage("change-password")}
    >
      <div className="nav-link">غير البااسورور</div>
    </li>
    <li className="nav-item changeNav" onClick={() => onSignout()}>
      <div className="nav-link">خروج</div>
    </li>
  </React.Fragment>
);

const unauthenticatedOptions = changeActivePage => (
  <React.Fragment>
    <li className="nav-item changeNav" onClick={() => changeActivePage("sign-in")}>
      <div className="nav-link">أدخل</div>
    </li>
    <li className="nav-item changeNav" onClick={() => changeActivePage("sign-up")}>
      <div className="nav-link">سجل</div>
    </li>
  </React.Fragment>
);

const alwaysOptions = changeActivePage => (
  <React.Fragment>
    <li className="nav-item changeNav" onClick={() => changeActivePage("home")}>
      <div className="nav-link">هجول</div>
    </li>
  </React.Fragment>
);

const Nav = ({ user, changeActivePage, onSignout }) => (
  <nav className="navbar navbar-expand-lg">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="nav navbar-nav navbar-right">
        {alwaysOptions(changeActivePage)}

        {user
          ? authenticatedOptions(changeActivePage, onSignout)
          : unauthenticatedOptions(changeActivePage)}
        {/* {user && (
          <li className="nav-item">
            <div className="nav-link"> Hola, {user.email.split("@")[0]}</div>
          </li>
        )} */}
      </ul>
    </div>
  </nav>
);

export default Nav;
