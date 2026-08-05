import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
  Clipboard,
} from 'react-native';
import { colors, typography, spacing } from '../styles/theme';
import { cryptoDeposit } from '../services/cryptoDeposit';

const CRYPTO_CURRENCIES = [
  { symbol: 'USDT', name: 'Tether', network: 'TRC20' },
  { symbol: 'BTC', name: 'Bitcoin', network: 'BTC' },
  { symbol: 'BNB', name: 'BNB', network: 'BEP20' },
  { symbol: 'ETH', name: 'Ethereum', network: 'ERC20' },
  { symbol: 'SOL', name: 'Solana', network: 'SOL' },
];

export default function DepositModal({ visible, onClose }) {
  const [selectedCurrency, setSelectedCurrency] = useState('USDT');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [depositAddress, setDepositAddress] = useState(null);
  const [transactionId, setTransactionId] = useState('');

  const generateAddress = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }

    setLoading(true);
    try {
      const result = await cryptoDeposit.generateAddress(selectedCurrency);
      setDepositAddress(result);
      Alert.alert(
        'Deposit Address Generated',
        `Send exactly ${amount} ${selectedCurrency} to the address below.`,
        [{ text: 'OK' }]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to generate deposit address');
    } finally {
      setLoading(false);
    }
  };

  const copyAddress = () => {
    if (depositAddress?.address) {
      Clipboard.setString(depositAddress.address);
      Alert.alert('Copied!', 'Address copied to clipboard');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Deposit Crypto</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.currencyGrid}>
            {CRYPTO_CURRENCIES.map((crypto) => (
              <TouchableOpacity
                key={crypto.symbol}
                style={[
                  styles.currencyButton,
                  selectedCurrency === crypto.symbol && styles.currencyActive,
                ]}
                onPress={() => setSelectedCurrency(crypto.symbol)}
              >
                <Text style={styles.currencySymbol}>{crypto.symbol}</Text>
                <Text style={styles.currencyName}>{crypto.name}</Text>
                <Text style={styles.currencyNetwork}>{crypto.network}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Amount ({selectedCurrency})</Text>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              placeholderTextColor={colors.textDark}
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
            />
          </View>

          <TouchableOpacity
            style={styles.generateButton}
            onPress={generateAddress}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color={colors.black} />
            ) : (
              <Text style={styles.generateButtonText}>Generate Address</Text>
            )}
          </TouchableOpacity>

          {depositAddress && (
            <View style={styles.addressContainer}>
              <Text style={styles.addressLabel}>Deposit Address</Text>
              <TouchableOpacity onPress={copyAddress}>
                <Text style={styles.addressText}>{depositAddress.address}</Text>
              </TouchableOpacity>
              <Text style={styles.addressNote}>
                Send only {selectedCurrency} to this address.
              </Text>
              <Text style={styles.addressNote}>
                Minimum deposit: {depositAddress.min_amount || 0} {selectedCurrency}
              </Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.blackLight,
    borderRadius: 16,
    padding: spacing.lg,
    width: '90%',
    maxWidth: 400,
    borderWidth: 1,
    borderColor: colors.borderGold,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.sizes.large,
    color: colors.gold,
  },
  closeButton: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.large,
    color: colors.textMuted,
  },
  currencyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  currencyButton: {
    flex: 1,
    minWidth: '45%',
    padding: spacing.sm,
    backgroundColor: colors.black,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderGold,
    alignItems: 'center',
  },
  currencyActive: {
    borderColor: colors.gold,
    backgroundColor: 'rgba(255, 215, 0, 0.05)',
  },
  currencySymbol: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.medium,
    color: colors.warmWhite,
  },
  currencyName: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
  },
  currencyNetwork: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.gold,
  },
  inputGroup: {
    marginBottom: spacing.md,
  },
  label: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: colors.black,
    borderWidth: 1,
    borderColor: colors.borderGold,
    borderRadius: 8,
    padding: spacing.md,
    color: colors.warmWhite,
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.regular,
  },
  generateButton: {
    backgroundColor: colors.gold,
    paddingVertical: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  generateButtonText: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.medium,
    color: colors.black,
  },
  addressContainer: {
    backgroundColor: colors.black,
    padding: spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderGold,
  },
  addressLabel: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  addressText: {
    fontFamily: 'monospace',
    fontSize: typography.sizes.small,
    color: colors.gold,
    marginBottom: spacing.xs,
    wordBreak: 'break-all',
  },
  addressNote: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
});
