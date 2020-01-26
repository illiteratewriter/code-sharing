import React from "react";
import {
  View,
  Text,
  Button
} from "react-native";

const CounterPresentational = props => {
  return (
    <View>
      <Button onPress={props.onIncrease} title={"Increase"} />
      <Text>
        {props.value}
      </Text>
      <Button onPress={props.onDecresase} title={"Decrease"} />
    </View>
  )
}

export default CounterPresentational;
