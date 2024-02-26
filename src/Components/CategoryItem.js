import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory} from "../features/shop/shopSlice"

const CategoryItem = ({category,navigation,route }) => {

  const dispatch = useDispatch()

  return (
    <Pressable onPress={()=>{ 
        dispatch(setProductsFilteredByCategory(category))
        navigation.navigate("Category",{category})
      }}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor:"#E1DAD1",
        top:50,
        margin:20,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 20
    },

    text:{
        fontSize: 25,
    }
})