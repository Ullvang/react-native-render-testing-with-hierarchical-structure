import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Parent from "./Parent"
import { useSelector, useDispatch } from 'react-redux'

export default function GrandParent({ navigation }) {
const components = useSelector(state => state.components)
const dispatch = useDispatch()


  console.log("GrandParent rendered")
  const [first, setfirst] = useState(1)

  return (
    <View>
        <Text>GrandParent</Text>
        <Pressable style={styles.button} onPress={() => setfirst(prev => prev + 1)}>
            <Text>Update GrandParent State</Text>
        </Pressable>
        {components.map((component, i) => {
            // console.log("components render in GrandParent")
            return <Text key={i}>Redux State {component}</Text>
            })
        }
        <Parent setfirstGrandParent={setfirst} />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        margin: 10,
        borderColor: "blue",
        borderWidth: 3,
        padding: 5
    }
})