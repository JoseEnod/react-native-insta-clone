import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import logoImg from './../../images/logo.png';
import likeImg from './../../images/icons/like.png';
import messagesImg from './../../images/icons/message.png';
import addImg from './../../images/icons/add.png';

function Header(props) {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={logoImg}
      />
      <View style={styles.headerButtons}>
        <TouchableOpacity>
          <Image
            style={styles.likeButton}
            source={addImg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.likeButton}
            source={likeImg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.sendButton}
            source={messagesImg}
          />
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
    justifyContent: 'space-between',
  },
  likeButton: {
    height: 28,
    width: 28,
    marginRight: 13,
  },
  sendButton: {
    height: 28,
    width: 28
  },
});

export default Header;