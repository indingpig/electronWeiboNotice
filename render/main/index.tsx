import React, { useEffect, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ipcRenderer } from 'electron';

const App = () => {
	const [localCode, setLocalCode] = useState('');//本身的控制码
	let localCode1 = true;
	if (localCode1 === true) {
		//
	}
	return <div>
		<div>hello react</div>
	</div>;
};
const container: HTMLElement | null = document.getElementById('root') || document.createElement('id');
const root = ReactDOMClient.createRoot(container);
root.render(<App></App>);

