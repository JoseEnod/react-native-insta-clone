import { StyleSheet, View } from 'react-native';

import HeaderProfile from './../../components/headerProfile';
import MyProfile from './../../components/myProfile';
import MyPhotos from './../../components/myPhotos';

import data from './../../connection/dataFake.json';

export default function Profile() {

  return (
    <View style={styles.container}>
      <HeaderProfile />
      <MyProfile />
      <MyPhotos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25
  },
});
