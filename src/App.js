import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import eng from './language/eng.json';
import mne from './language/mne.json';
import { setDefaultTranslations, setDefaultLanguage } from 'react-switch-lang';
import PrivateRoute from './privateRoute/PrivateRoute';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  setDefaultTranslations({ eng, mne });
  const lang = localStorage.getItem('lang');
  lang ? setDefaultLanguage(lang) : setDefaultLanguage('mne');
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact component={Login}></PrivateRoute>
          <PrivateRoute path="/home" exact component={Home}></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
