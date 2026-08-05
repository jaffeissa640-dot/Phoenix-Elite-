import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../contexts/AuthContext';
import { colors, typography, spacing } from '../styles/theme';

export default function WelcomeScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, register } = useContext(AuthContext);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (isLogin) {
        await login(username, password);
        navigation.replace('Main');
      } else {
        await register(username, email, password, fullName);
        Alert.alert('Success', 'Account created! Please login.');
        setIsLogin(true);
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>PHOENIX</Text>
            <Text style={styles.logoSub}>Elite • Broker</Text>
            <View style={styles.goldLine} />
          </View>

          {/* Welcome Text */}
          <Text style={styles.welcomeTitle}>
            {isLogin ? 'Welcome Back' : 'Join the Elite'}
          </Text>
          <Text style={styles.welcomeSub}>
            {isLogin
              ? 'Trade like a Phoenix. Access institutional-grade markets.'
              : 'Start your elite trading journey today.'}
          </Text>

          {/* Form */}
          <View style={styles.formContainer}>
            {!isLogin && (
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor={colors.textDark}
                value={fullName}
                onChangeText={setFullName}
              />
            )}
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={colors.textDark}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
            {!isLogin && (
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={colors.textDark}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={colors.textDark}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color={colors.black} />
              ) : (
                <Text style={styles.buttonText}>
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setIsLogin(!isLogin)}
              style={styles.switchButton}
            >
              <Text style={styles.switchText}>
                {isLogin
                  ? "Don't have an account? Register"
                  : 'Already have an account? Sign In'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: spacing.xxl,
    marginBottom: spacing.xl,
  },
  logo: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.sizes.hero,
    fontWeight: '800',
    color: colors.gold,
    letterSpacing: 2,
  },
  logoSub: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginTop: spacing.xs,
  },
  goldLine: {
    width: 60,
    height: 2,
    backgroundColor: colors.gold,
    marginTop: spacing.md,
    borderRadius: 1,
  },
  welcomeTitle: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.sizes.xlarge,
    color: colors.warmWhite,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  welcomeSub: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.regular,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: colors.blackLight,
    borderWidth: 1,
    borderColor: colors.borderGold,
    borderRadius: 10,
    padding: spacing.md,
    marginBottom: spacing.md,
    color: colors.warmWhite,
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.regular,
  },
  button: {
    backgroundColor: colors.gold,
    paddingVertical: spacing.md,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  buttonText: {
    fontFamily: typography.fontFamily.primaryBold,
    fontSize: typography.sizes.medium,
    color: colors.black,
  },
  switchButton: {
    marginTop: spacing.md,
    alignItems: 'center',
  },
  switchText: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.regular,
    color: colors.textMuted,
  },
});
