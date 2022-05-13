import { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

export default function Stories({ navigation, route }) {
  const { avatar_url, name, url } = route.params.story;

  const [message, setMessage] = useState('');
  const [liked, setLike] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.profileInfos}>
          <Image
            source={{ uri: avatar_url }}
            style={styles.avatarImg}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={34} color="white" />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: url }}
        style={styles.storyImg}
      />

      <View style={styles.interactions}>

        <TextInput
          style={styles.inputSendMessage}
          onChangeText={setMessage}
          value={message}
          placeholder="Enviar mensagem"
          placeholderTextColor="#FFF"
        />
        <TouchableOpacity
          onPress={() => liked ? setLike(false) : setLike(true)}
        >
          {liked ? <AntDesign name="heart" size={26} color="red" /> : <AntDesign name="hearto" size={26} color="white" />}
        </TouchableOpacity>

        {/*  */}
        <Feather name="send" size={26} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#a5a5a5'
  },
  storyImg: {
    width: '100%',
    height: '100%',
  },
  headerRow: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    zIndex: 10,
    marginTop: 15,
    marginBottom: -65
  },
  profileInfos: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarImg: {
    width: 38,
    height: 38,
    borderRadius: 100,
  },
  name: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16
  },
  interactions: {
    width: '100%',
    height: 50,
    zIndex: 3,
    marginTop: -60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  sendTextBorder: {
    width: '75%',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 30,
  },
  sendText: {
    fontSize: 18,
    color: '#FFF',
  },
  inputSendMessage: {
    width: '75%',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 30,
    fontSize: 15,
    color: '#FFF',
  }
});