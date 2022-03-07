import React from 'react'
import {StyleSheet, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useSelector} from 'react-redux'

import MealList from '../components/MealList'
import CustomHeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              props.navigation.toggleDrawer()
            }}
          />
        </HeaderButtons>
      ),
    })
  }, [props.navigation])

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    )
  }

  return <MealList listData={favMeals} navigation={props.navigation} />
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default FavoritesScreen
