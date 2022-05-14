import { useEffect, useState } from "react";
import "../../App.css"
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

import Structure from "../F_DB/LSstructure";


function App() {
  const [users, setUsers] = useState([]);

  //1st para is name of the imported and 2nd is name of collection in the firebase.
  const usersCollectionRef = collection(db, 'users');

  const createUser = async (data) => {
    await addDoc(usersCollectionRef, data)
  } 

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);

    }

    getUsers();

  }, [])

  return (
    <div className="App">
      <h1>CRUD with FIREBASE</h1>
      {" "}
      <Structure gettingUserD={createUser}/>
      {
        users.map((users, key) => {
          return (
            <div key={`${key}_user1`}>
              {" "}
              <h2>Name: {users.name}</h2>
              <h2>Age: {users.age}</h2>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
