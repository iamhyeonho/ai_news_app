export const loginRequest = () => ({
  type: 'LOGIN_REQUEST',
});

export const loginSuccess = (user, token) => ({
  type: 'LOGIN_SUCCESS',
  payload: {user, token},
});

export const loginFailure = error => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const login = (username, password) => {
  return async dispatch => {
    dispatch(loginRequest());
    try {
      // API 호출을 통해 로그인 요청
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });
      const data = await response.json();
      if (response.ok) {
        // 로그인 성공 시 액션 디스패치
        dispatch(loginSuccess(data.user, data.token));
      } else {
        // 로그인 실패 시 액션 디스패치
        dispatch(loginFailure(data.error));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};
