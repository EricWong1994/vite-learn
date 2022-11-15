import React from 'react';

export default function FontSize() {
	return (
		<div className='w-full bg-blue-200'>
			FontSize
			<div className='text-xs'>
				font-size: 0.75rem; /* 12px */ line-height: 1rem; /* 16px */
			</div>
			<div className='text-sm'>
				font-size: 0.875rem; /* 14px */ line-height: 1.25rem; /* 20px */
			</div>
			<div className='text-base'>
				font-size: 1rem; /* 16px */ line-height: 1.5rem; /* 24px */
			</div>
			<div className='text-lg'>
				font-size: 1.125rem; /* 18px */ line-height: 1.75rem; /* 28px */
			</div>
			<div className='text-xl'>
				font-size: 1.25rem; /* 20px */ line-height: 1.75rem; /* 28px */
			</div>
			<div className='text-2xl'>
				font-size: 1.5rem; /* 24px */ line-height: 2rem; /* 32px */
			</div>
			text-9xl: font-size: 8rem; /* 128px */ line-height: 1;
		</div>
	);
}
