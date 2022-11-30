import * as React from 'react';
import { createPortal } from 'react-dom';
import {Balloons} from './Balloons';
import { random } from './utils';


const ReactFloatingBalloons = ({


    
	prob = random(0,10),
    count = 1,
	// for(int i=0;i<7;i++) {
	msgText = 'uu',
	colors = ['yellow', 'green', 'blue', 'red', 'orange', 'purple'],
	popVolumeLevel = 0.5,
	loop = false,
	hangOnTop = false,
	// duration = 10000,
	delay = 1,
	// name,
	// }
}) => {
	const [CSR, setCSR] = React.useState(false)
	React.useEffect(() => {
		setCSR(true)
	}, []);
	if(hangOnTop && loop) {
		return new Error('`loop` has to be `false` for `hangOnTop` feature.');
	}
	return createPortal(
		<div id='portal-balloons'>
			{CSR ? <Balloons {...{count, msgText, colors, popVolumeLevel, loop, hangOnTop,delay,prob}}/> : null}
		</div>,
		document.body
	);
};

export { ReactFloatingBalloons };