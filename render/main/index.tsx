import React, { useEffect, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Login from './src/views/login';

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
root.render(<App></App>);

