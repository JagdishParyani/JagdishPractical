import {useEffect, useState} from 'react';
import {
  AREAS,
  CONDITIONS,
  GAME_RESULT_AI,
  GAME_RESULT_NO,
  GAME_RESULT_TIE,
  GAME_RESULT_USER,
} from '../../../../constants/constants';

const useGameBoard = () => {
  const [AIInputs, setAIInputs] = useState<number[]>([]);
  const [userInputs, setUserInputs] = useState<number[]>([]);
  const [result, setResult] = useState<number>();
  const [round, setRound] = useState<number>();

  const boardClickHandler = (e: Object) => {
    const {locationX, locationY} = e.nativeEvent;
    if (result !== -1) {
      return;
    }
    const inputs = userInputs.concat(AIInputs);

    const area = AREAS.find(
      d =>
        locationX >= d.startX &&
        locationX <= d.endX &&
        locationY >= d.startY &&
        locationY <= d.endY,
    );

    if (area && inputs.every(d => d !== area.id)) {
      setUserInputs(userInputs.concat(area.id));

      setTimeout(() => {
        judgeWinner();
        AIAction();
      }, 5);
    }
  };

  const AIAction = () => {
    if (result !== -1) {
      return;
    }
    while (true) {
      const inputs = userInputs.concat(AIInputs);

      const randomNumber = Math.round(Math.random() * 8.3);
      if (inputs.every(d => d !== randomNumber)) {
        setAIInputs(AIInputs.concat(randomNumber));
        judgeWinner();
        break;
      }
    }
  };

  //   useEffect(() => restart(), []);

  const isWinner = (inputs: number[]) => {
    return CONDITIONS.some(d => d.every(item => inputs.indexOf(item) !== -1));
  };

  const judgeWinner = () => {
    const inputs = userInputs.concat(AIInputs);

    if (inputs.length >= 5) {
      let res = isWinner(userInputs);
      if (res && result !== GAME_RESULT_USER) {
        return setResult(GAME_RESULT_USER);
      }
      res = isWinner(AIInputs);
      if (res && result !== GAME_RESULT_AI) {
        return setResult(GAME_RESULT_AI);
      }
    }

    if (
      inputs.length === 9 &&
      result === GAME_RESULT_NO
      //   &&
      //   result !== GAME_RESULT_TIE
    ) {
      setResult(GAME_RESULT_TIE);
    }
  };

  return {
    AIInputs,
    userInputs,
    result,
    round,
    judgeWinner,
    boardClickHandler,
    AIAction,
  };
};

export default useGameBoard;
