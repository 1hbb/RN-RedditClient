import {Text} from 'react-native';
import React from 'react';

const UnixTimeConverter = (UNIX_timestamp) => {
  var a = new Date(UNIX_timestamp * 1000);
  var b = new Date().getTime();
  var value = Math.floor(Math.abs(b - a) / 3600000);
  if (Math.floor(value < 24)) {
    return <Text>{value}h</Text>;
  } else if (value / 24 >= 1 && value / 24 <= 30) {
    const day = Math.floor(value / 24);
    return <Text>{day}d</Text>;
  } else if (value / 24 > 30 && value / 24 <= 365) {
    const month = Math.floor(value / (24 * 30));
    return <Text>{month}mo</Text>;
  } else {
    const year = Math.floor(value / (24 * 30 * 12));
    return <Text>{year}y</Text>;
  }
};

export default UnixTimeConverter;
