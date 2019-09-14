import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './app-routes';
ReactDom.render( <
    Router >
    <
    AppRoutes / >
    <
    /Router>,
    document.getElementById("root"));