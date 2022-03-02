import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo.js';
import Timer from './timer.js';
import Comment from './comment.js';
import HelloMessage from './hello_message.js';
import ExampleReactBoostrap from './exampleractboostrap.js';
import ExampleNavegacion from './examplenavegacion.js';
import StateHook from './state_hook.js';
import FunctionHook from './function_hook.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './miscss.css'

const comment = {
  date: "11/11/2022",
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function Inicio() {
  return (
    <div>
      <h2>Seleccione alguna cosa</h2>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/reactBootstrap">ReactBootstrap</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/navegacion">Navegacion</Link></li>
        <li><Link to="/temporizador">Temporizador</Link></li>
        <li><Link to="/saludo">Saludo</Link></li>
        <li><Link to="/comentario">Comentario</Link></li>
        <li><Link to="/stateHook">Hook de estado</Link></li>
        <li><Link to="/functionHook">Hook de funcion</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reactBootstrap" element={<ExampleReactBoostrap />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/navegacion/*" element={<ExampleNavegacion />} />
        <Route path="/temporizador" element={<Timer />} />
        <Route path="/saludo" element={<HelloMessage name="Dani" estadoAnimo="al 100" />} />
        <Route path="/comentario" element={<Comment {...comment} />} />
        <Route path="/stateHook" element={<StateHook />} />
        <Route path="/functionHook" element={<FunctionHook />} />
      </Routes>
    </div>
  </Router>,
  document.getElementById('root')
);