import * as React from "react";

const authContext = React.createContext();

const authProvider = ({ props }) => {
  const [user, setUser] = useState(null);

  return (
    <authContext.provider value={user}> {props.children} </authContext.provider>
  );
};
