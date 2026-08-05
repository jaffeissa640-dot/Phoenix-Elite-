import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../contexts/AuthContext';
import { PriceContext } from '../contexts/PriceContext';
import { colors, typography, spacing, shadows } from '../styles/theme';
import WalletCard from '../components/WalletCard';
import ChartComponent from '../components/ChartComponent';
import PairSelector from '../components/PairSelector';
import TimeframeSelector from '../components/TimeframeSelector';

export default function HomeScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const { prices, selectedSymbol, setSelectedSymbol } = useContext(PriceContext);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1h');

  const onRefresh = async () => {
    setRefreshing(true);
    // Refresh logic
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Header with User Info */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.username}>{user?.full_name || user?.username}</Text>
            <View style={styles.membershipBadge}>
              <Text style={styles.membershipText}>Elite Trader</Text>
            </View>
          </View>
        </View>

        {/* Wallet Card */}
        <WalletCard />

        {/* Pair & Timeframe Selector */}
        <View style={styles.selectorContainer}>
          <PairSelector
            selectedSymbol={selectedSymbol}
            onSelectSymbol={setSelectedSymbol}
          />
          <TimeframeSelector
            selectedTimeframe={selectedTimeframe}
            onSelectTimeframe={setSelectedTimeframe}
          />
        </View>

        {/* Chart */}
        <View style={styles.chartContainer}>
          <ChartComponent symbol={selectedSymbol} timeframe={selectedTimeframe} />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Trade')}
          >
            <Text style={styles.actionText}>Trade</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('AIInsights')}
          >
            <Text style={styles.actionText}>AI Insights</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Support')}
          >
            <Text style={styles.actionText}>Support</Text>
          </TouchableOpacity>
        </View>

        {/* AI Insights Preview */}
        <View style={styles.insightsPreview}>
          <Text style={styles.sectionTitle}>AI Insights</Text>
          <TouchableOpacity
            style={styles.insightsCard}
            onPress={() => navigation.navigate('AIInsights')}
          >
            <Text style={styles.insightsTitle}>
              {selectedSymbol} Analysis
            </Text>
            <Text style={styles.insightsSub}>
              AI-powered technical analysis, forecasts & news
            </Text>
            <Text style={styles.insightsCta}>Tap to unlock insights →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContent: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: spacing.md,
  },
  welcomeText: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.regular,
    color: colors.textMuted,
  },
  username: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.sizes.large,
    color: colors.warmWhite,
    marginTop: spacing.xs,
  },
  membershipBadge: {
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
    marginTop: spacing.xs,
    alignSelf: 'flex-start',
  },
  membershipText: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.small,
    color: colors.gold,
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: spacing.md,
  },
  chartContainer: {
    height: 300,
    backgroundColor: colors.blackLight,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderGold,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  actionButton: {
    flex: 1,
    backgroundColor: colors.blackLight,
    borderWidth: 1,
    borderColor: colors.borderGold,
    borderRadius: 10,
    paddingVertical: spacing.md,
    marginHorizontal: spacing.xs,
    alignItems: 'center',
  },
  actionText: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.regular,
    color: colors.warmWhite,
  },
  insightsPreview: {
    marginTop: spacing.sm,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.sizes.medium,
    color: colors.warmWhite,
    marginBottom: spacing.sm,
  },
  insightsCard: {
    backgroundColor: colors.blackLight,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 12,
    padding: spacing.md,
    ...shadows.gold,
  },
  insightsTitle: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.medium,
    color: colors.gold,
  },
  insightsSub: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  insightsCta: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.gold,
    marginTop: spacing.sm,
  },
});
