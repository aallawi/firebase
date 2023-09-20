import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { db } from "../../firebase/firebase";
import {
  query,
  collection,
  onSnapshot,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import Todo from "./Todo.jsx";
import { UserAuth } from "../../context/AuthContext";

const style = {
  bg: `min-h-[calc(100vh-120px)] w-screen p-4 bg-gray-400`,
  container: `bg-gray-200 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between mb-8`,
  input: `px-4 py-2 w-full text-lg outline-none rounded-full border-4 border-solid border-green-400`,
  button: `ml-2 bg-green-400 text-white rounded-full`,
  count: `text-center p-2`,
};

export const Home = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const { user } = UserAuth();

  /////////////// Read todos from firebase ////////////
  useEffect(() => {
    const Query = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(Query, (snap) => {
      let todosArray = [];
      snap.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
        console.log(doc.id, " ===> ", doc.data());
      });
      setTodos(todosArray);
    });
    return unsubscribe;
  }, [user]);

  ////////////////////// Create //////////////////////
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    try {
      await addDoc(collection(db, "todos"), {
        name: input,
        completed: false,
      });
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////// Update //////////////////////
  const toggleComplete = async (todo) => {
    try {
      await updateDoc(doc(db, "todos", todo.id), {
        completed: !todo.completed,
      });
    } catch (error) {
      console.log(error);
    }
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  ///////////////////// Delete ///////////////////////
  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.bg}>
      <h3 className="text-center text-2xl font-bold text-amber-200 mb-3">
        Home
      </h3>
      <div>
        <div className={style.container}>
          <h3 className={style.heading}>Todo List</h3>
          <form onSubmit={createTodo} className={style.form}>
            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={style.input}
              type="text"
              placeholder="Add Todo"
            />
            <button type="submit" className={style.button}>
              <IoMdAddCircle size={60} color="#fff" />
            </button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
          {todos.length < 1 ? null : (
            <p className={style.count}>{`You have ${todos.length} todos`}</p>
          )}
        </div>
      </div>
    </div>
  );
};
