import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStacks from './HomeStacks';
import ToDoStacks from './ToDoStacks';

const Tab = createBottomTabNavigator();

const TabStacks = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStacks} />
        <Tab.Screen name="ToDo" component={ToDoStacks} />
      </Tab.Navigator>
    );
  };
  
export default TabStacks