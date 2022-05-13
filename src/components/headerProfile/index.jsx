import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';

function HeaderProfile(props) {
  return (
    <View style={styles.header}>
      <View style={styles.headerButtons}>
      <Entypo name="lock" size={16} color="black" />
      <Text style={styles.nickName}>la_laura</Text>
      <AntDesign name="down" style={styles.downIcon} size={16} color="black" />
      </View>
      <View style={styles.headerButtons}>
      <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={24} color="black"  style={styles.likeButton}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: "#FFF",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 20,
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 0.3,
  },
  logo: {
    height: 43,
    width: 130
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    marginRight: 13,
  },
  sendButton: {
    height: 28,
    width: 28
  },
  nickName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 6
  },
  downIcon:{
    marginLeft: 4,
    marginTop: 5,
  }
});

export default HeaderProfile;