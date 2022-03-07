import React from 'react'
import {useSelector} from 'react-redux'
import {View, StyleSheet} from 'react-native'

import {CATEGORIES} from '../data/dummy-data'
import MealList from '../components/MealList'
import DefaultText from '../components/DefaultText'

const CategoryMealsScreen = props => {
  const catId = props.route.params?.categoryId ?? ''

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  )
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedCategory.title,
      // headerStyle: {
      //   backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
      // },
      // headerTintColor:
      //   Platform.OS === 'android' ? 'white' : colors.primaryColor,
    })
  }, [props.navigation, selectedCategory.title])

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    )
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default CategoryMealsScreen
