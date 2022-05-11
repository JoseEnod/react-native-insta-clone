import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function MyProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=801' }}
          style={styles.avatar}
        />
        <View style={styles.columnFollows}>
          <Text style={styles.followersNumber}>107</Text>
          <Text style={styles.followersText}>Publicações</Text>
        </View>
        <View style={styles.columnFollows}>
          <Text style={styles.followersNumber}>2.689</Text>
          <Text style={styles.followersText}>Seguidores</Text>
        </View>
        <View style={styles.columnFollows}>
          <Text style={styles.followersNumber}>1.927</Text>
          <Text style={styles.followersText}>Seguindo</Text>
        </View>
      </View>
      <Text style={styles.name}>Laura Musk</Text>
      <Text style={styles.bio}>
        📚 Music Student{'\n'}
        🎤 Singer{'\n'}
        🌃 21 yo
      </Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addPersonButton}>
          <Ionicons name="person-add-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    paddingHorizontal: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 18,
    paddingBottom: 10,
  },
  avatar: {
    width: 95,
    height: 95,
    borderRadius: 100,
  },
  columnFollows: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  followersNumber: {
    fontWeight: 'bold',
    fontSize: 18
  },
  followersText: {
    fontSize: 14
  },
  name: {
    fontWeight: 'bold',
    fontSize: 19
  },
  bio: {
    marginTop: 3,
    fontSize: 14
  },
  editButton: {
    borderColor: '#525252',
    borderWidth: 1,
    borderRadius: 8,
    width: '85%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  editButtonText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  addPersonButton: {
    borderColor: '#525252',
    borderWidth: 1,
    borderRadius: 8,
    width: '12%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default MyProfile;