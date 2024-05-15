import { BrowserRouter } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import {store} from 'src/redux/store'
import './index.css'
import i18n from 'src/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>,
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
