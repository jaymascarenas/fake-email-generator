import React, { Component } from "react";

class GenerateEmail extends Component {
  state = {
    email: "test@test.com"
  };

  randChars = length => {
    let text = "";
    const possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  randExtensions = () => {
    const arr = [
      "app",
      "blog",
      "co",
      "com",
      "io",
      "org",
      "biz",
      "church",
      "net",
      "tech",
      "me",
      "info",
      "site",
      "news"
    ];
    return arr[Math.floor(Math.random() * arr.length)];
  };

  callback = () => {
    navigator.clipboard.writeText(this.state.email);
  };

  generate = () => {
    const localPart = this.randChars(12);
    const domainPart = this.randChars(6);
    const lastPart = this.randExtensions();
    this.setState(
      {
        email: `${localPart}@${domainPart}.${lastPart}`
      },
      this.callback
    );
    console.log(this.state.email);
  };

  render() {
    return (
      <div>
        <div className="container" style={this.containerStyles}>
          <h3 className="header">CakeKiller's Email Generator</h3>
          <h2>{this.state.email}</h2>
          <button onClick={this.generate}>Generate New Email</button>
        </div>
      </div>
    );
  }
}

export default GenerateEmail;
