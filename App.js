import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {enableScreens} from 'react-native-screens'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/meals'
import {LogBox} from 'react-native'

enableScreens()

const rootReducer = combineReducers({
  meals: mealsReducer,
})

const store = createStore(rootReducer)
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
])
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MealsNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
