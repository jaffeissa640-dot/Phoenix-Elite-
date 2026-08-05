import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../styles/theme';

const tabs = [
  { name: 'Home', icon: '🏠' },
  { name: 'AI Insights', icon: '🤖' },
  { name: 'Trade', icon: '📈' },
  { name: 'Support', icon: '💬' },
  { name: 'Profile', icon: '👤' },
];

export default function BottomNav({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;
        const label = tab.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: state.routes[index].key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(state.routes[index].name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tab}
            activeOpacity={0.7}
          >
            <Text style={styles.icon}>{tab.icon}</Text>
            <Text style={[styles.label, isFocused && styles.labelActive]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.blackLight,
    borderTopWidth: 1,
    borderTopColor: colors.borderGold,
    paddingVertical: spacing.sm,
    paddingBottom: spacing.sm,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
  },
  icon: {
    fontSize: 22,
    marginBottom: 2,
  },
  label: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
  },
  labelActive: {
    color: colors.gold,
    fontWeight: '600',
  },
});
