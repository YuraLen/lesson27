// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from 'react'
import {UserInfo} from './userInfo.js'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function Greetings(p) {
  return <h1>Hi, {p.name}, nice to meat you!</h1>
}

const userName = prompt("Как Вас зовут?");
const userAge = prompt("Сколько Вам лет?");
function whereYouNeedToGoTomorrow() {
  if (userAge >= 2 && userAge <= 5) {
    return <p>Скорее всего, завтра вам нужно идти в детский сад</p>;
  } else if (userAge >= 6 && userAge <= 17) {
    return <p>Скорее всего, завтра вам нужно идти в школу</p>;
  } else if (userAge >= 18 && userAge <= 24) {
    return <p>Скорее всего, завтра вам нужно идти в универ</p>;
  } else if (userAge >= 24 && userAge <= 60) {
    return <p>Скорее всего, завтра вам нужно идти на работу</p>;
  } else {
    return <p style={{ color: "red" }}>Произошла ошибка</p>;
  }
}
ReactDOM.render(
  <div>
    <Greetings class="GreetingStyle" name="Yura"/>
    <h2>
      Hi there. My name is {userName} and i'm {userAge} y.o.
    </h2>

    {whereYouNeedToGoTomorrow()},

    <br/>
    <h3>Задание со UserInfo</h3>

    <UserInfo userName={'Вова'} userGender={'муж'} userAge={27} yearsWorked={1} salery/>
    <UserInfo userName={'Иван'} userGender={'муж'} userAge={21} yearsWorked={2} salery/>
    <UserInfo userName={'Ольга'} userGender={'жен'} userAge={37} yearsWorked={3} salery/>
  </div>,
  document.querySelector('#app')
);
