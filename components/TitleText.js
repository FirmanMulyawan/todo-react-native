import {StyleSheet, Text} from 'react-native'
import React from 'react'

const TitleText = props => {
  return <Text style={{...styles.title, ...props.style}}>{props.children}</Text>
}

export default TitleText

const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
})
