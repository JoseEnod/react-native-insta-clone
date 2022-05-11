import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';

import Header from './../../components/header';
import Stories from './../../components/stories';
import Post from './../../components/post';

import data from './../../connection/dataFake.json';

export default function Home() {
  const [postsData, setPostsData] = useState(data.posts);
  const [storiesData, setStoriesData] = useState(data.stories);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <>
                <Stories data={storiesData} />
                <Post
                  name={item.name}
                  avatarUrl={item.avatar_url}
                  photoPost={item.photo_post}
                  likes={item.likes[0]}
                  description={item.description}
                />
              </>
            )
          }
          return (
            <Post
              name={item.name}
              avatarUrl={item.avatar_url}
              photoPost={item.photo_post}
              likes={item.likes[0]}
              description={item.description}
            />
          )
        }
        }
      />
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
