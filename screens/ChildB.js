import React, {useState} from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

export default function ChildB({ setfirstGrandParent, navigation }) {
  const numbers = useSelector(state => state.numbers)
  const dispatch = useDispatch()

  const [first, setfirst] = useState(1)

  console.log("ChildB rendered")

  return (
    <View style={styles.container}>
        <Text>ChildB</Text>
        {/* {numbers.map((number, i) => {
            // console.log("components render in ChildB")
            return <Text key={i}>{number}</Text>
            })
        } */}
        <Pressable style={styles.button} onPress={() => setfirstGrandParent(prev => prev + 1)}>
            <Text>Update GrandParent {"\n"}State from ChildB</Text>
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