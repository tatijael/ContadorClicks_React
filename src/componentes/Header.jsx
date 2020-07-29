import React from "react";

const Header = ({ clickCount }) => {
  return (
    <div>
      <nav className=" header navbar navbar-dark bg-dark">
        <div className="container">
          <div className="row m-auto">
            <i className="fa fa-hand-pointer-o fa-4x text-white" />
            <div className="h1 ml-2 my-auto text-light" href="/">
              Contador de clicks {clickCount}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
