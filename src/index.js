import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //官方严格模式，检查不合理的代码，启用这个就必须遵守规范
  // useEffect 会被执行两次，因为 StrictMode 会在渲染两次组件树，以检查是否有副作用
  // 开发中建议使用，生产环境不建议使用
    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
