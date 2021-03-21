import { getInitialData } from "../../utils/api";
import { receive_questions } from "../questions/questionsSlice";
import { receive_users } from "../users/usersSlice";

export const handleInitialData = () => {
  return async (dispatch) => {
    return await getInitialData().then(({ users, questions }) => {
      dispatch(receive_questions(questions));
      dispatch(receive_users(users));
    });
  };
};
