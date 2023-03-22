import React from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeList as List } from 'react-window';

// import './index.css';

const Row = ({ index, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    Row {index}
  </div>
);

function onItemsRendered({
  overscanStartIndex,
  overscanStopIndex,
  visibleStartIndex,
  visibleStopIndex
}) {
  console.log(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) // overscanCount为2 第一次默认0 6 0 4
  // All index params are numbers.
}

const Example = () => (
  <List
    className="List"
    height={150}
    itemCount={1000}
    itemSize={35}
    width={300}
    onItemsRendered={onItemsRendered}
    overscanCount={3} // overscanCount默认为2
  >
    {Row}
  </List>
);

export default Example