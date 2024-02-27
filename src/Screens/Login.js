import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import InputForm from '../Components/InputForm';
import SubmitButton from '../Components/SubmitButton';
import { colors } from '../Global/colors';
import { useLoginMutation } from '../app/services/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { insertSession } from '../database';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerLogin, { data, isError, isSuccess, error, isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
      insertSession(data)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
    if (isError) console.log(error);
  }, [data, isError, isSuccess]);

  const onSubmit = () => {
    triggerLogin({ email, password });
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login to start</Text>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error=""
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error=""
        />
        <SubmitButton onPress={onSubmit} title="Send" />
        <Text style={styles.sub}>No tienes cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")} >
          <Text style={styles.subLink}>Crear cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "silver",
  },
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontFamily: "Lobster",
    marginBottom: 20,
    color: "black",
  },
  sub: {
    fontSize: 16,
    fontFamily: "Josefin",
    marginTop: 15,
    color: "gray",
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Josefin",
    marginTop:10,
    color: "black",
    textDecorationLine: "underline",
  },
});
