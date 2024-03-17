import { useState } from 'react';

function Header() {
  const initScheme = localStorage.getItem('localScheme') || 'light';
  const [scheme, setScheme] = useState(initScheme);
  document.body.style.colorScheme = initScheme;

  function toggleDarkMode() {
    let nextScheme = scheme === 'dark' ? 'light' : 'dark';
    setScheme(nextScheme);
    document.body.style.colorScheme = nextScheme;
    localStorage.setItem('localScheme', nextScheme);
  }

  return (
    <header>
      <h1 className="header__title">Todos</h1>
      
      <button onClick={toggleDarkMode} className="header__dark">
        <i className={scheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
      </button>
    </header>
  );
}

export default Header;