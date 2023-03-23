// src/fixed-size-list
// 固定高度列表
// import { FixedSizeList } from 'react-window'
import FixedSizeList from './FixedSizeList'
import './FixedSizeListDemo.css'

// 渲染的每一行的 item 项
function Row({ index, style }) {
  return <div className={index % 2 ? 'odd' : 'even'} style={style}>
    Row {index}
  </div>
}

function FixedSizeListDemo() {
  // 可视区的宽高 200，每一项高度 50，列表总数 1000
  return <FixedSizeList className='list' height={200} width={200} itemSize={50} itemCount={1000}>
    {Row}
  </FixedSizeList>
}
export default FixedSizeListDemo