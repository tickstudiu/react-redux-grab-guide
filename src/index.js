import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';
import './imports/assets/css/style.css';

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
