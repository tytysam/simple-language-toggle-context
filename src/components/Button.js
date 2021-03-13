import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext.js";
import ColorContext from "../contexts/ColorContext.js";

class Button extends Component {
  // Below syntax is the same as saying Button.contextType = LanguageContext | it attaches to the class!
  // static contextType = LanguageContext;

  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {/* Consumer syntax here is in place of this.context syntax used previously, now commented-out */}
              {(value) => (value === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
