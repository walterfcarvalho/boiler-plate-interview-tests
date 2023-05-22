
import React, { useState } from "react"
import UserList from './UserList';
import { Resume } from 'components/Resume';

export const UsersContext = React.createContext();

function UseContext() {
  const [userState, setUserState] = useState({
    Bob: true, Gary: true, Jessica: true, Sam: true,Eric: true});

  return (
    <UsersContext.Provider value={{ userState, setUserState }}>

      <Resume infoName={"userContext"}/>
      <UserList />
    </UsersContext.Provider>
  );
}



export default UseContext