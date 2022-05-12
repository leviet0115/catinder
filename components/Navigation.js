import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Swipe from "../views/Swipe";
import LogIn from "../views/LogIn";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Swipe" component={Swipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
