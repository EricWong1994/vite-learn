import { useState } from 'react'

import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';

import { fetchUsers } from '../services/UserService'
import UserInfo from '../components/UserInfo'
import { useRowChanged } from '../hooks/useRowChanged';
import './WindowListView.css';

const WindowListView = () => {
  const [users, setUsers] = useState([])
  const listRef = useRef({})
  const rowHeights = useRef({})
  // console.log('--------RENDER---------')
  const isItemLoaded = index => {
    // console.log('isItemLoaded,index=', index, 'users', users.length)
    return index < users.length
    // return false
  }

  const getRowHeight = index => rowHeights.current[index] || 180;

  const setRowHeight = (index, size) => {
    listRef.current.resetAfterIndex(0)
    rowHeights.current = { ...rowHeights.current, [index]: size }
  }
  const Row = ({ data, index, style }) => {
    delete style.height
    const user = data[index]
    const { rowRef } = useRowChanged({ index, setRowHeight })
    return <div style={style} ref={rowRef}>
      <UserInfo user={user} />
    </div>
  }

  const loadMoreItems = (startIndex, stopIndex) => {
    const newUsers = fetchUsers()
    setUsers([...users, ...newUsers])
  }

  useEffect(() => {
    setUsers(fetchUsers())
  }, [])

  const handleScroll = ({ scrollTop }) => {

  }

  return (
    <div className="container">
      <AutoSizer>
        {({ width, height }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={200000}
            loadMoreItems={loadMoreItems}
            threshold={5}
          >
            {({ onItemsRendered, ref }) => (
              <List
                width={width}
                height={height}
                itemData={users}
                itemCount={users.length}
                itemSize={getRowHeight}
                // ref={ref}
                ref={listRef}
                onItemsRendered={onItemsRendered}
              // style={{ height: '100% !important' }}
              >
                {Row}
              </List>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  )
}
export default WindowListView