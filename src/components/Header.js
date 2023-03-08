import React from "react";

function Header() {
  return (
    <div className="header">

      <div className="header-one">
        <h1 className="book">
          M-BOOK<span id="point">.</span>
        </h1>
      </div>

      <div className="header-two">
        <input type="search" placeholder="Search by name, author" />
        <button>Search</button>
      </div>

      <div className="header-there">
        <p>Menu</p>
        <p>Books</p>
        <p>Sign in</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHx1uhoGgCcPU5MvylLUz8WObWcGQBs4JDg&usqp=CAU" />
        <p>Og'abek</p>
      </div>
    </div>
  );
}

export default Header;
