import React, { Component } from "react";
import UserCreate from "./UserCreate.js";
import LanguageSelector from "./LanguageSelector.js";
import LanguageContext from "../contexts/LanguageContext.js";
import ColorContext from "../contexts/ColorContext.js";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="orange">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
