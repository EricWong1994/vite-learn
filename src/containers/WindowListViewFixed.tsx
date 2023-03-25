import { useState } from 'react'

import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';

import { fetchUsers } from '../services/UserServiceFixed'
import UserInfoFixed from '../components/UserInfoFixed'
import './WindowListViewFixed.css';

const isItemLoaded = index => false;

const Row = ({ data, index, style }) => {
  const user = data[index]

  return <div style={style}>
    <UserInfoFixed user={user} />
  </div>
}

const WindowListView = () => {
  const [users, setUsers] = useState([])
  const loadMoreItems = (startIndex, stopIndex) => {
    const newUsers = fetchUsers()
    setUsers([...users, ...newUsers])
  }

  useEffect(() => {
    setUsers(fetchUsers())
  }, [])

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
                itemSize={180}
                // itemSize={250}
                ref={ref}
                onItemsRendered={onItemsRendered}
              >
                {/* <Row data={ } /> */}
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