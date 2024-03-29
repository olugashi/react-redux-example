import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./actions";

const App = () => {
  const counter = useSelector(state => state.counterReducer);
  const currentUser = useSelector(state => state.userReducer);

  const dispatch = useDispatch();

  const user = { name: "oren" };

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
  }, []);

  return (
    <div className="App">
      {currentUser.loggedIn ? (
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button
            onClick={() => dispatch(allActions.userActions.setUser(user))}
          >
            Login as oren
          </button>
        </>
      )}
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>
        Increase Counter
      </button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>
        Decrease Counter
      </button>
    </div>
  );
};

export default App;
