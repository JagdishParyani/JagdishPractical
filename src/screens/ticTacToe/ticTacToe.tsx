import React from 'react';
import {View, TextInput, Pressable, Text} from 'react-native';
import {GameBoard} from './components/gameBoard/gameBoard';
import {ticTacToeStyles} from './ticTacToe.style';
import useTicTacToe from './useTicTacToe';

const TicTacToeScreen = () => {
  const {} = useTicTacToe();
  return (
    <View style={ticTacToeStyles.container}>
      <GameBoard />
    </View>
  );
};

const TicTacToe = React.memo(TicTacToeScreen);

export default TicTacToe;
