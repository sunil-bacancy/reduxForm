/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootreducer from './src/reducer/index';
import App from './App.js';
// import AppNavigator from './src/route/AppNavigator';
// import {logger} from 'redux-logger';

//Screen
// import RegistrationForm from './src/screen/UserFrom/RegistrationForm';
// import Hello from './src/screen/Redux-From/Hello';

// function logger({ getState }) {
//     return next => action => {
//         console.log('will dispatch', action);

//         // Call the next dispatch method in the middleware chain.
//         const returnValue = next(action);

//         console.log('state after dispatch', getState());

//         // This will likely be the action itself, unless
//         // a middleware further in chain changed it.
//         return returnValue;
//     };
// }

const store = createStore(rootreducer);

const AppContainer = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => AppContainer);