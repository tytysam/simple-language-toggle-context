import React, { Component } from "react";
import UserCreate from "./UserCreate.js";
import LanguageSelector from "./LanguageSelector.js";
import { LanguageStore } from "../contexts/LanguageContext.js";
import ColorContext from "../contexts/ColorContext.js";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />

          <ColorContext.Provider value="orange">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
