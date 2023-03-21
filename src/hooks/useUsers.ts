import { fetchUsers } from "../services/UserService"

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const loadMoreItems = (startIndex, stopIndex) => {
    const newUsers = fetchUsers()
    setUsers([...users, ...newUsers])
  }

  useEffect(() => {
    loadMoreItems()
  }, [])
  return {
    users,
    loadMoreItems
  }
}