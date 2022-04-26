import { registerRootComponent } from 'expo';
import { Todos, AddTodo } from 'src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from 'src/types';
import { RecoilRoot } from 'recoil';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Todos">
            <Stack.Screen
              name="Todos"
              component={Todos}
              options={{
                title: 'Todos',
              }}
            />
            <Stack.Screen
              name="AddTodo"
              component={AddTodo}
              options={{
                title: 'Add Todo',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
