import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {Screens} from '../../navigation/screen';

const useHome = () => {
  const [name, setName] = useState();
  const navigation = useNavigation();
  const onNameChange = useCallback(() => {}, []);

  const onStartGamePress = useCallback(() => {
    navigation.navigate(Screens.TIC_TAC_TOE);
  }, [navigation]);

  return {
    name,
    onNameChange,
    onStartGamePress,
  };
};

export default useHome;
