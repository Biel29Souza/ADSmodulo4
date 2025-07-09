import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const RelatorioFinanceiro = () => {
  const [darkMode, setDarkMode] = useState(false);

  const colors = {
    primary: '#388E3C',
    secondary: '#66BB6A',
    lightGray: '#F5F5F5',
    mediumGray: '#9E9E9E',
    darkGray: '#424242',
    white: '#FFFFFF',
    black: '#000000',
  };

  const backgroundColor = darkMode ? '#121212' : '#e6f2e6';
  const textColor = darkMode ? colors.white : colors.black;
  const cardBackground = darkMode ? colors.mediumGray : colors.white;
  const cardBorder = darkMode ? colors.lightGray : colors.mediumGray;

  const pieData = [
    { name: 'Receita', amount: 2500, color: colors.primary, legendFontColor: textColor, legendFontSize: 15 },
    { name: 'Despesas', amount: 500, color: colors.secondary, legendFontColor: textColor, legendFontSize: 15 },
    { name: 'Lucro', amount: 2000, color: '#81C784', legendFontColor: textColor, legendFontSize: 15 },
  ];

  const transacoes = [
    { id: '1', descricao: 'Venda de produto', valor: '+R$ 1.200,00' },
    { id: '2', descricao: 'Recebimento de serviço', valor: '+R$ 1.300,00' },
    { id: '3', descricao: 'Pagamento fornecedor', valor: '-R$ 250,00' },
    { id: '4', descricao: 'Compra de insumos', valor: '-R$ 250,00' },
  ];

  const Header = () => (
    <View>
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Text style={styles.headerText}>Relatório Financeiro</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
            <Icon name={darkMode ? 'weather-sunny' : 'weather-night'} size={28} color="#fff" />
          </TouchableOpacity>
          <Icon name="account-circle" size={28} color="#fff" style={{ marginLeft: 12 }} />
        </View>
      </View>

      <Text style={[styles.subtitulo, { color: textColor, paddingHorizontal: 16 }]}>Resumo</Text>
      <View style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}>
        <Text style={[styles.texto, { color: textColor }]}>Receita: R$ 2.500,00</Text>
        <Text style={[styles.texto, { color: textColor }]}>Despesa: R$ 500,00</Text>
        <Text style={[styles.texto, { color: textColor }]}>Saldo: R$ 2.000,00</Text>
      </View>

      <Text style={[styles.subtitulo, { color: textColor, paddingHorizontal: 16 }]}>Gráfico de Pizza</Text>
      <View style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}>
        <PieChart
          data={pieData}
          width={screenWidth - 32}
          height={220}
          chartConfig={{
            backgroundColor,
            backgroundGradientFrom: backgroundColor,
            backgroundGradientTo: backgroundColor,
            color: () => textColor,
          }}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="16"
          absolute
        />
      </View>

      <Text style={[styles.subtitulo, { color: textColor, paddingHorizontal: 16 }]}>Últimas Transações</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        ListHeaderComponent={Header}
        data={transacoes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={[styles.transacaoItem, { backgroundColor: cardBackground, borderColor: cardBorder }]}>
            <Text style={[styles.transacaoTexto, { color: textColor }]}>{item.descricao}</Text>
            <Text style={[styles.transacaoValor, { color: textColor }]}>{item.valor}</Text>
          </View>
        )}
      />
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
  subtitulo: { fontSize: 20, fontWeight: '600', marginTop: 24, marginBottom: 8 },
  texto: { fontSize: 16, marginBottom: 4 },
  card: {
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  transacaoItem: {
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  transacaoTexto: { fontSize: 16 },
  transacaoValor: { fontSize: 16, fontWeight: 'bold' },
});

export default RelatorioFinanceiro;
