import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/users/usersSlice';
import User from './User';

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    if (users.length === 0) dispatch(getUsers());
  }, [dispatch, users.length]);

  return (
    <div className="users-con">
      {users
        && users.map((user) => (
          <User
            key={user.id}
            avatar={user.avatar}
            user_name={user.first_name}
          />
        ))}
    </div>
  );
}

export default Home;
