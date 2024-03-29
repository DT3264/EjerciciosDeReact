import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function ExampleNavegacion() {
  return (
    <div>
      <ul>
        <li><Link to="">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="dashboard">Dashboard</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

