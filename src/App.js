import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { configureStore } from './redux/ConfigureStore';
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore()

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
