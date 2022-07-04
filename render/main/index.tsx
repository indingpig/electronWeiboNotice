import React, { useEffect, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Login from './src/views/login';
import './src/css/index.scss';

const App = () => {
	
	return (
		<div>
			<div>hello react</div>
			<Login></Login>
			{/* <div> 本身的控制码:  {localCode} </div> */}
		</div>
	);
};
const container: HTMLElement | null = document.getElementById('root') || document.createElement('id');
const root = ReactDOMClient.createRoot(container);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

