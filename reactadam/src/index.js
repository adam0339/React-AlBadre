import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import IndexRoute from './routes';
import UserRoute from './routes/user';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexRoute/>} />
      <Route path="/user/:id" element={<UserRoute/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
