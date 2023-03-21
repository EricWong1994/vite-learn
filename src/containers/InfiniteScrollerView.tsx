import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import UserInfo from '../components/UserInfo'
import { fetchUsers } from '../services/UserService'

const InfiniteScrollerView = () => {
  const [users, setUsers] = useState([])
  const loadMore = () => {
    const newUsers = fetchUsers()
    setUsers([...users, ...newUsers])
  }
  return (
    <InfiniteScroll loadMore={loadMore} initialLoad hasMore threshold={1000}>
      {users.map(item => (
        <UserInfo user={item} key={item.email} />
      ))}
    </InfiniteScroll>
  )
}

export default InfiniteScrollerView