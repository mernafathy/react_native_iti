import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity, Linking } from 'react-native';
import { Image } from '@rneui/themed';
import { Card } from '@rneui/themed';
import { Divider } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { LinearProgress } from '@rneui/themed';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ProgressBar, MD3Colors } from 'react-native-paper';


export default function App() {
  const handleIconPress = (url) => {
    Linking.openURL(url);
  };

  const handleButtonPress = () => {
   
    console.log('Button pressed');
  };
  
  return (
  
    <View style={styles.container}>
   
   <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvv8ZZ4nkTJMGJqLQ4P2dKv2ynEcrfLNnM0g&usqp=CAU'}}
       style={{width: 200, height: 200 }} />
      
       
       <Card.Divider />
       <Text style={{ color:'black', fontSize:Blob, fontSize:50 }}  >Merna Fathy</Text>
       <Card.Divider />
       <Text style={{ color:'gray', fontSize:Blob, fontSize:30 }}  >Front End Develober</Text>
       <Card.Divider width={10} color='black'
       />

<View style={styles.icons } >
  <View style={{ flexDirection:'row' }} >
          <TouchableOpacity
            style={[styles.icon, {  marginLeft: 0  }]}
            onPress={() => handleIconPress('https://web.whatsapp.com')}
          >
            <Icon name="whatsapp" size={40} color="#4AC959" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.icon, {  marginLeft: 5 }]}
            onPress={() => handleIconPress('https://www.facebook.com/mirna.fathyyacoub')}
          >
            <Icon name="facebook-square" size={40} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.icon, {  marginLeft: 5 }]}
            onPress={() => handleIconPress('https://www.twitter.com')}
          >
            
            <Icon name="twitter-square" size={40} color="#1da1f2" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.icon, {  marginLeft: 5 }]}
            onPress={() => handleIconPress('https://www.linkedin.com/in/merna-fathy-yacoub-35b6ba198')}
          >
            <Icon name="linkedin-square" size={40} color="#0e76a8" />
          </TouchableOpacity>
        </View>
        </View>
      
<Card.Divider width={20} color='black'
       />
       <LinearProgress  value={0}  variant="indeterminate" style={{ width: "25%"  ,marginBottom:20 , paddingEnd:20 }} color="black"  
     
    />

        <View style={{ flexDirection :'row'  }} >
        <Button  color="orange">Age:</Button>    
        <Text style={{ color:'black', fontSize:Blob, fontSize:30 , marginLeft:80 }}  >23</Text>
        </View> 
        <Card.Divider width={10} color='black'
       />
        <View style={{ flexDirection :'row'  }} >
        <Button color="orange">Resendence:</Button>   
        <Text style={{ color:'black', fontSize:Blob, fontSize:30 , marginLeft:80 }}  >BD</Text>
        </View>
        <Card.Divider width={10} color='black'
       />
        <View style={{ flexDirection :'row'  }} >
        <Button color="orange">Frelancer:     </Button>   
        <Text style={{ color:'green', fontSize:Blob, fontSize:30 , marginLeft:80 }}  >Avalibal</Text>
        </View>
        <Card.Divider width={10} color='black'
       />
        <View style={{ flexDirection :'row'  }} >
        <Button color="orange">Address:</Button>   
        <Text style={{ color:'black', fontSize:Blob, fontSize:30 , marginLeft:80 }}  >Minya , Egypt</Text>
        </View>
        <Card.Divider width={20} color='black'
       />
       <LinearProgress  value={0}  variant="indeterminate" style={{ width: "25%"  ,marginBottom:20 , paddingEnd:20 }} color="black"  
     
     />
<Text style={{ color:'black', fontSize:Blob, fontSize:50 , marginLeft:3 }}  >Languages</Text>
<Card.Divider width={10} color='black'
       />

<View style={styles.progressBarContainer}>
   <View style={{ fontSize:Blob, fontSize:30 , width:150 }}>

            <Text style={styles.progressLabelText}>Arabic</Text>
            <ProgressBar progress={0.8} width={200} color="#4AC959"   />
          </View>
         
       
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabelText}>English</Text>
            <ProgressBar progress={0.9} width={200} color="#4AC959" />
          </View>
        
       
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabelText}>German</Text>
            <ProgressBar progress={0.6} width={200} color="#4AC959" />
            </View>


            
          </View>
          

<Card.Divider width={20} color='black'
       />
       
     
       <LinearProgress  value={0}  variant="indeterminate" style={{ width: "25%"  ,marginBottom:20 , paddingEnd:20 }} color="black"  
     
    />
       <View  >
       <Text style={{ color:'black', fontSize:Blob, fontSize:50 , marginLeft:3 }}  >Links</Text>
       </View>
       <View   style={{ flexDirection:'row' }}>
       <TouchableOpacity

style={[styles.icon, {  marginLeft: 5 }]}
>
<Icon name="link" size={25} color="orange" />
</TouchableOpacity>

<Text style={{ color:'black', fontSize:Blob, fontSize:20, marginLeft:3 }}  >www.google.com</Text>
        </View> 

        <View   style={{ flexDirection:'row' }}>
       <TouchableOpacity

style={[styles.icon, {  marginLeft: 5 }]}
>
<Icon name="link" size={25} color="orange" />
</TouchableOpacity>

<Text style={{ color:'black', fontSize:Blob, fontSize:20, marginLeft:3 }}  >www.youtube.com</Text>
        </View> 

        <View   style={{ flexDirection:'row' }}>
       <TouchableOpacity

style={[styles.icon, {  marginLeft: 5 }]}
>
<Icon name="link" size={25} color="orange" />
</TouchableOpacity>

<Text style={{ color:'black', fontSize:Blob, fontSize:20, marginLeft:3 }}  >www.tiktok.com</Text>
        </View> 



       
       
        </View>

   

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft:600,
    marginTop:50
  },
});




    
 