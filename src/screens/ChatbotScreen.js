import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {sendMessage} from '../store/actions/chatbotActions';

const ChatbotScreen = () => {
  const [inputText, setInputText] = useState('');
  const messages = useSelector(state => state.chatbot.messages);
  const isLoading = useSelector(state => state.chatbot.isLoading);
  const error = useSelector(state => state.chatbot.error);
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      dispatch(sendMessage(inputText));
      setInputText('');
    }
  };

  const renderMessageItem = ({item}) => (
    <View style={[styles.messageItem, item.isUser && styles.userMessageItem]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSendMessage}
          disabled={isLoading}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  messageList: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  messageItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  userMessageItem: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatbotScreen;
