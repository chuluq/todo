import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const dimension = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const { email, password } = input;

  const handleLogin = () => {
    if (email && password) {
      setError(false);
      dispatch(login());
    } else {
      setError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>TODO</Text>
      <View>
        <View style={styles.field}>
          <Text>Email</Text>
          <TextInput
            placeholder='jdoe@gmail.com'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCapitalize='none'
            style={styles.input}
            value={email}
            onChangeText={(text) => {
              setInput((prevState) => ({
                ...prevState,
                email: text,
              }));
            }}
          />
        </View>
        <View style={styles.field}>
          <Text>Password</Text>
          <TextInput
            placeholder='********'
            textContentType='password'
            secureTextEntry={true}
            autoCapitalize='none'
            style={styles.input}
            value={password}
            onChangeText={(text) => {
              setInput((prevState) => ({
                ...prevState,
                password: text,
              }));
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {error && (
        <Text style={styles.error}>Email and Password must be valid</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 1.5,
    marginBottom: 32,
  },
  field: {
    marginVertical: 10,
  },
  input: {
    width: dimension.width * 0.8,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 12,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 16,
    backgroundColor: 'coral',
    width: dimension.width * 0.8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'maroon',
  },
});

export default Login;
