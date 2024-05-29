export const fetchArticlesRequest = () => ({
  type: 'FETCH_ARTICLES_REQUEST',
});

export const fetchArticlesSuccess = articles => ({
  type: 'FETCH_ARTICLES_SUCCESS',
  payload: articles,
});

export const fetchArticlesFailure = error => ({
  type: 'FETCH_ARTICLES_FAILURE',
  payload: error,
});

export const fetchArticles = () => {
  return async dispatch => {
    dispatch(fetchArticlesRequest());
    try {
      // API 호출을 통해 뉴스 기사 목록 가져오기
      const response = await fetch('https://api.example.com/articles');
      const data = await response.json();
      if (response.ok) {
        // 기사 가져오기 성공 시 액션 디스패치
        dispatch(fetchArticlesSuccess(data.articles));
      } else {
        // 기사 가져오기 실패 시 액션 디스패치
        dispatch(fetchArticlesFailure(data.error));
      }
    } catch (error) {
      dispatch(fetchArticlesFailure(error.message));
    }
  };
};
