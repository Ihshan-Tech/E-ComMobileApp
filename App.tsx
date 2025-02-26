import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import AddToCard from './Screens/AddToCard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './Screens/Footer';
import Checkout from './Screens/CheckoutCard';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <Sidebar {...props} />}
        screenOptions={{
          header: (props) => <Header {...props} />, // Add custom header
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="AddToCard" component={AddToCard} />
        <Drawer.Screen name="Checkout" component={Checkout} />
      </Drawer.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default App;

