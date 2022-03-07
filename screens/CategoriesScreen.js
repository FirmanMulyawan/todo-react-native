import React from 'react'
import {FlatList} from 'react-native'

import {CATEGORIES} from '../data/dummy-data'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/HeaderButton'
import CategoryGridTitle from '../components/CategoryGridTitle'

const CategoriesScreen = props => {
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

  const renderGridItem = itemdata => {
    return (
      <CategoryGridTitle
        title={itemdata.item.title}
        color={itemdata.item.color}
        onSelect={() => {
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemdata.item.id,
          })
        }}
      />
    )
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
