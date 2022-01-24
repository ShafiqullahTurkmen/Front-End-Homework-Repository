import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { loggedIn } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return <Component {...props} />;
        }

        return <Redirect to={{pathname: "/"}}/>;
      }}
    />
  );
}
