import { withScale, useScale, Text, Button } from '@geist-ui/core'
import './index.scss'
// 基础尺寸是16px，
const MyComponentUseScale = () => {
  const { SCALES, getScaleProps } = useScale()
  // console.log('SCALES: ', SCALES);
  console.log(getScaleProps('width'))
  // return <div >
  // 基础尺寸是16px，如果加上style={{ width: SCALES.width(1.25) }}
  // 该组件的基础尺寸为 16 * 1.25 = 20px
  // return <div className='wrap' style={{ width: SCALES.width(1.25), background: 'skyblue' }}>
  return <div className='wrap' style={{ width: SCALES.width(1), background: 'skyblue' }}>
    {/* // return <div className='wrap' style={{ width: SCALES.width(1), background: 'skyblue', fontSize: SCALES.font(1) }}> */}
    {/* // return <div className='wrap' style={{ width: SCALES.width(2), background: 'skyblue' }}> */}
    {/* // return <div className='wrap' style={{ width: SCALES.width(1, 'auto'), background: 'skyblue' }}> */}
    测
    {/* width: calc(20px); */}
    {/* Scale Component */}
    {/* <div style={{ width: SCALES.width(1.25) }}> Scale Component</div> */}
    {/* <Text h1>Home Page</Text>
    <Button>Submit</Button>
    <br></br>
    <Button style={{ width: SCALES.width(2) }} > 2倍</Button>
    <div style={{ width: SCALES.width(1, 'auto') }}>Fixed Component</div> */}
  </div >
}

export default withScale(MyComponentUseScale)


// 中文文档:
// https://geist-ui.dev/zh-cn/hooks/use-scale

// 使用 Scale 开发
// https://geist-ui.dev/zh-cn/guide/scale


// https://www.npmjs.com/package/@geist-ui/core Last publish：a year ago
// Weekly Downloads： 4,170
// https://github.com/geist-org/geist-ui

// https://star-history.com/#geist-org/geist-ui&Date

// 略：
// https://github.com/geist-org/geist-ui/issues/499

