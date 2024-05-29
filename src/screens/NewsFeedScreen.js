import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchArticles} from '../store/actions/newsActions';

const NewsFeedScreen = ({navigation}) => {
  const articles = useSelector(state => state.news.articles);
  const isLoading = useSelector(state => state.news.isLoading);
  const error = useSelector(state => state.news.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const renderArticleItem = ({item}) => (
    <TouchableOpacity
      style={styles.articleItem}
      onPress={() => navigation.navigate('NewsDetail', {articleId: item.id})}>
      <Text style={styles.articleTitle}>{item.title}</Text>
      <Text style={styles.articleDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={articles}
          renderItem={renderArticleItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  articleItem: {
    marginBottom: 20,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default NewsFeedScreen;
