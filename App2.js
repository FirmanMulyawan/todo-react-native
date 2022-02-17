import {StyleSheet, View} from 'react-native'
import React, {useState} from 'react'

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const App2 = () => {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const configureNewgameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = nunOfRounds => {
    setGuessRounds(nunOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    )
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewgameHandler}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  )
}

export default App2

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
