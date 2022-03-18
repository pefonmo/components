
import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, Button, ImageBackground } from 'react-native';

const App = () => {
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'http://i.imgur.com/IGlBYaC.jpg',
        }}
      >
      <View style={styles.container}>
             <Image source={{ uri: "https://ionicframework.com/docs/icons/logo-react-icon.png" }} style={{ width: 210, height: 210 }} />
          <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'Digite o seu nome'}
          style={styles.input}
        />
        <Button
        title="Submit"
        color="#3c7ae1"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      
      </View>
           </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});

export default App;