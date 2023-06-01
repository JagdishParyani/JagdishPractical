import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {crossStyles as styles} from './cross.style';

export const Cross = (props: any) => {
  const {xTranslate, yTranslate, color} = props;
  return (
    <View
      style={[
        styles.container,
        {
          transform: [
            {translateX: (xTranslate ? xTranslate : 10) + 35},
            {translateY: (yTranslate ? yTranslate : 10) - 12},
          ],
        },
      ]}>
      <View
        style={[
          styles.line,
          {
            transform: [{rotate: '45deg'}],
            backgroundColor: color ? color : '#000',
          },
        ]}
      />
      <View
        style={[
          styles.line,
          {
            transform: [{rotate: '135deg'}],
            backgroundColor: color ? color : '#000',
          },
        ]}
      />
    </View>
  );
};
