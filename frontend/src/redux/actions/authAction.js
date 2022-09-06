import axios from "axios";
/**
 * user registration action
 *
 * @param   {[type]}  dispatch  [dispatch description]
 *
 * @return  {[type]}            [return description]
 */
export const userRegister = (data) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "/api/messenger/user-register",
        data,
        config
      );
    } catch {}
  };
};
