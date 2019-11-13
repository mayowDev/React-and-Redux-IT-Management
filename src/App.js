import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";

import AddButton from "./components/layout/AddButton";
import AddLogModal from "./components/logs/AddLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import EditLogModal from "./components/logs/EditLogModal";
import Logs from "./components/logs/Logs";
import TechListModal from "./components/techs/TechListModal";
import SearchBar from "./components/layout/SearchBar";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initialize Materlize.js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddButton />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
