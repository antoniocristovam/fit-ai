import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { styles } from './styles';

function EyeToggle({ visible, onPress }: { visible: boolean; onPress: () => void }): React.JSX.Element {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: 8, bottom: 8, left: 12, right: 12 }}
      activeOpacity={0.6}
    >
      <Text style={styles.eyeToggle}>{visible ? 'OCULTAR' : 'MOSTRAR'}</Text>
    </TouchableOpacity>
  );
}

export function LoginScreen(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.bgOrbTop} pointerEvents="none" />
      <View style={styles.bgOrbBottom} pointerEvents="none" />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.brandSection}>
            <View style={styles.logoWrap}>
              <View style={styles.logoGlow} />
              <View style={styles.logoDiamond}>
                <Text style={styles.logoLetter}>F</Text>
              </View>
            </View>

            <Text style={styles.appName}>
              {'FIT'}
              <Text style={styles.appNameAccent}>{'AI'}</Text>
            </Text>

            <Text style={styles.tagline}>{'PERFORMANCE. UNLEASHED.'}</Text>
            <View style={styles.taglineDivider} />
          </View>

          <View style={styles.card}>
            <View style={styles.cardHighlight} />

            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Bem-vindo de volta</Text>
              <Text style={styles.cardSubtitle}>Entre para continuar sua jornada</Text>
            </View>

            <View style={styles.fields}>
              <Input
                label="E-mail"
                placeholder="seu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
                value={email}
                onChangeText={setEmail}
                returnKeyType="next"
              />

              <Input
                label="Senha"
                placeholder="••••••••"
                secureTextEntry={!showPassword}
                autoComplete="password"
                textContentType="password"
                value={password}
                onChangeText={setPassword}
                returnKeyType="done"
                rightAccessory={
                  <EyeToggle
                    visible={showPassword}
                    onPress={() => setShowPassword(prev => !prev)}
                  />
                }
              />
            </View>

            <TouchableOpacity style={styles.forgotRow} activeOpacity={0.7}>
              <Text style={styles.forgotText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <Button
              label="ENTRAR"
              variant="primary"
              size="lg"
              fullWidth
              style={styles.loginBtn}
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Ainda não tem uma conta? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.footerLink}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
