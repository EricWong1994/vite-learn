import React from 'react';

export default function Sizing() {
	return (
		<div>
			<div className='w-1/2 bg-green-300'>
				<div className='w-1'>width: 0.25rem; /* 4px */</div>
				<div className='w-4'>width: 1rem; /* 16px */</div>
				<div className='w-10'>width: 2.5rem; /* 40px */</div>
				<div className='w-px'>width: 1px</div>
				{/* 不支持下面的写法 */}
				{/* <div className='w-200px'>width: 200px</div> */}
				<div className='w-auto'>w-auto</div>
				<div className='w-full'>width: 100%;</div>
				<div className='w-screen bg-yellow-200'>width: 100vw;</div>
				<div className='w-fit'>width: fit-content;</div>
			</div>
		</div>
	);
}
