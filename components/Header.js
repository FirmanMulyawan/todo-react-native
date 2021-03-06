import React from 'react'
import {StyleSheet, View, Platform} from 'react-native'

import TitleText from './TitleText'
import Colors from '../constants/colors'

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerbase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerbase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  title: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
  },
})
