import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import logoImg from './../../images/logo.png';

function Header(props) {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={logoImg}
      />
      <View style={styles.headerButtons}>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={24} color="black"  style={styles.marginButton}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="hearto" size={22} color="black" style={styles.marginButton}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="message1" size={20} color="black" />
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
    alignItems: 'center',
  },
  marginButton: {
    marginRight: 13,
  },
});

export default Header;