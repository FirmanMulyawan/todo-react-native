import React, {useEffect, useCallback} from 'react'
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useSelector, useDispatch} from 'react-redux'

import CustomHeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import {toggleFavorite} from '../store/actions/meals'

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}
const MealDetailScreen = props => {
  const dispatch = useDispatch()

  const availableMeals = useSelector(state => state.meals.meals)
  const mealId = props.route.params?.mealId ?? ''
  const currentMealIsfavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId),
  )

  const selectedmeal = availableMeals.find(meal => meal.id === mealId)

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler,
    })
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({
      isFav: currentMealIsfavorite,
    })
  }, [currentMealIsfavorite])

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={
              props.route.params?.isFav ? 'ios-star' : 'ios-star-outline'
            }
            onPress={() => {
              props.route.params?.toggleFav ?? ''
            }}
          />
        </HeaderButtons>
      ),
    })
  }, [props.navigation])

  return (
    <ScrollView>
      <Image source={{uri: selectedmeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedmeal.duration}m</DefaultText>
        <DefaultText>{selectedmeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedmeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedmeal.ingredients.map(Ingredients => (
        <ListItem key={Ingredients}>{Ingredients}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedmeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
})
