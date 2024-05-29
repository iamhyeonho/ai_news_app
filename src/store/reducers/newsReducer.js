const initialState = {
  articles: [],
  selectedArticle: null,
  isLoading: false,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_REQUEST':
      return {...state, isLoading: true, error: null};
    case 'FETCH_ARTICLES_SUCCESS':
      return {...state, isLoading: false, articles: action.payload};
    case 'FETCH_ARTICLES_FAILURE':
      return {...state, isLoading: false, error: action.payload};
    case 'FETCH_ARTICLE_DETAIL_REQUEST':
      return {...state, isLoading: true, error: null};
    case 'FETCH_ARTICLE_DETAIL_SUCCESS':
      return {...state, isLoading: false, selectedArticle: action.payload};
    case 'FETCH_ARTICLE_DETAIL_FAILURE':
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};

export default newsReducer;
