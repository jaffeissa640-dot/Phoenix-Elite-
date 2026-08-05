import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../contexts/AuthContext';
import { PriceContext } from '../contexts/PriceContext';
import { colors, typography, spacing } from '../styles/theme';
import api from '../services/api';

export default function AIInsightsScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const { selectedSymbol, selectedTimeframe } = useContext(PriceContext);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState(null);
  const [activeTab, setActiveTab] = useState('analysis');

  useEffect(() => {
    checkSubscription();
  }, []);

  const checkSubscription = async () => {
    try {
      const response = await api.get('/api/subscription/status');
      setHasSubscription(response.data.has_access);
      if (response.data.has_access) {
        loadInsights();
      }
    } catch (error) {
      console.error('Subscription check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadInsights = async () => {
    try {
      const response = await api.get(`/api/ai/insights/${selectedSymbol}?timeframe=${selectedTimeframe}`);
      setInsights(response.data);
    } catch (error) {
      console.error('Insights load failed:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.gold} />
      </View>
    );
  }

  if (!hasSubscription) {
    return (
      <View style={styles.centered}>
        <Text style={styles.lockIcon}>🔒</Text>
        <Text style={styles.lockTitle}>AI Insights Locked</Text>
        <Text style={styles.lockSub}>
          Subscribe to unlock AI-powered technical analysis, forecasts, and news.
        </Text>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Insights</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Premium</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        {['analysis', 'forecast', 'news'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content}>
        {insights && (
          <View style={styles.insightCard}>
            <Text style={styles.insightTitle}>
              {selectedSymbol} {activeTab}
            </Text>
            <Text style={styles.insightDescription}>
              {activeTab === 'analysis' && insights.analysis}
              {activeTab === 'forecast' && insights.forecast}
              {activeTab === 'news' && insights.news}
            </Text>
            <View style={styles.metaContainer}>
              <Text style={styles.metaText}>
                Confidence: {insights.confidence || '72%'}
              </Text>
              <Text style={styles.metaText}>
                {selectedTimeframe} · {selectedSymbol}
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
    backgroundColor: colors.black,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGold,
  },
  headerTitle: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.sizes.large,
    color: colors.gold,
  },
  badge: {
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  badgeText: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.small,
    color: colors.gold,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: colors.blackLight,
    padding: spacing.xs,
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderGold,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: colors.gold,
  },
  tabText: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
  },
  tabTextActive: {
    color: colors.black,
    fontWeight: '700',
  },
  content: {
    paddingHorizontal: spacing.lg,
  },
  insightCard: {
    backgroundColor: colors.blackLight,
    borderWidth: 1,
    borderColor: colors.borderGold,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  insightTitle: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.medium,
    color: colors.gold,
    marginBottom: spacing.sm,
  },
  insightDescription: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.regular,
    color: colors.textMuted,
    lineHeight: 24,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.borderGold,
  },
  metaText: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
  },
  lockIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  lockTitle: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.sizes.xlarge,
    color: colors.warmWhite,
    marginBottom: spacing.sm,
  },
  lockSub: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.regular,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  subscribeButton: {
    backgroundColor: colors.gold,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: 10,
  },
  subscribeButtonText: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.medium,
    color: colors.black,
  },
});
