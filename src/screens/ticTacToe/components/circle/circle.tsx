import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {circleStyles} from './cirtcle.style';

export const Circle = (props: any) => {
  const {xTranslate, yTranslate, color} = props;
  return (
    <View
      style={[
        circleStyles.container,
        {
          transform: [
            {translateX: xTranslate ? xTranslate : 10},
            {translateY: yTranslate ? yTranslate : 10},
          ],
          backgroundColor: color ? color : '#000',
        },
      ]}>
      <View style={circleStyles.innerCircle}></View>
    </View>
  );
};
