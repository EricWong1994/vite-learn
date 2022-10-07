import React, { useEffect } from 'react';

export default function Trycatch() {
	const logMyErrors = e => {
		console.log('e: ', e); // myException
	};
	useEffect(() => {
		try {
			throw 'myException'; // generates an exception
		} catch (e) {
			// statements to handle any exceptions
			logMyErrors(e); // pass exception object to error handler
		}
	}, []);

	// demo1
	useEffect(() => {
		try {
			try {
				throw new Error('oops');
			} finally {
				console.log('finally');
			}
		} catch (ex) {
			console.error('outer', ex.message);
		}
	}, []);

	useEffect(() => {
		// console.log('demo-2');
	}, []);

	return <div>Trycatch</div>;
}
