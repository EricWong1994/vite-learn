import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Foo } from 'dumi-ui';
import { Button } from 'antd';
import 'antd/dist/antd.css';
// import Trycatch from './Trycatch';
// import Trycatch from './demos/errorCatch/trycatch';
import Trycatch from './demos/errorCatch/Trycatch';
import IconDemo from './demos/iconDemo/index';
import AutoImport from './demos/autoImport/index';
import SvgComponent from './demos/svgdemo/hello';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				{/* SVG面积太大了 */}
				{/* <SvgComponent /> */}
				<AutoImport />
				<IconDemo />
				<Trycatch />
				<img src={logo} className='App-logo' alt='logo' />
				<Button type='primary'>antd按钮</Button>
				<Foo title='dumi-ui测试'></Foo>
			</header>
		</div>
	);
}

export default App;
