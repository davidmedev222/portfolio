import './styles/App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalContextProvider } from './context/global/GlobalContextProvider';
import { ParallaxProvider } from 'react-scroll-parallax';
import { App } from './routes/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);
