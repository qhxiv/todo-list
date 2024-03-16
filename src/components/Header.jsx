import { useState } from 'react';

function Header() {
  const [scheme, setScheme] = useState('light');

  function toggleDarkMode() {
    setScheme(scheme === 'dark' ? 'light' : 'dark');
    document.body.style.colorScheme = scheme;
  }
  
  

  return (
    <header>
      <h1 className="header__title">Todos</h1>
      
      <button onClick={toggleDarkMode} className="header__dark">
        <i className={scheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i>
      </button>
    </header>
  );
}

export default Header;