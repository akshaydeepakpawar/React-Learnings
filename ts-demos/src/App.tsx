import React from "react";
// import Button from "./components/Button";
// import UserInfo from "./components/UserInfo";
// import AdminInfo from "./components/AdminInfo";
// import User from './components/User'
// import { Info,adminInfo } from "./types";
import Counter from "./components/Counter";

const App = () => {

  // const user:Info={
  //   id:1,
  //   name:"john Doe",
  //   email:"john@gmail.com"
  // }
  // const admin:adminInfo={
  //   id:2,
  //   name:"smith down",
  //   email:"smith@gmail.com",
  //   role:"admin",
  //   lastLogin:new Date()
  // }


  return (
    <div>
      {/* <User name="akshay" age={20} isStudent={true}/> */}
      {/* <Button
        label="Click"
        onClick={() => console.log("clicked")}
        disabled={false}
      /> */}
      {/* <UserInfo user={user}/>
      <AdminInfo admin={admin}/> */}

      <Counter/>
    </div>
  );
};

export default App;
