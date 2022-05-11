import { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

function MyPhotos(props) {
  const [photosGridSelected, setPhotosGridSelected] = useState(true);
  const [photosData, setPhotosData] = useState([
    { id: 1, url: 'https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' },
    { id: 2, url: 'https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' },
    { id: 3, url: 'https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.buttonChoicePhotoOrTag,
            photosGridSelected && styles.buttonSelectedPhotoOrTag,
          ]}
          onPress={_ => setPhotosGridSelected(true)}
        >
          <MaterialCommunityIcons name="grid" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonChoicePhotoOrTag,
            !photosGridSelected && styles.buttonSelectedPhotoOrTag,
          ]}
          onPress={_ => setPhotosGridSelected(false)}
        >
          <MaterialIcons name="person-pin" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {photosGridSelected ? (
        <View style={styles.photosGrid}>
          <View style={styles.rowPhotos}>
            {photosData.map((photo) => (
              <TouchableOpacity key={photo.id}>
                <Image
                  source={{ uri: photo.url }}
                  style={styles.photoGrid}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.tagedPhotos}>
          <MaterialIcons name="person-pin" size={60} color="black" />
          <Text style={styles.tagedEmpityTitle}>Fotos e videos com você</Text>
          <Text style={styles.tagedEmpityDescription}>Quando as pessoas marcarem você em fotos e videos, eles aparecerão aqui.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  buttonChoicePhotoOrTag: {
    backgroundColor: 'white',
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 4,
  },
  buttonSelectedPhotoOrTag: {
    borderColor: '#525252',
    borderBottomWidth: 1,
  },
  rowPhotos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 2
  },
  photoGrid: {
    width: 130,
    height: 130,
  },
  tagedPhotos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50
  },
  tagedEmpityTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 5,
    marginBottom: 2,
  },
  tagedEmpityDescription: {
    fontSize: 14,
    textAlign: 'center'
  },
});

export default MyPhotos;