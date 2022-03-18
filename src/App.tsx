import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import './styles/styles.scss'
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './state-management/store';
import AppRoutes from './app-routes';
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
