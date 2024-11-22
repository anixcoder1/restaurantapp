import React,{ useState } from 'react';
import {View, Text,Button,SafeAreaView,StyleSheet,FlatList,Modal,TouchableOpacity,TextInput} from 'react-native';

const DATA=[
{id:1, text:'Rita'},
{id:2, text:'Rita12@gmail.com'},
{id:3, text:'57722448'},
]

const Profile = ({navigation}) => {

  //The following code sends a request using fetch, gets response!!
  
  const[data, setdata] = useState(DATA)
  const [isRender,setisRender] = useState(false);
  const [isModalVisible,setisModalVisible] = useState(false);
  const[inputText, setinputText] = useState();
  const[editItem, seteditItem] = useState();

  const onPressItem = (item) => {

  setisModalVisible(true);
  setinputText(item.text)
  seteditItem(item.id)
}

  const renderItem = ({item,index}) =>{
   
  return(
<TouchableOpacity style={styles.item} onPress={()=>onPressItem(item)}>
<Text style={styles.text}>{item.text}</Text>
</TouchableOpacity>

)
  }
const handleEditItem =(editItem)=>{
const newData =data.map(item => {
   if(item.id == editItem){
item.text = inputText;
return item

   }
   return item;
})
setdata(newData);
setisRender(!isRender);
}

  const onPressSaveEdit=()=>{
      handleEditItem(editItem); //save
      setisModalVisible(false);
  }
  return (
  
      <SafeAreaView style={styles.container}>
        <Text style={styles.texts}>Touch to edit your details</Text>
      <FlatList
      data={data}
      keyExtractor={(item)=> item.id.toString()}
      renderItem={renderItem}
      extraData={isRender}
      />
      <Modal animationType='fade'
      visible={isModalVisible}
          onRequestClose={() => setisModalVisible(false)}>
            <View style ={styles.modal}>
        <Text style={styles.text}>Change your Info</Text>
        <TextInput style={styles.textinput} onChangeText={(text)=> setinputText(text)}
           defaultValue={inputText}
           editable={true}
           multiline={false}
           maxLength={100}
          />
   <TouchableOpacity  onPress={()=>onPressSaveEdit()} style={styles.touch}>
  <Text style={styles.text}>Save</Text>

   </TouchableOpacity>
        


            </View>
      </Modal>

  <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      </SafeAreaView>
      
    
  );
};
const styles =StyleSheet.create({
container:{
  flex:1
},


item:{
borderBottomColor:'grey',
borderBottomWidth:2,
alignItems:'flex-start',
padding: 20
},
text:{
  marginVertical:30,
  fontSize:25,
  fontWeight:'bold',
  marginLeft:10
},
texts:{
    marginVertical:30,
    fontSize:20,
    marginLeft:60

},
textinput:{
width:250,
height:70,
borderColor:'black',
borderWidth:2,
fontSize:25

},
modal:{
flex:1,
alignItems:'center',
justifyContent:'center'

},
touch:{
backgroundColor:'powderblue',
paddingHorizontal:90,
alignItems:'center',
marginTop:20

}

})
export default Profile;