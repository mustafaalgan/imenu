import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, } from "@react-navigation/drawer";
import { COLORS, SIZES, constants, icons, dummyData, } from "../constants";
import Home from "../screens/Home";
import Wallet from "../screens/Wallet";
import Favorite from "../screens/Favourite";
import Notification from "../screens/Notification";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Profile from "../screens/Profile";
import Restaurant from "../screens/Restaurant";


const CustomDrawerItem = ({ label, icon, onPress }) => {
  return (

    <View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 40,
          marginBottom: 0,
          alignItems: "center",
          paddingLeft: 10,
          borderRadius: 5,
          backgroundColor: null,
        }}
        onPress={onPress}
      >
        <Image
          source={icon}
          style={{ width: 20, height: 20, tintColor: "black" }}
        />
        <Text style={{ marginLeft: 15, color: "black", }}>
          {label}
        </Text>
      </TouchableOpacity>

      <View style={{
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#cbccd0"
      }} />
    </View>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView

      backgroundColor="purple"
      scrollEnabled={true}
      contentCotainerStyle={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, paddingHorizontal: 15, }}>


        <View style={{ flex: 1, marginTop: 10, }}>

          <CustomDrawerItem
            label="Restorantlar"
            icon={icons.home}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Home");
            }} />

<CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Wallet");
            }} />
             

          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Notification");
            }} />

          <CustomDrawerItem
            label={constants.screens.favorite}
            icon={icons.favorite}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Favorite");
            }} />

          <CustomDrawerItem
            label={"Profile"}
            icon={icons.profile}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Profile");
            }} />

          <CustomDrawerItem
            label={"Login"}
            icon={icons.logout}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Login");
            }} />

          <CustomDrawerItem
            label={"Register"}
            icon={icons.logout}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Register");
            }}
          />

          {/* <CustomDrawerItem /> */}
          <CustomDrawerItem
            label={"Çıkış"}
            icon={icons.cross}
            onPress={() => {
              navigation.navigate("Login");
            }}
          />

        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator

        drawerType="slide"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
        }}
        initialRouteName="Login"
        drawerContent={props => {
          return (
            <CustomDrawerContent navigation={props.navigation} />
          );
        }}
      >

        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Wallet" component={Wallet} />
        <Drawer.Screen name="Favorite" component={Favorite} />
        <Drawer.Screen name="Notification" component={Notification} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Restaurant" component={Restaurant} />

        <Drawer.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Drawer.Screen options={{ headerShown: false }} name="Login" component={Login} />
      </Drawer.Navigator>
    </View >
  );
};

export default CustomDrawer;
