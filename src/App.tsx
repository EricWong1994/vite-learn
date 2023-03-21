import { useState } from 'react';
import { Foo } from 'dumi-ui';
// import { Button } from 'antd';
import { Button } from '@geist-ui/core';
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
import MyComponentUseScale from "./demos/GeistDemo/UseScaleComp";
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import GeistDemoIndex from './demos/GeistDemo';
import InfiniteScrollerView from './containers/InfiniteScrollerView';
import WindowListView from './containers/WindowListView';

function App() {
  return (
    <div className='App'>
      <div className='hidden'>
        <GeistProvider>
          {/* // --> 基础样式 */}
          <CssBaseline />
          {/* <GeistDemoIndex /> */}
          原始1：
          <MyComponentUseScale />
          <MyComponentUseScale width={'16px'} />
          <MyComponentUseScale width={'0.5'} />
          <MyComponentUseScale width={'10px'} />
          <MyComponentUseScale width={'auto'} />
          {/* 当子组件有fontSize: SCALES.font(1)时 unit如下配置字体会放大十倍 */}
          <MyComponentUseScale unit="10rem" />
          {/* 字号2倍 即32px */}
          <MyComponentUseScale font='2' />
          原始2：
          <MyComponentUseScale />
          <MyComponentUseScale scale={2} />

        </GeistProvider>
      </div>
      <div className='hidden'>
        <KeepAliveDemo />
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

function NewApp() {
  return <div className='App'>
    {/* <InfiniteScrollerView /> */}
    <WindowListView />
  </div>
}
export default NewApp;
