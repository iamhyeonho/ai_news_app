export const sendMessageRequest = () => ({
  type: 'SEND_MESSAGE_REQUEST',
});

export const sendMessageSuccess = message => ({
  type: 'SEND_MESSAGE_SUCCESS',
  payload: message,
});

export const sendMessageFailure = error => ({
  type: 'SEND_MESSAGE_FAILURE',
  payload: error,
});

export const sendMessage = text => {
  return async dispatch => {
    dispatch(sendMessageRequest());
    try {
      // API 호출을 통해 챗봇 메시지 전송
      const response = await fetch('https://api.example.com/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text}),
      });
      const data = await response.json();
      if (response.ok) {
        // 메시지 전송 성공 시 액션 디스패치
        dispatch(sendMessageSuccess(data.message));
      } else {
        // 메시지 전송 실패 시 액션 디스패치
        dispatch(sendMessageFailure(data.error));
      }
    } catch (error) {
      dispatch(sendMessageFailure(error.message));
    }
  };
};
