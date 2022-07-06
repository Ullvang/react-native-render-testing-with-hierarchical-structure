import React, {useState} from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { addNumber } from '../store/actions/numbersAction'
import { useSelector, useDispatch } from 'react-redux'

export default function ChildA({ navigation }) {
  const numbers = useSelector(state => state.numbers)
  const dispatch = useDispatch()
  const [first, setfirst] = useState(1)


  console.log("ChildA rendered")

  return (
    <View style={styles.container}>
        <Text>ChildA</Text>
        {numbers.map((number, i) => <Text key={i}>Redux State {number}</Text>)}
        <Pressable style={styles.button} onPress={() => setfirst(prev => prev + 1)}>
            <Text>Update ChildA State</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => dispatch(addNumber(3))}>
            <Text>Update Redux State{"\n"}Also used in ChildB</Text>
        </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 3,
    padding: 5
  },
  button: {
    margin: 10,
    borderColor: "blue",
    borderWidth: 3,
    padding: 5
}
})