// 见: https://github.com/EricWong1994/blog/blob/master/docs/post/work/trycatch.md

import React, { useEffect } from 'react';

export default function Trycatch() {
	const logMyErrors = e => {
		console.log('e: ', e); // myException
	};
	// useEffect(() => {
	// 	try {
	// 		throw 'myException'; // generates an exception
	// 	} catch (e) {
	// 		// statements to handle any exceptions
	// 		logMyErrors(e); // pass exception object to error handler
	// 	}
	// }, []);

	// demo1
	// useEffect(() => {
	// 	try {
	// 		try {
	// 			throw new Error('oops');
	// 		} finally {
	// 			console.log('finally');
	// 		}
	// 	} catch (ex) {
	// 		console.error('outer', ex.message);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	console.log('异步任务');
	// 	// setTimeout中的错误
	// 	try {
	// 		setTimeout(function () {
	// 			throw new Error('error in setTimeout'); // 200ms后会把异常抛出到全局
	// 		}, 200);
	// 	} catch (err) {
	// 		console.error('catch error', err); // 不会执行
	// 	}

	// 	// Promise中的错误
	// 	try {
	// 		Promise.resolve().then(() => {
	// 			throw new Error('error in Promise.then');
	// 		});
	// 	} catch (err) {
	// 		console.error('catch error', err);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	// 将try-catch放到setTimeout内部
	// 	setTimeout(() => {
	// 		try {
	// 			throw new Error('error in setTimeout');
	// 		} catch (err) {
	// 			console.error('catch error', err);
	// 		}
	// 	}, 200);

	// 	// 将try-catch放到then内部
	// 	Promise.resolve().then(() => {
	// 		try {
	// 			throw new Error('error in Promise.then');
	// 		} catch (err) {
	// 			console.error('catch error', err);
	// 		}
	// 	});

	// 	// 使用Promse自带的catch捕获异常
	// 	Promise.resolve()
	// 		.then(() => {
	// 			throw new Error('error in Promise.then');
	// 		})
	// 		.catch(err => {
	// 			console.error('Promise.catch error', err);
	// 		});
	// }, []);

	// async...await
	// const somethingThatReturnsAPromise = () => {
	// 	return new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			reject('error in reject');
	// 		}, 0);
	// 	});
	// };

	// const request = async () => {
	// 	try {
	// 		const { code, data } = await somethingThatReturnsAPromise();
	// 	} catch (err) {
	// 		console.error('request error', err);
	// 	}
	// };

	// useEffect(() => {
	// 	request();
	// }, []);

	useEffect(() => {
		function handleErrors(response) {
			if (!response.ok) {
				throw Error(response.statusText);
			}
		}

		(async function () {
			try {
				let response = await fetch('http://httpstat.us/500');
				handleErrors(response);
				let data = await response.json();
				return data;
			} catch (error) {
				console.log('Caught', error);
			}
		})();
	}, []);

	// useEffect(() => {
	// 	function handleErrors(response) {
	// 		if (!response.ok) {
	// 			throw Error(response.statusText);
	// 		}
	// 		return response;
	// 	}

	// 	fetch('http://httpstat.us/500')
	// 		.then(handleErrors)
	// 		.then(response => console.log('ok'))
	// 		.catch(error => console.log('Caught', error));
	// }, []);

	return <div>Trycatch</div>;
}
