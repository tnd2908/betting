import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import './styles/styles.scss'
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import AppRoutes from './AppRoutes';
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
