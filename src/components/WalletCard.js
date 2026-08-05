import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { colors, typography, spacing, shadows } from '../styles/theme';

export default function WalletCard() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Elite Phoenix Wallet</Text>
        <Text style={styles.cardId}>
          ID: {user?.wallet_id || '••••••••'}
        </Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>
          ${user?.balance?.toFixed(2) || '0.00'}
        </Text>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.footerItem}>
          <Text style={styles.footerLabel}>Equity</Text>
          <Text style={styles.footerValue}>
            ${user?.equity?.toFixed(2) || '0.00'}
          </Text>
        </View>
        <View style={styles.footerDivider} />
        <View style={styles.footerItem}>
          <Text style={styles.footerLabel}>Free Margin</Text>
          <Text style={styles.footerValue}>
            ${user?.free_margin?.toFixed(2) || '0.00'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.blackLight,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 16,
    padding: spacing.lg,
    ...shadows.gold,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  cardTitle: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.medium,
    color: colors.gold,
  },
  cardId: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
  },
  balanceContainer: {
    paddingVertical: spacing.md,
  },
  balanceLabel: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  balanceAmount: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.sizes.xxlarge,
    color: colors.gold,
    marginTop: spacing.xs,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.borderGold,
    paddingTop: spacing.md,
    marginTop: spacing.sm,
  },
  footerItem: {
    flex: 1,
  },
  footerDivider: {
    width: 1,
    backgroundColor: colors.borderGold,
  },
  footerLabel: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
  },
  footerValue: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.regular,
    color: colors.warmWhite,
    marginTop: spacing.xs,
  },
});
