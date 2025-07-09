import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native';

import DashboardScreen from './Dashboard'; // certifique-se do caminho correto
import CompostManagement from './GestaoCompostagem';
import RelatorioFinanceiro from './RelatorioFinanceiro'; // certifique-se do caminho correto

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Gestão de Compostagem"
          onPress={() => navigation.navigate('GestaoCompostagem')}
          color="#388e3c"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Dashboard"
          onPress={() => navigation.navigate('Dashboard')}
          color="#556B2F"
        />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu Inicial' }} />
        <Stack.Screen name="GestaoCompostagem" component={CompostManagement} options={{ title: 'Gestão de Compostagem' }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
        <Stack.Screen name="RelatorioFinanceiro" component={RelatorioFinanceiro} options={{ title: 'Relatório Financeiro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#e6f2e6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#2e7d32',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
