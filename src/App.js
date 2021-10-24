import React, {useState, useEffect} from "react";

import {db} from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const [Name, setName] = useState("");
  const [Age, setAge] = useState();
  const usersCollectionRef = collection(db, "test-data");

  //adding a new student with his age
  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: Name, age: Number(Age)});
    setName("");
    setAge();
  };

  //updating user roll number
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "test-data", id);
    const newFields = {age: age + 1};
    await updateDoc(userDoc, newFields);
  };

  //deleting a user
  const deleteUser = async (id) => {
    const userDoc = doc(db, "test-data", id);
    await deleteDoc(userDoc);
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getUsers();
  }, []);
  return (
    <div>
      <div>
        <input
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={Name}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
          value={Age}
        />
        <button onClick={createUser}>Enter Student</button>
      </div>
      {users.map((users) => {
        return (
          <div>
            <h1>Name: {users.name}</h1>
            <h1>Age: {users.age}</h1>
            <button
              onClick={() => {
                updateUser(users.id, users.age);
              }}
            >
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(users.id);
              }}
            >
              Delete user
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
