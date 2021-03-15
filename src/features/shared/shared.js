import { getInitialData } from "../../utils/api";
import { receive_questions } from "../questions/questionsSlice";
import { receive_users } from "../users/usersSlice";
import { setAuthedUser } from "../users/authedUserSlice";

const AUTHED_ID = "tylermcginnis";

//dispatch actioncreators
export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receive_questions(questions));
      dispatch(receive_users(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};
