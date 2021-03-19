import { createSlice } from "@reduxjs/toolkit";
import { add_answer_user } from "../users/usersSlice";

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {},
  reducers: {
    receive_questions: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        ...state,
        ...action.payload,
      };
    },
    save_answer: (state, authedUser, questionId, answer) => {
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
        },
      };
    },
  },
});

export const { receive_questions, save_answer } = questionsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const handleSaveAnswer = (obj) => (dispatch) => {
//   return save_answer(obj)
//     .then(() => {
//       dispatch(save_answer(obj));
//       dispatch(add_answer_user(obj));
//     })

//     .catch((e) => {
//       console.warn("Error in handleSaveAnswer: ", e);
//       alert("There was an error saving your the answer. Try again.");
//     });
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectQuestions = (state) => state.questions;

export default questionsSlice.reducer;
