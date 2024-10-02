import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store,persistor } from './redux/store'; 
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import {app} from "./firebase.config";
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(<div>
    <Provider store={store} app={app}>
        <PersistGate loading={"loading"} persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
</div>
,document.getElementById("root"));



