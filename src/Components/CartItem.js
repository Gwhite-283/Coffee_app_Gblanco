import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Popup from './Popup'
import Toast from "react-native-toast-message"





const CartItem = ({item, onDelete }) => {
	const [showDeletePopup, setShowDeletePopup] = useState(false);
	const dispatch = useDispatch()

    const showToast = () => {
      Toast.show({
        type: "success",
        text1: "Producto eliminado de tu orden",
        text2: "Para agregar más productos ingresa a Categorias 🛍️",
        visibilityTime: 5000,
      })
    }

    function handleDeletePress() {
      setShowDeletePopup(true)
    }

    const handleDeleteCancel = () => {
      setShowDeletePopup(false)
    }

    const handleDeleteConfirm = () => {
      onDelete(item)
      showToast()
      setShowDeletePopup(false)
    }

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{item.title} </Text>
          <Text style={styles.text2}>{item.brand} </Text>
          <Text style={styles.text1}>$ {item.price} Cant: {item.quantity} </Text>
        </View>
        <TouchableOpacity onPress={handleDeletePress}>
          <Entypo name='trash' size={30} color={"black"} />
        </TouchableOpacity>
        {showDeletePopup && (
          <Popup
            type={"delete"}
            isVisible={showDeletePopup}
            onCancel={handleDeleteCancel}
            onConfirm={handleDeleteConfirm}
            item={item} />
        )}
      </View>
    )
  }

  export default CartItem

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#E1DAD1",
            margin: 10,
            padding: 10,
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 2
        },
        textContainer: {
            width: "70",
            gap: 5
        },
        text1: {
            fontSize: 19,
            color: "black",
            fontFamily: "Josefin",
        },
        text2: {
            fontSize: 17,
            color: "black",
            fontFamily: "Josefin",
        }

}
)

