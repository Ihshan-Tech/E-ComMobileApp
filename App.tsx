import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import AddToCard from './Screens/AddToCard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './Screens/Footer';
import Checkout from './Screens/CheckoutCard';
import Login from './components/log&reg/Login';
import Registration from './components/log&reg/Registration';
import Logout from './Screens/Logout';
import ProductAddForm from './components/ProductAddForm/ProductAddForm';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        drawerContent={(props) => <Sidebar {...props} />}
        screenOptions={{
          header: (props) => <Header {...props} />,
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="MyOrder" component={ProductAddForm} />
        <Drawer.Screen name="Logout" component={Logout} />
        <Drawer.Screen name="AddToCard" component={AddToCard} />
        <Drawer.Screen name="Checkout" component={Checkout} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Registration" component={Registration} />
      </Drawer.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default App;

