import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { quiz1, quiz2, quiz3 } from './data';
import { firebase, database } from './config';

function Quiz_1_Screen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = Array.from(quiz1.questions);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          General Knowledge Quiz
        </Text>
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {showScore ? (
          <View>
            <Text
              style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
              You scored <Text style={{ color: 'green' }}>{score}</Text> out of{' '}
              {questions.length}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.goBack();
              }}>
              
              <Text style={styles.buttonTitle}>Exit</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 15, textAlign: 'center' }}>
              Question {currentQuestion + 1}/{questions.length}
            </Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
              {questions[currentQuestion].questionText}
            </Text>
            <View style={{justifyContent:'center',alignItems:'center',width:'75%',alignContent:'center'}}>
            <Text style={{ textAlign: 'center' }}>
              {' '}
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <TouchableOpacity
                  style={styles.button2}
                  title={answerOption.answerText}
                  onPress={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }>
                  <Text style={styles.buttonTitle}>
                    {' '}
                    {answerOption.answerText}
                  </Text>
                </TouchableOpacity>
              ))}
            </Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

function Quiz_2_Screen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = Array.from(quiz2.questions);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text
        style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
        Islamic Quiz
      </Text>
      {showScore ? (
        <View>
          <Text
            style={{
              flex: 2,
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            You scored <Text style={{ color: 'green' }}>{score}</Text> out of{' '}
            {questions.length}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}>
            
            <Text style={styles.buttonTitle}>Exit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 15, textAlign: 'center' }}>
            Question {currentQuestion + 1}/{questions.length}
          </Text>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
            {questions[currentQuestion].questionText}
          </Text>
          <View style={{justifyContent:'center',alignItems:'center',width:'75%',alignContent:'center'}}>
          <Text style={{ textAlign: 'center' }}>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <TouchableOpacity
                style={styles.button2}
                title={answerOption.answerText}
                onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                <Text style={styles.buttonTitle}>
                  {answerOption.answerText}
                </Text>
              </TouchableOpacity>
            ))}
          </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

function Quiz_3_Screen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = Array.from(quiz3.questions);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
        Programming Quiz
      </Text>
      {showScore ? (
        <View>
          <Text
            style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
            You scored <Text style={{ color: 'green' }}>{score}</Text> out of{' '}
            {questions.length}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}>
            
            <Text style={styles.buttonTitle}>Exit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 15, textAlign: 'center' }}>
            Question {currentQuestion + 1}/{questions.length}
          </Text>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
            {questions[currentQuestion].questionText}
          </Text>
          <View style={{justifyContent:'center',alignItems:'center',width:'75%',alignContent:'center'}}>
          <Text style={{ textAlign: 'center' }}>
            {' '}
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <TouchableOpacity
                style={styles.button2}
                title={answerOption.answerText}
                onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                <Text style={styles.buttonTitle}>
                  {answerOption.answerText}
                </Text>
              </TouchableOpacity>
            ))}
          </Text>
          </View>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}

function RegScreen({ route, navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [IslScore, setIslScore] = useState(0);
  const [GKScore, setGKScore] = useState(0);
  const [ProScore, setProScore] = useState(0);
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          fullName,
        };        
        const usersRef = firebase.database().ref('users/' + uid);
        usersRef

          .set(data)
          .then(() => {
            navigation.navigate('App', { data});
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <Image
          style={styles.logo}
          source={{uri:
            'https://base.imgix.net/files/base/ebm/ecmweb/image/2021/01/red_quiz_letters_on_question_mark_background.5ff479775102c.png?auto=format&fit=crop&h=432&w=768'
           } }
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}>
          <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{' '}
            <Text
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.footerLink}>
              Log in
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function LoginScreen({ route, navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        let user = response.user;
        let uid = user.uid;
        navigation.navigate('App', { uid });
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <Image
          style={styles.logo}
          source={{uri:
            'https://base.imgix.net/files/base/ebm/ecmweb/image/2021/01/red_quiz_letters_on_question_mark_background.5ff479775102c.png?auto=format&fit=crop&h=432&w=768'
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text
              onPress={() => {
                navigation.navigate('Registration');
              }}
              style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function Quiz_2_Start({ route, navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        margin: 10,
      }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
        Instructions:
      </Text>
      <Text style={{ margin: 10, width: '90%', textAlign: 'center' }}>
        {'\n\n'}
        {quiz2.instructions.toString()}
        {'\n\n'}
      </Text>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity
        style={styles.startbutton}
        onPress={() => navigation.navigate('Quiz 2')}>
        <Text style={styles.buttonTitle}>Start Quiz 2</Text>
      </TouchableOpacity>
      <Text>{'\n\n'}</Text>
      <TouchableOpacity
        style={styles.drawerbutton}
        onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.buttonTitle}>Select Quiz</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
function Quiz_1_Start({ route, navigation }) {
  return (
    <ScrollView
      style={{
        padding: 10,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
        Instructions:
      </Text>
      <Text style={{ margin: 10, width: '90%', textAlign: 'center' }}>
        {'\n\n'}
        {quiz1.instructions.toString()}
        {'\n\n'}
      </Text>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity
        style={styles.startbutton}
        onPress={() => navigation.navigate('Quiz 1')}>
        <Text style={styles.buttonTitle}>Start Quiz 1</Text>
      </TouchableOpacity>
      <Text>{'\n\n'}</Text>
      <TouchableOpacity
        style={styles.drawerbutton}
        onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.buttonTitle}>Select Quiz</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
function Quiz_3_Start({ route, navigation }) {
  return (
    <ScrollView
      style={{
        padding: 10,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          width: '90%',
          margin: 5,
          textAlign: 'center',
        }}>
        Instructions:
      </Text>
      <Text style={{ width: '90%', margin: 10, textAlign: 'center' }}>
        {'\n\n'}
        {quiz3.instructions.toString()}
        {'\n\n'}
      </Text>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity
        style={styles.startbutton}
        onPress={() => navigation.navigate('Quiz 3')}>
        <Text style={styles.buttonTitle}>Start Quiz 3</Text>
      </TouchableOpacity>
      <Text>{'\n\n'}</Text>
      <TouchableOpacity
        style={styles.drawerbutton}
        onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.buttonTitle}>Select Quiz</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


const Stack1 = createStackNavigator();
function Quiz_1_Stack({ route, navigation }) {
  return (
    <Stack1.Navigator>
      <Stack1.Screen name="Quiz 1 Info" component={Quiz_1_Start} />
      <Stack1.Screen name="Quiz 1" component={Quiz_1_Screen} />
    </Stack1.Navigator>
  );
}

const Stack2 = createStackNavigator();
function Quiz_2_Stack({ route, navigation }) {
  return (
    <Stack2.Navigator>
      <Stack2.Screen name="Quiz 2 Info" component={Quiz_2_Start} />
      <Stack2.Screen name="Quiz 2" component={Quiz_2_Screen} />
    </Stack2.Navigator>
  );
}
const Stack3 = createStackNavigator();
function Quiz_3_Stack({ route, navigation }) {
  return (
    <Stack3.Navigator>
      <Stack3.Screen name="Quiz 3 Info" component={Quiz_3_Start} />
      <Stack3.Screen name="Quiz 3" component={Quiz_3_Screen} />
    </Stack3.Navigator>
  );
}

function HomeScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
          Welcome to {'\n'} Mustafa's & Zarnab's {'\n'} TriQuiz App
        </Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>  
          {'\n'} FA18-BCS-078 {'\n'}  FA18-BCS-140
          
          
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.drawerbutton}
          onPress={() => navigation.toggleDrawer()}>
          <Text style={styles.buttonTitle}>Select Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer({ route, navigation }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Quiz 1" component={Quiz_1_Stack} />
      <Drawer.Screen name="Quiz 2" component={Quiz_2_Stack} />
      <Drawer.Screen name="Quiz 3" component={Quiz_3_Stack} />
      
    </Drawer.Navigator>
  );
}
const finalStack = createStackNavigator();
function MyfinalStack() {
  return (
    <finalStack.Navigator headerMode="none">
      <finalStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: 'none' }}
      />
      <finalStack.Screen
        name="Registration"
        component={RegScreen}
        options={{ headerShown: 'none' }}
      />
      <finalStack.Screen
        name="App"
        component={MyDrawer}
        options={{ headerShown: 'none' }}
      />
    </finalStack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyfinalStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: 'center',
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    width:'81%'
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: 'red',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  button2: {
    alignSelf: 'center',
    backgroundColor: 'red',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  drawerbutton: {
    width: '81%',
    backgroundColor: 'red',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startbutton: {
    width: '90%',
    backgroundColor: 'red',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    textAlign:'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});