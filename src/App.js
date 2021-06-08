import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import eng from './language/eng.json';
import mne from './language/mne.json';
import { setDefaultTranslations, setDefaultLanguage } from 'react-switch-lang';
import PrivateRoute from './privateRoute/PrivateRoute';
import React, { Suspense } from 'react';
const Login = React.lazy(() => import('./pages/Login/Login'))
const Home = React.lazy(() => import('./pages/Home/Home'))
const Clients = React.lazy(() => import('./pages/Clients/Clients'))
const Reservations = React.lazy(() => import('./pages/Reservations/Reservations'))
const Vehicles = React.lazy(() => import('./pages/Vehicles/Vehicles'))
function App() {
  setDefaultTranslations({ eng, mne });
  const lang = localStorage.getItem('lang');
  lang ? setDefaultLanguage(lang) : setDefaultLanguage('mne');
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact component={() => <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>}></PrivateRoute>
          <PrivateRoute path="/home" exact component={() => <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>}></PrivateRoute>
          <PrivateRoute path="/vehicles" exact component={() => <Suspense fallback={<div>Loading...</div>}><Vehicles /></Suspense>}></PrivateRoute>
          <PrivateRoute path="/clients" exact component={() => <Suspense fallback={<div>Loading...</div>}><Clients /></Suspense>}></PrivateRoute>
          <PrivateRoute path="/reservations" exact component={() => <Suspense fallback={<div>Loading...</div>}><Reservations /></Suspense>}></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
