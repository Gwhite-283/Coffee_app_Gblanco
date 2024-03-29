import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { usePostOrdersMutation } from '../app/services/shopServices'
import { useDispatch } from 'react-redux'



const Cart = () => {
  const localId = useSelector(state => state.auth.value.localId)
  const cart = useSelector(state => state.cart.value)
  const [triggerPostOrder,{data,isSuccess,isError,error}] = usePostOrdersMutation()
  
  return (
    <View style={styles.container}>
        <FlatList
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable onPress={()=> triggerPostOrder({localId,order:cart})}>
                <Text style={styles.text}>Confirmar</Text>
            </Pressable>
            <Text style={styles.text}>Total: $ {cart.total} </Text>
        </View>
    </View>
   
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:160
    },
    confirmContainer:{
        backgroundColor:"#9B7F67",
        padding:25,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    text:{
        color:"white",
        fontFamily:"PlayFair",
        fontSize: 25
    }
}
)