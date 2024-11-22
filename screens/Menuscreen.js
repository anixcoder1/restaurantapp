import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button,ImageBackground } from 'react-native';

const menuItems = [
  { id: '1', name: 'Chinese Food', details: "Press on view to get all details",page: 'Cart'},
  { id: '2', name: 'Japanese Food',  details: 'Press on view to get all details',page: 'Cart1'},
  { id: '3', name: 'Indian Food', details: 'Press on view to get all details',page: 'Cart2'},
  { id: '4', name: 'Italian Food',  details: 'Press on view to get all details',page: 'Cart3' },
  { id: '5', name: 'Mauritian Food',  details: 'Press on view to get all details',page: 'Cart4' },
];

const MenuScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetail}>{item.details}</Text>
      <Button title='View'onPress={() => navigation.navigate(item.page)}/>
     
    </View>
    
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories of Food</Text>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}/>


<View><Button title="Profile" onPress={() => navigation.navigate('Profile')} /></View>

      <View style={styles.container1}>
      
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      </View>
      

  </View>
    
  ); 
};
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    margin:20,
    backgroundColor: 'powderblue',
    borderRadius:10
  },
  container1: {
    padding: 5,
    margin:10,
    backgroundColor: 'white',
    borderRadius:5
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  itemName: {
    fontSize: 19,
     fontWeight: 'bold',
     padding: 15,
     
  },
  itemDetail:{
    fontSize:15,
    margin:12,
    
  }
});

export default MenuScreen;