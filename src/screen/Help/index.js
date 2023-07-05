import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import RNFS from 'react-native-fs';
const height = Dimensions.get("window").height;
const width = Dimensions.get('window').width;

const Help = () => {
  const [hasPermission, setPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');

  const runTest = async () => {
    RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then(result => {
        console.log('GOT RESULT', result);

        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then(statResult => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          return RNFS.readFile(statResult[1], 'utf8');
        }
        return 'no file';
      })
      .then(contents => {
        // log the file contentsh
        console.log(contents);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const deletePath = async () => {
    const path = RNFS.DocumentDirectoryPath +'/text.xml';
    const path1 = RNFS.DocumentDirectoryPath + '/test.mov';

    RNFS.unlink(path,path1)
      .then(() => {
        console.log('FILE DELETED');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const createfile = async () => {
    const path = RNFS.DocumentDirectoryPath +'/text.xml';
    const base64Data = await RNFS.readFile(image,'base64')
    const path1 = RNFS.DocumentDirectoryPath + '/test.mov';
    await RNFS.writeFile(path1,base64Data,'base64')
    RNFS.exists(path).then(exists => {
      if (exists) {
        Alert.alert('Path is exists');
      } else {
        RNFS.writeFile(path, title , 'utf8')
          .then(success => {
            runTest();
            clearButton();
            console.log("Written")
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    });
  };

  const checkfile = async () => {
    const path = RNFS.DocumentDirectoryPath +'/text.xml';
    RNFS.exists(path).then(exists => {
      if (exists) {
        Alert.alert('Path is exists');
      } else {
        Alert.alert('Path is not exists');
      }
    });
  };

  const clearButton = () => {
    setImage('');
    setTitle('');
  };


  useEffect(() => {
    (async () => {
      const statusGallery =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermission(statusGallery.status === "granted");
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // if (hasPermission === false) {
  //   return <Text>No access</Text>;
  // }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 40,
          backgroundColor: "#4ce0a8",
          marginTop: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.textbutton}>Choose</Text>
      </View>
      <View style={{}}>
        <TextInput
          placeholder="Title"
          style={{height: (height - 40 - 24 - 50) * 0.3}}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={{ height: (height - 40 - 24 - 50) * 0.7 }}>
        <Pressable
          style={{
            backgroundColor: "blue",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => pickImage()}
        >
          <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>
            Choose Picture
          </Text>
        </Pressable>
        {image ? <Image source={{ uri: image }} style={{ flex: 1 / 2 }} /> : null}
      </View>
      <View style={{height: 50, flexDirection: 'row'}}>
        <Pressable
          style={{
            width: width / 3,
            backgroundColor: '#d9cd71',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => checkfile()}>
          <Text style={styles.textbutton}>Check</Text>
        </Pressable>
        <Pressable
          style={{
            width: width / 3,
            backgroundColor: '#c9de71',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => createfile()}>
          <Text style={styles.textbutton}>Create</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#d4de41',
            alignItems: 'center',
            width: width / 3,
            justifyContent: 'center',
          }}
          onPress={() => deletePath()}>
          <Text style={styles.textbutton}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textbutton: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
});

export default Help;
