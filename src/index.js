import React from 'react';
import { Provider } from 'react-redux';
import store from './store'

import Routes from './routes.js'
import { setNavigator } from './services/navigation'

const App = () => (
    <Provider store={store}>
        <Routes ref={setNavigator}></Routes>
    </Provider>
);

export default App;
