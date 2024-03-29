import { StyleSheet, Text,Pressable } from 'react-native'
import { colors } from '../Global/colors'


const SubmitButton = ({title,onPress}) => {
   
  return (
        <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
  )
}


export default SubmitButton


const styles = StyleSheet.create({
    button:{
        width:"40%",
        backgroundColor:"#C1A56F",
        padding:15,
        alignItems:"center",
        borderRadius:10
    },
    text:{
        textAlign:"center",
        color:"white",
        fontSize:18
    }
})
