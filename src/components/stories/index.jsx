import { StyleSheet, View, Image, TouchableOpacity, Text,ScrollView } from 'react-native';

function Stories({ data }) {
  return (
    <View style={styles.stories}>
      <ScrollView 
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      >
      {
      //View para dar espaço antes dos stories 
      }
      <View style={{width: 15}}/> 
      {data.map(story => {
        return (
          <TouchableOpacity
            key={story.id}
            style={styles.storyButton}
          >
            <View style={styles.rainbowCircle}>
              <Image
                style={styles.avatarPerfil}
                source={{ uri: story.avatar_url }}
              />
            </View>
            <Text style={styles.name}>{story.name}</Text>
          </TouchableOpacity>
        )
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  stories: {
    height: 110,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d4d4d4',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  storyButton:{
    // marginHorizontal: 12,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rainbowCircle: {
    width: 71,
    height: 71,
    padding: 1,
    borderColor: '#ff0062',
    borderWidth: 2,
    borderRadius: 100,
  },
  avatarPerfil: {
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  name:{
    fontWeight: 'bold',
  }
});

export default Stories;