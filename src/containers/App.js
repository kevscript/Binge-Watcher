import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
import MoviesPage from "./MoviesPage";
import MoviePage from "./MoviePage";
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";
import ErrorPage from "./ErrorPage";
import Sidebar from "../components/Sidebar";
import Burger from "../components/Burger";

const Container = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  padding: 2rem 1rem;
  height: 100vh;
  overflow-y: auto;
  width: 18rem;
  overflow-x: hidden;
  position: fixed;
  left: 0;
  transition: all 0.5s;
  background: rgb(255, 255, 255);

  @media (max-width: 1024px) {
    z-index: 98;
    left: ${(props) => (props.toggled ? 0 : "-18rem")};
    transition: all 0.5s;
  }
`;

const MainContainer = styled.div`
  width: calc(100% - 18rem);
  margin-left: 18rem;
  transition: all 0.5s;
  background-color: rgb(250, 250, 250);
  padding: 3rem 0;

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Menu = styled.div`
  cursor: pointer;
  z-index: 99;
  position: fixed;
  top: 15px;
  left: -50px;

  @media (max-width: 1024px) {
    left: 1rem;
    transition: all 0.3s;
  }
`;

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindow);
  });

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleWindow = () => {
    if (window.innerWidth >= 1000) {
      setToggleMenu(false);
    }
  };

  return (
    <Container>
      <Menu onClick={handleMenu} toggled={toggleMenu}>
        <Burger />
      </Menu>

      <SidebarContainer toggled={toggleMenu}>
        <Sidebar />
      </SidebarContainer>

      <MainContainer>
        <Switch>
          <Route exact path="/" component={MoviesPage} />
          <Route
            path="/movies/:id"
            component={(props) => (
              <MoviePage timestamp={new Date().toString()} {...props} />
            )}
          />
          <Route path="/profile/:id" component={ProfilePage} />
          <Route
            path="/search/:value"
            component={(props) => (
              <SearchPage timestamp={new Date().toString()} {...props} />
            )}
          />

          <Route component={ErrorPage} />
        </Switch>
      </MainContainer>
    </Container>
  );
};

export default withRouter(App);
