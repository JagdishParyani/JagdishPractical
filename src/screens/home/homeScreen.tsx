import React from 'react';
import {View, TextInput, Pressable, Text} from 'react-native';
import {homeStyles} from './home.style';
import useHome from './useHome';

const HomeScreen = () => {
  const {name, onNameChange, onStartGamePress} = useHome();
  return (
    <View style={homeStyles.container}>
      <TextInput
        style={homeStyles.input}
        onChangeText={onNameChange}
        value={name}
        placeholder="Please enter your name"
      />

      <Pressable onPress={onStartGamePress}>
        <Text>Start Game</Text>
      </Pressable>
    </View>
  );
};

const Home = React.memo(HomeScreen);

export default Home;
