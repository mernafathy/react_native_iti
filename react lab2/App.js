import { StatusBar, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Profile from "./src/Pages/Profile";
import Movies from "./src/Pages/Movies";
import Movie_Details from "./src/Pages/Movie_Details";
import Formik_Form from "./src/Pages/Formik_Form";
import Home from "./src/Pages/Home";
import Todo from "./src/Pages/Todo/Todo";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Formik_Form" component={Formik_Form} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Movies" component={Movies} />
          <Stack.Screen name="Movie_Details" component={Movie_Details} />
          <Stack.Screen name="Todo" component={Todo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
