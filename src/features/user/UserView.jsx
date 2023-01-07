import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserView = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.user)
    console.log(data);

   const getUsers =React.useCallback(() => {
     dispatch(fetchUsers())
   },[fetchUsers])

   React.useEffect(() => { 
    getUsers()
   },[getUsers])
  return (
    <div>
      <h3>List of users</h3>
      { 
        data.loading && <p>loading...</p>
      }
      { 
        !data.loading && data.error ? ( 
          <p>{data.error}</p>
        ) :(
          data.user?.map(user => (
            <ul>
               <li key= {user.id} >
                {user.name}
               </li>
            </ul>
          ))
        )
      }
    </div>
  );
}

export default UserView;
