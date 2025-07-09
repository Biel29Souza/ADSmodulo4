import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Dashboard = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const goToGestao1 = () => {
    navigation.navigate('GestaoCompostagem');
  };

  const goToRelatorioFinanceiro = () => {
    navigation.navigate('RelatorioFinanceiro');
  };

  const showEmBreve = () => {
    Alert.alert("Em breve", "Funcionalidade em desenvolvimento.");
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const primaryGreen = '#388e3c';

  const backgroundColor = darkMode ? '#121212' : '#e6f2e6';
  const headerBackground = primaryGreen;
  const textColor = darkMode ? '#eee' : '#222';
  const cardBackground = darkMode ? '#1c1c1c' : '#fff';
  const cardBorder = darkMode ? '#888' : '#ccc';
  const buttonBackground = primaryGreen;

  const salesData = [1, 1, 3.5, 4.5, 3.5, 2];
  const salesLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        nestedScrollEnabled={true}
      >
        <View style={[styles.header, { backgroundColor: headerBackground }]}>
          <Text style={styles.headerText}>Dashboard - Torre Verde</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={toggleDarkMode}>
              <Icon
                name={darkMode ? 'weather-sunny' : 'weather-night'}
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
            <Icon name="account-circle" size={28} color="#fff" style={{ marginLeft: 12 }} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>
            Acesso Rápido
          </Text>

          <TouchableOpacity style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]} onPress={goToGestao1}>
            <Text style={[styles.cardText, { color: textColor }]}>
              ♻️ Gestão Compostagem
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]} onPress={showEmBreve}>
            <Text style={[styles.cardText, { color: textColor }]}>
              📦 Gestão 2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]} onPress={showEmBreve}>
            <Text style={[styles.cardText, { color: textColor }]}>
              🧮 Gestão 3
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]} onPress={goToRelatorioFinanceiro}>
            <Text style={[styles.cardText, { color: textColor }]}>
              📊 Relatório Financeiro
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>
            Gráfico de Produção
          </Text>
          <BarChart
            data={{
              labels: salesLabels,
              datasets: [{ data: salesData }],
            }}
            width={screenWidth - 32}
            height={220}
            yAxisLabel=""
            chartConfig={{
              backgroundGradientFrom: backgroundColor,
              backgroundGradientTo: backgroundColor,
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(56, 142, 60, ${opacity})`,
              labelColor: () => textColor,
              style: { borderRadius: 12 },
            }}
            verticalLabelRotation={30}
            style={styles.chart}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonBackground }]}
          onPress={goToHome}
        >
          <Text style={styles.buttonText}>Voltar ao Início</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  section: { padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  cardText: { fontSize: 16 },
  chart: { marginVertical: 8, borderRadius: 12 },
  button: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default Dashboard;
