import React, { useContext, useState } from 'react';
import './App.css';

// Criando um contexto para o tema
const ThemeContext = React.createContext();

// Componente que representa a aplicação
const App = () => {
  const [theme, setTheme] = useState('light'); // Estado inicial do tema

  // Função para alternar entre tema claro e escuro
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <h1>Aplicação com Tema {theme === 'light' ? 'Claro' : 'Escuro'}</h1>
        <ThemeToggler />
      </div>
    </ThemeContext.Provider>
  );
};

// Componente que utiliza o contexto para alternar o tema
const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Alternar Tema
    </button>
  );
};

export default App;
