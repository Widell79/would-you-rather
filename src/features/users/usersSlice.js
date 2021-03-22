import { createSlice } from "@reduxjs/toolkit";
import { saveUser } from "../../utils/api";

export const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    receive_users: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        ...state,
        ...action.payload,
      };
    },
    add_answer_user: (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    },
    add_user: (state, action) => {
      const { id, name, avatarURL, answers, questions } = action.payload;
      return {
        ...state,
        [id]: {
          id: id,
          name: name,
          avatarURL: avatarURL,
          answers: answers,
          questions: questions,
        },
      };
    },
  },
});

export const { receive_users, add_answer_user, add_user } = usersSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export function addUser(obj) {
  return async (dispatch) => {
    try {
      const formatUser = await saveUser(obj);

      dispatch(add_user(formatUser));
    } catch (err) {
      console.warn("Error in addUser: ", err);
      alert("There was an error saving your user account. Please try again.");
    }
  };
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
