import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../features/questions/questionsSlice";
import usersReducer from "../features/users/usersSlice";
import authedUserReducer from "../features/users/authedUserSlice";

export default configureStore({
  reducer: {
    questions: questionsReducer,
    users: usersReducer,
    authedUser: authedUserReducer,
  },
});
