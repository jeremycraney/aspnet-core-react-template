import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Landing } from "./components/Landing";

ReactDOM.render(
    <Router>
        <Route path="/" component={Landing}/>
    </Router>,
    document.getElementById("app")
);

