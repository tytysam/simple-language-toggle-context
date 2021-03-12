import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext.js";

class Button extends Component {
  // Below syntax is the same as saying Button.contextType = LanguageContext | it attaches to the class!
  static contextType = LanguageContext;

  render() {
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;
