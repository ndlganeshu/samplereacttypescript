import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from './src/components/FirstComponent';
import UserComponent from './src/components/UserComponent';
ReactDOM.render(
  <div>
    <h1>Hello, Welcome to the first page</h1>
    <FirstComponent/>
    <UserComponent name="Logrocket" age={105} address="get me if you can" dob={new Date()} />
  </div>,
  document.getElementById("root")
);
