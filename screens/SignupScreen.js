import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add signup logic here
    console.log('Signed up with', name, email, password);
  };

  return (
    <View style={styles.container}>
         <ImageBackground source={require('../image/chicken.jpg')}  style={{height:200,width:300,marginHorizontal:16,marginBottom:25}}/>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
       <TextInput
        style={styles.input}
        placeholder="Phone Number"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={() => navigation.navigate('Profile')} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Log In
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: 
  { flex: 1, 
    justifyContent: 'center', 
    padding: 16,
    marginTop:-100
 },
  title: 
  { fontSize: 24,
     marginBottom: 20
     },
  input:
   { height: 40,
     borderColor: 'gray',
      borderWidth: 1, 
      marginBottom: 12, 
      paddingHorizontal: 8 
    },

  link: 
  { marginTop: 15,
     color: 'blue',
      textAlign: 'center'
     },
});

export default SignupScreen;