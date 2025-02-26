import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const Sidebar = (props: { navigation: any }) => {
  const navigation = props.navigation;

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>E-Com Family Mart</Text>

        <SidebarItem navigation={navigation} icon="home" label="Home" screen="Home" />
        <SidebarItem navigation={navigation} icon="shopping-cart" label="Cart" screen="Cart" />
        <SidebarItem navigation={navigation} icon="list" label="My Order" screen="MyOrder" />
        <SidebarItem navigation={navigation} icon="person" label="My Profile" screen="MyProfile" />
        <SidebarItem navigation={navigation} icon="info" label="About Us" screen="AboutUs" />
        <SidebarItem navigation={navigation} icon="contact-phone" label="Contact Us" screen="ContactUs" />
        <SidebarItem navigation={navigation} icon="star-rate" label="Rate Us" screen="RateUs" />
        <SidebarItem navigation={navigation} icon="share" label="Share App" screen="ShareApp" />
        <SidebarItem navigation={navigation} icon="logout" label="Logout" screen="Logout" />
      </View>
    </DrawerContentScrollView>
  );
};

// Reusable Sidebar Item Component
const SidebarItem = ({ navigation, icon, label, screen }: { navigation: any; icon: string; label: string; screen: string }) => (
  <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(screen)}>
    <MaterialIcons name={icon} size={24} color="black" />
    <Text style={styles.itemText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 12,
    fontWeight: '500',
  },
});

export default Sidebar;
