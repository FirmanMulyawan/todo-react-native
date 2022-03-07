import React from 'react'
import {Platform, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

import colors from '../constants/colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FilterScreen'

const defaultStackNavOptions = {
  title: 'A Screen',
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
}

const {Navigator, Screen} = createStackNavigator()

const MealsNavigator = () => {
  return (
    <Navigator
      initialRouteName="Categories"
      mode="modal"
      screenOptions={defaultStackNavOptions}
      // screenOptions={{
      //   // title: 'A Screen',
      //   headerStyle: {
      //     backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
      //   },
      //   headerTintColor:
      //     Platform.OS === 'android' ? 'white' : colors.primaryColor,
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
      // }}
    >
      <Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Meals Categories',
          // headerTitleAlign: 'center',
          // headerStyle: {
          //   backgroundColor:
          //     Platform.OS === 'android' ? colors.primaryColor : '',
          // },
          // headerTintColor:
          //   Platform.OS === 'android' ? 'white' : colors.primaryColor,
        }}
      />
      <Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        // options={({route}) => ({title: route.params.categoryId})}
        // options={{
        //   // headerTitle: props => <LogoTitle {...props} />,
        //   headerRight: () => (
        //     <Button
        //       onPress={() => Alert.alert('This is a button!')}
        //       title="Info"
        //       color="red"
        //     />
        //   ),
        // }}
      />
      <Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({route}) => ({
          title: route.params.mealTitle,
          // headerRight: () => <Text>FAV!</Text>,
        })}
      />
    </Navigator>
  )
}

const FavNavigator = () => {
  return (
    <Navigator
      initialRouteName="Favorites"
      screenOptions={defaultStackNavOptions}>
      <Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Your Favorites',
        }}
      />
      <Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({route}) => ({
          title: route.params.mealTitle,
        })}
      />
    </Navigator>
  )
}

const FiltersNavigator = () => {
  return (
    <Navigator
      initialRouteName="Filters"
      screenOptions={defaultStackNavOptions}>
      <Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          title: 'Filter Meals',
        }}
      />
    </Navigator>
  )
}

const TabNav = createMaterialBottomTabNavigator()

const MealsFavTabNavigator = () => {
  return (
    <TabNav.Navigator
      initialRouteName="Meals"
      shifting={true}
      activeColor="white"
      barStyle={{
        backgroundColor: colors.primaryColor,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName

          if (route.name === 'Meals') {
            iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline'
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'ios-star' : 'ios-star-outline'
          }

          return <Ionicons name={iconName} size={25} color={color} />
        },
        tabBarLabel: (
          <Text style={{fontFamily: 'OpenSans-Bold'}}>{route.name}</Text>
        ),
      })}>
      <TabNav.Screen name="Meals" component={MealsNavigator} />
      <TabNav.Screen
        name="Favorites"
        component={FavNavigator}
        options={{
          tabBarColor: colors.accentColor,
        }}
      />
    </TabNav.Navigator>
  )
}

const Drawer = createDrawerNavigator()

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MealsFavs"
      drawerContentOptions={{
        activeTintColor: colors.accentColor,
        labelStyle: {
          fontFamily: 'OpenSans-Bold',
        },
      }}>
      <Drawer.Screen
        name="MealsFavs"
        component={MealsFavTabNavigator}
        options={{
          drawerLabel: 'Meals',
        }}
      />
      <Drawer.Screen
        name="Filters"
        component={FiltersNavigator}
        options={{
          drawerLabel: 'Filters',
        }}
      />
    </Drawer.Navigator>
  )
}

export default MainNavigator
