import React, { useContext, useEffect } from "react"
import {UsersContext} from './index.jsx'

const UserList = () => {
  const { userState, setUserState } = useContext(UsersContext);

  const changeRandomUser = () => {
    const randomNum = Math.floor(Math.random() * Object.keys(userState).length);
    setUserState( newUsers => Object.keys(newUsers).map( (it, idx) => (
      idx === randomNum ? !it : it  
    )));
  };

  useEffect(() => {
    const interval = setInterval(changeRandomUser, 2000);
    return () => clearInterval(interval);
  }, [userState]);

  return (
    <div style={{ padding: 20 }}>
      {Object.keys(userState).map((user,idx) => (
        <p key={idx} >{`${user}: ${userState[idx] ? "🟢" : "🔴"}`}</p>
      ))}
    </div>
  );
};

export default UserList
