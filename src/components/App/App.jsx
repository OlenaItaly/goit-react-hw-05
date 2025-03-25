import { Route, Routes } from 'react-router';
import HomePage from '../../pages/HomePage';
import Navigation from '../Navigation/Navigation';
import css from './App.module.css'


export default function App() {
    return (
      <div className={CSS.container}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<div><h1>this is MOVIES PAGE</h1></div>}></Route>
        </Routes>
      </div>
    );
}