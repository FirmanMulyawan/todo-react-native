import React from 'react'
import {Button, StyleSheet, View, Image, Text} from 'react-native'

import Bodytext from '../components/BodyText'
import TitleText from '../components/TitleText'
import colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.jpeg')}
          // source={{
          //   uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg',
          // }}
          // fadeDuration={1000}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Bodytext style={styles.resultText}>
          Your phone needed
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </Bodytext>
      </View>

      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'OpenSans-Bold',
  },
  resultContainer: {
    // width: '80%',
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
})
