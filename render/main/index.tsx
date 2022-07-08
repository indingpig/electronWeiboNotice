import React, { useEffect, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './src/views/login';
import Home from './src/views/home';
import './src/css/index.scss';

const App = () => {
	
	return (
		<BrowserRouter >
			<div>
				<div>hello react</div>
				<Link to='/login'>login</Link>
				<br />
				<Link to='/home'>home</Link>
				<Routes>
					<Route path='/login' element={<Login></Login>}></Route>
					<Route path='/home' element={<Home></Home>}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
const container: HTMLElement | null = document.getElementById('root') || document.createElement('id');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);

