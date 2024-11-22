import React, {useRef, useEffect,useState} from 'react';
import { Animated,View, Text, TextInput, Button, StyleSheet,ImageBackground} from 'react-native';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

  const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    {/*
  const handleLogin = () => {
  
    console.log('Logged in with', email, password);
  };
    */}

  return (
    <View style={styles.container}>
      <FadeInView
        style={{
          width: 300,
          height: 100,
          backgroundColor: 'red',
          margin:17, 
          padding:5,
          marginTop:-120
        }}>
        <Text style={{fontSize: 20, textAlign: 'center', margin: 20,}}>
          WELCOME TO RESTAURANT APP
        </Text>
      </FadeInView>

        <ImageBackground source={require('../image/chicken.jpg')}  
        style={{height:150,width:300,marginHorizontal:20,marginBottom:55,}}/>

      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={() => navigation.navigate('Menu')} />
      <Text style={styles.link} onPress={() => navigation.navigate('Sign Up')}>
        Don't have an account? Sign Up
      </Text>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: 
  { flex: 1,
     justifyContent: 'center',
      padding: 18,
      margin:5,
      
       
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

export default LoginScreen;