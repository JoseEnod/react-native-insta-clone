import { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

function Post({ name, avatarUrl, photoPost, likes, description }) {
  const [liked, setLike] = useState(false);
  const [marked, setMarked] = useState(false);

  return (
    <View style={styles.post}>
      <View style={styles.perfil}>
        <Image
          source={{ uri: avatarUrl }}
          style={styles.photoPerfil}
        />
        <Text style={styles.namePerfil}>{name}</Text>
      </View>
      <View>
        <Image style={styles.imgPost}
          source={{ uri: photoPost }}
        />
      </View>
      <View style={styles.interactionRow}>
        <View style={styles.buttonsInteractionRow}>
          <TouchableOpacity
            onPress={() => liked ? setLike(false) : setLike(true)}
          >
            {liked ?
              <AntDesign name="heart" size={26} color="red" style={styles.buttonsInteractionIcons} /> :
              <AntDesign name="hearto" size={26} color="black" style={styles.buttonsInteractionIcons} />}
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="message-circle" size={27} color="black" style={styles.buttonsInteractionIcons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={26} color="black" style={styles.buttonsInteractionIcons} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
            onPress={() => marked ? setMarked(false) : setMarked(true)}
          >
            {marked ?
              <Ionicons name="bookmark-sharp" size={27} color="black" /> :
              <Ionicons name="bookmark-outline" size={27} color="black" />}
          </TouchableOpacity>

      </View>
      <View>
        <Text style={styles.likesAndDescriptionText}>
          Curdido por
          <Text style={styles.spanText}> {likes} </Text>
          e
          <Text style={styles.spanText}> outras pessoas </Text>
        </Text>
        <Text style={styles.likesAndDescriptionText}>
          <Text style={styles.spanText}>{name} </Text>
          {description}
        </Text>
        <Text style={styles.comments}>
          Ver todos os 15 comentários
        </Text>
        <Text style={styles.postTime}>
          Há 12 horas
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 15
  },
  perfil: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  photoPerfil: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 8,
  },
  namePerfil: {
    fontWeight: 'bold',
    fontSize: 15
  },
  imgPost: {
    width: '100%',
    height: 400,
  },
  interactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 3,
  },
  buttonsInteractionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  buttonsInteraction: {
    height: 32,
    width: 32,
    marginRight: 10
  },
  buttonsInteractionIcons: {
    marginRight: 10
  },
  spanText: {
    fontWeight: 'bold',
  },
  likesAndDescriptionText: {
    fontSize: 14,
    paddingLeft: 15,
  },
  comments: {
    fontSize: 14,
    paddingLeft: 15,
    marginTop: 2,
    color: '#808080',
  },
  postTime: {
    fontSize: 10,
    paddingLeft: 15,
    color: '#909090',
  }
});

export default Post;