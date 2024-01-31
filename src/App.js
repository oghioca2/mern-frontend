import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {MainLayout} from './styles/Layouts';
import Navigation from "./Components/Navigation/Navigation";
import { GlobalStyle } from "./styles/GlobalStyle";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch(active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  };

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNavVisible(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppStyled className="App">
      <GlobalStyle />
      <MainLayout>
      {isNavVisible && <Navigation active={active} setActive={setActive} toggleNavVisibility={toggleNavVisibility} />}
        <main style={{ display: isNavVisible && window.innerWidth <= 768 ? "none" : "block" }}>
          {displayData()}
        </main>
        <div className="mobile-menu-button" onClick={toggleNavVisibility}>
          <i className="fas fa-bars"></i>
        </div>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: var(--background-color);
    border: 3px solid var(--color-white);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  .mobile-menu-button {
    display: none;
    position: fixed;
    top: 3rem;
    right: 3rem;
    font-size: 2rem;
    background: transparent;
    color: var(--primary-color4);
    cursor: pointer;
    z-index: 10;
  }

  @media only screen and (max-width: 768px) {
    .mobile-menu-button {
      display: block;
    }
  }
`;

export default App;
