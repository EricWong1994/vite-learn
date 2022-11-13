import { useState } from 'react';
import { Foo } from 'dumi-ui';
import { Button } from 'antd';
// import Trycatch from './Trycatch';
// import Trycatch from './demos/errorCatch/trycatch';
import Trycatch from './demos/errorCatch/Trycatch';
import IconDemo from './demos/iconDemo/index';
import AutoImport from './demos/autoImport/index';
import SvgComponent from './demos/svgdemo/hello';
import { Avatar } from './assets/images';
import 'antd/dist/antd.css';
import { Logo } from './assets/svgs';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1 className='text-3xl font-bold bg-red-200 underline'>
				Hello Tailwindcss
			</h1>
			<img src={Avatar} alt='' className='w-20px' />
			<header className='App-header'>
				{/* SVG面积太大了 */}
				{/* <SvgComponent /> */}
				<AutoImport />
				<IconDemo />
				<Trycatch />
				{/* <img src={Logo} className='App-logo' alt='logo' /> */}
				<Logo />
				<Button type='primary'>antd按钮</Button>
				<Foo title='dumi-ui测试'></Foo>
			</header>
		</div>
	);
}

export default App;
