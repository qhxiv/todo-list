import { useState } from 'react';

function Header() {
  return (
    <header>
      <h1 className="header__title">Todos</h1>
      
      <button className="header__dark">
        <i class="fa-solid fa-moon"></i>
      </button>
    </header>
  );
}

export default Header;