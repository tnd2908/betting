import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import AppRoutes from './Components/AppRoutes';
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes/>
			</BrowserRouter>
		</Provider>
	);
}

export default App;