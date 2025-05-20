// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

// Находим DOM-элемент с id "root" и создаём корень для React-приложения
ReactDOM.createRoot(document.getElementById("root")).render(
  // Оборачиваем всё в StrictMode для предупреждений и помощи в отладке
  <React.StrictMode>
    {/* Оборачиваем всё приложение в Redux Provider, передаём store */}
    <Provider store={store}>
      {/* Само приложение */}
      <App />
    </Provider>
  </React.StrictMode>
);