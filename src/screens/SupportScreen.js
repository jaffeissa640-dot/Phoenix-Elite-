import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../contexts/AuthContext';
import { colors, typography, spacing } from '../styles/theme';
import api from '../services/api';

export default function SupportScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState('email');
  const [contactValue, setContactValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!subject || !message) {
      Alert.alert('Error', 'Please fill in subject and message.');
      return;
    }

    setLoading(true);
    try {
      await api.post('/api/support', {
        user_id: user?.id,
        username: user?.username,
        subject,
        message,
        contact_method: contactMethod,
        contact_value: contactValue || user?.email,
      });
      Alert.alert('Success', 'Your support request has been sent. We will contact you soon.');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to send support request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Support</Text>
        <Text style={styles.subtitle}>
          We'll respond to your enquiry within 24 hours.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Subject *</Text>
          <TextInput
            style={styles.input}
            placeholder="Brief description of your issue"
            placeholderTextColor={colors.textDark}
            value={subject}
            onChangeText={setSubject}
          />

          <Text style={styles.label}>Message *</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe your issue in detail..."
            placeholderTextColor={colors.textDark}
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />

          <Text style={styles.label}>Preferred Contact Method</Text>
          <View style={styles.methodContainer}>
            <TouchableOpacity
              style={[styles.methodButton, contactMethod === 'email' && styles.methodActive]}
              onPress={() => setContactMethod('email')}
            >
              <Text style={[styles.methodText, contactMethod === 'email' && styles.methodTextActive]}>
                Email
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.methodButton, contactMethod === 'whatsapp' && styles.methodActive]}
              onPress={() => setContactMethod('whatsapp')}
            >
              <Text style={[styles.methodText, contactMethod === 'whatsapp' && styles.methodTextActive]}>
                WhatsApp
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>
            {contactMethod === 'email' ? 'Your Email' : 'Your WhatsApp Number'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder={contactMethod === 'email' ? 'your@email.com' : '+1234567890'}
            placeholderTextColor={colors.textDark}
            value={contactValue}
            onChangeText={setContactValue}
            keyboardType={contactMethod === 'email' ? 'email-address' : 'phone-pad'}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color={colors.black} />
            ) : (
              <Text style={styles.submitText}>Send Message</Text>
            )}
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
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  title: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.sizes.xlarge,
    color: colors.gold,
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.regular,
    color: colors.textMuted,
    marginBottom: spacing.xl,
  },
  form: {
    width: '100%',
  },
  label: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
    marginBottom: spacing.xs,
    marginTop: spacing.md,
  },
  input: {
    backgroundColor: colors.blackLight,
    borderWidth: 1,
    borderColor: colors.borderGold,
    borderRadius: 10,
    padding: spacing.md,
    color: colors.warmWhite,
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.regular,
  },
  textArea: {
    height: 150,
  },
  methodContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  methodButton: {
    flex: 1,
    padding: spacing.sm,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderGold,
    alignItems: 'center',
  },
  methodActive: {
    borderColor: colors.gold,
    backgroundColor: 'rgba(255, 215, 0, 0.05)',
  },
  methodText: {
    fontFamily: typography.fontFamily.primary,
    color: colors.textMuted,
  },
  methodTextActive: {
    color: colors.gold,
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: colors.gold,
    paddingVertical: spacing.md,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  submitText: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.medium,
    color: colors.black,
  },
});
