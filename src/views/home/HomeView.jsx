import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";

export const HomeView = () => {
  const [authenticateUser, setAuthenticateUser] = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>
      <input onChange={(event) => setAuthenticateUser(event.target.value)} />
    </div>
  );
};
