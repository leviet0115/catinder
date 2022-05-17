import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Swipe from "../views/Swipe";
import LogIn from "../views/LogIn";
import Profile from "../views/Profile";
import Home from "../views/Home";
import { useUser } from "../contexts/authContext";
import Match from "../views/Match";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const [user] = useUser();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="swipe" component={Swipe} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="match" component={Match} />
        </>
      ) : (
        <Stack.Screen name="login" component={LogIn} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
