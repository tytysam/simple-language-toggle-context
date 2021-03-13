import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext.js";

class Button extends Component {
  // Below syntax is the same as saying Button.contextType = LanguageContext | it attaches to the class!
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
