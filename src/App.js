import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from './redux/users/actions'

function App() {
  const dispatch = useDispatch()
  const { list: users, loading } = useSelector(state => state.users)

  function handleRequest() {
    dispatch(getUsers())
  }

  return (
    <div className="App">
      <button onClick={handleRequest}>request</button>
      {loading && <p> Carregando... </p>}
      <ul>
        {
          users?.map(user => (
            <li key={user.id} > {user.name} </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
