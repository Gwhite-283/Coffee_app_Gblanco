import { StyleSheet, Text,Image,useWindowDimensions, Pressable } from 'react-native'
import { colors } from '../Global/colors'
import {  useDispatch } from 'react-redux'
import { setProductSelected } from '../features/shop/shopSlice'

const ProductItem = ({item ,navigation,route }) => {

  const {width} = useWindowDimensions()
  const dispatch = useDispatch()
  return (
    <Pressable style={styles.container}  onPress={()=>{
      dispatch( setProductSelected(item.id))
      navigation.navigate("Product",{id:item.id})
      }} >
      <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
      <Image
            style={styles.image}
            resizeMode='cover'
            source={{uri:item.thumbnail}}
        />
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
   container:{
        width:"80%",
        height:100,
        backgroundColor:"#E1DAD1",
        top:40,
        marginHorizontal:"10%",
        marginVertical:10,
        paddingHorizontal:50,
        paddingVertical:30,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        gap:30
    },
    text:{
      width:"60%",
      textAlign:"center",
      fontSize:20
    },
    textMin:{
      width:"60%",
      textAlign:"center",
      fontSize:15
    },
    image:{
        minWidth:90,
        height:90,
        width:"30%"
    }
})