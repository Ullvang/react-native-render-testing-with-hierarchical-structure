import React, {useState} from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { addComponent } from '../store/actions/componentAction'
import ChildA from "./ChildA"
import ChildB from "./ChildB"
import { useSelector, useDispatch } from 'react-redux'


export default function Parent({ setfirstGrandParent, navigation }) {
    const [first, setfirst] = useState(1)
    const dispatch = useDispatch()

  console.log("Parent rendered")

  return (
    <View style={styles.container}>
        <Text>Parent</Text>
        <Pressable style={styles.button} onPress={() => setfirst(prev => prev + 1)}>
            <Text>Update Parent State</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => dispatch(addComponent("wow"))}>
            <Text>Update Redux State{"\n"}Also used by GrandParent</Text>
        </Pressable>
        <View style={{flexDirection: "row"}}>
            <ChildA />
            <ChildB setfirstGrandParent={setfirstGrandParent} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        borderColor: "green",
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