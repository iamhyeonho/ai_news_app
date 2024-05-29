import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchArticleDetail} from '../store/actions/newsActions';

const NewsDetailScreen = ({route}) => {
  const {articleId} = route.params;
  const article = useSelector(state => state.news.selectedArticle);
  const isLoading = useSelector(state => state.news.isLoading);
  const error = useSelector(state => state.news.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleDetail(articleId));
  }, [dispatch, articleId]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.content}>{article.content}</Text>
        </>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default NewsDetailScreen;
