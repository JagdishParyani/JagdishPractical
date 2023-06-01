import React, {Component} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {CENTER_POINTS} from '../../../../constants/constants';
import {Circle} from '../circle/circle';
import {Cross} from '../cross/cross';
import {gameBoardStyles as styles} from './gameBoard.style';
import useGameBoard from './useGameBoard';

export const GameBoard = () => {
  const {
    AIAction,
    boardClickHandler,
    judgeWinner,
    AIInputs,
    result,
    round,
    userInputs,
  } = useGameBoard();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={e => boardClickHandler(e)}>
        <View style={styles.board}>
          <View style={styles.line} />
          <View
            style={[
              styles.line,
              {
                width: 3,
                height: 306,
                transform: [{translateX: 200}],
              },
            ]}
          />
          <View
            style={[
              styles.line,
              {
                width: 306,
                height: 3,
                transform: [{translateY: 100}],
              },
            ]}
          />
          <View
            style={[
              styles.line,
              {
                width: 306,
                height: 3,
                transform: [{translateY: 200}],
              },
            ]}
          />
          {userInputs.map((d, i) => (
            <Circle
              key={i}
              xTranslate={CENTER_POINTS[d].x}
              yTranslate={CENTER_POINTS[d].y}
              color="deepskyblue"
            />
          ))}
          {AIInputs.map((d, i) => (
            <Cross
              key={i}
              xTranslate={CENTER_POINTS[d].x}
              yTranslate={CENTER_POINTS[d].y}
            />
          ))}
        </View>
      </TouchableWithoutFeedback>
      {/* <PromptArea result={result} onRestart={() => this.restart()} /> */}
    </View>
  );
};
