import { useState } from 'react';
import { Foo } from 'dumi-ui';
import { Button } from 'antd';
// import Trycatch from './Trycatch';
// import Trycatch from './demos/errorCatch/trycatch';
import Trycatch from './demos/errorCatch/Trycatch';
import IconDemo from './demos/iconDemo/index';
import AutoImport from './demos/autoImport/index';
import SvgComponent from './demos/svgdemo/hello';
import 'antd/dist/antd.css';
import { Logo } from './assets/svgs';
import './App.css';
import TailwindComp from './demos/cssDemo/TailwindComp';
import KeepAliveDemo from './demos/KeepAliveDemo';

function App() {
	return (
		<div className='App'>
			<KeepAliveDemo />
			<div className='hidden'>
				<TailwindComp />
				<div className='main'>
					main
					<div className='cl-blue'>斯维尔无</div>
				</div>
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
		</div>
	);
}

export default App;
