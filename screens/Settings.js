import React from 'react';
import {
  Button,
  Divider,
  Icon,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
const Settings = props => {
  const { theme } = props;
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewSd}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      bounces={true}
    >
      <View
        hitSlop={{}}
        importantForAccessibility="auto"
        accessible={true}
        pointerEvents="auto"
      >
        <View style={styles.viewBv}>
          <Text
            style={StyleSheet.flatten([
              styles.textWr,
              theme.typography.headline4,
              { color: theme.colors.strong },
            ])}
          >
            Settings
          </Text>
        </View>
        <View
          style={styles.viewDo}
          accessible={true}
          hitSlop={{}}
          pointerEvents="auto"
          importantForAccessibility="auto"
        >
          <Touchable>
            <View
              style={styles.viewG0}
              pointerEvents="auto"
              hitSlop={{}}
              accessible={true}
              importantForAccessibility="auto"
            >
              <View
                style={styles.viewPW}
                pointerEvents="auto"
                importantForAccessibility="auto"
                accessible={true}
                hitSlop={{}}
              >
                <View
                  style={styles.viewJJ}
                  hitSlop={{}}
                  pointerEvents="auto"
                  accessible={true}
                  importantForAccessibility="auto"
                >
                  <Icon
                    style={styles.iconZ1}
                    color={theme.colors.strong}
                    size={34}
                    name="MaterialCommunityIcons/account-circle"
                  />
                </View>
                <View
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  accessible={true}
                  pointerEvents="auto"
                >
                  <Text
                    style={StyleSheet.flatten([
                      theme.typography.headline6,
                      { color: theme.colors.strong },
                    ])}
                    ellipsizeMode="tail"
                    accessible={true}
                    textBreakStrategy="highQuality"
                    allowFontScaling={true}
                  >
                    Account Settings
                  </Text>
                </View>
              </View>
              <Icon
                style={styles.iconTx}
                size={24}
                name="Ionicons/ios-arrow-forward"
                color={theme.colors.strong}
              />
            </View>
          </Touchable>
          <Divider
            style={styles.dividerAp}
            height={1}
            color={theme.colors.divider}
          />
          <Touchable>
            <View
              style={styles.viewAg}
              pointerEvents="auto"
              hitSlop={{}}
              importantForAccessibility="auto"
              accessible={true}
            >
              <View
                style={styles.viewDd}
                pointerEvents="auto"
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
              >
                <View
                  style={styles.view48}
                  importantForAccessibility="auto"
                  pointerEvents="auto"
                  accessible={true}
                  hitSlop={{}}
                >
                  <Icon
                    style={styles.iconKK}
                    size={34}
                    color={theme.colors.strong}
                    name="MaterialIcons/notifications"
                  />
                </View>
                <View
                  importantForAccessibility="auto"
                  accessible={true}
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <Text
                    style={StyleSheet.flatten([
                      theme.typography.headline6,
                      { color: theme.colors.strong },
                    ])}
                    allowFontScaling={true}
                    ellipsizeMode="tail"
                    accessible={true}
                    textBreakStrategy="highQuality"
                  >
                    Notifications
                  </Text>
                </View>
              </View>
              <Icon
                style={styles.iconWe}
                name="Ionicons/ios-arrow-forward"
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </Touchable>
          <Divider
            style={styles.dividerOH}
            height={1}
            color={theme.colors.divider}
          />
          <Touchable>
            <View
              style={styles.viewPf}
              pointerEvents="auto"
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
            >
              <View
                style={styles.viewPk}
                importantForAccessibility="auto"
                hitSlop={{}}
                accessible={true}
                pointerEvents="auto"
              >
                <View
                  style={styles.viewAR}
                  accessible={true}
                  pointerEvents="auto"
                  importantForAccessibility="auto"
                  hitSlop={{}}
                >
                  <Icon
                    style={styles.iconO7}
                    color={theme.colors.strong}
                    name="MaterialIcons/chat-bubble"
                    size={34}
                  />
                </View>
                <View
                  pointerEvents="auto"
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  accessible={true}
                >
                  <Text
                    style={StyleSheet.flatten([
                      theme.typography.headline6,
                      { color: theme.colors.strong },
                    ])}
                    accessible={true}
                    ellipsizeMode="tail"
                    allowFontScaling={true}
                    textBreakStrategy="highQuality"
                  >
                    Support
                  </Text>
                </View>
              </View>
              <Icon
                style={styles.iconZm}
                size={24}
                color={theme.colors.strong}
                name="Ionicons/ios-arrow-forward"
              />
            </View>
          </Touchable>
          <Divider
            style={styles.dividerD4}
            color={theme.colors.divider}
            height={1}
          />
          <Touchable>
            <View
              style={styles.viewAU}
              hitSlop={{}}
              importantForAccessibility="auto"
              pointerEvents="auto"
              accessible={true}
            >
              <View
                style={styles.viewCj}
                hitSlop={{}}
                pointerEvents="auto"
                importantForAccessibility="auto"
                accessible={true}
              >
                <View
                  style={styles.viewAh}
                  importantForAccessibility="auto"
                  pointerEvents="auto"
                  accessible={true}
                  hitSlop={{}}
                >
                  <Icon
                    style={styles.iconPf}
                    color={theme.colors.strong}
                    name="MaterialIcons/help"
                    size={34}
                  />
                </View>
                <View
                  accessible={true}
                  hitSlop={{}}
                  pointerEvents="auto"
                  importantForAccessibility="auto"
                >
                  <Text
                    style={StyleSheet.flatten([
                      theme.typography.headline6,
                      { color: theme.colors.strong },
                    ])}
                    ellipsizeMode="tail"
                    textBreakStrategy="highQuality"
                    allowFontScaling={true}
                    accessible={true}
                  >
                    FAQ
                  </Text>
                </View>
              </View>
              <Icon
                style={styles.iconWg}
                color={theme.colors.strong}
                name="Ionicons/ios-arrow-forward"
                size={24}
              />
            </View>
          </Touchable>
          <Divider
            style={styles.dividerHy}
            color={theme.colors.divider}
            height={1}
          />
          <Touchable>
            <View
              style={styles.viewPy}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <View
                style={styles.viewGR}
                pointerEvents="auto"
                accessible={true}
                hitSlop={{}}
                importantForAccessibility="auto"
              >
                <View
                  style={styles.viewRk}
                  pointerEvents="auto"
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                >
                  <Icon
                    style={styles.iconFb}
                    name="MaterialCommunityIcons/information"
                    color={theme.colors.strong}
                    size={34}
                  />
                </View>
                <View
                  importantForAccessibility="auto"
                  pointerEvents="auto"
                  accessible={true}
                  hitSlop={{}}
                >
                  <Text
                    style={StyleSheet.flatten([
                      theme.typography.headline6,
                      { color: theme.colors.strong },
                    ])}
                    textBreakStrategy="highQuality"
                    ellipsizeMode="tail"
                    accessible={true}
                    allowFontScaling={true}
                  >
                    About
                  </Text>
                </View>
              </View>
              <Icon
                style={styles.iconQ7}
                name="Ionicons/ios-arrow-forward"
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </Touchable>
          <Divider
            style={styles.dividerYS}
            color={theme.colors.divider}
            height={1}
          />
        </View>
      </View>
      <View
        style={styles.viewGL}
        hitSlop={{}}
        pointerEvents="auto"
        importantForAccessibility="auto"
        accessible={true}
      >
        <Button
          style={StyleSheet.flatten([
            styles.buttonWD,
            { borderColor: theme.colors.custom_rgba0_0_0_0 },
          ])}
          type="outline"
        >
          Sign Out
        </Button>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  viewJJ: {
    width: 34,
    height: 34,
    marginRight: 14,
    maxWidth: 34,
    maxHeight: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPW: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewG0: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  view48: {
    width: 34,
    height: 34,
    marginRight: 14,
    maxWidth: 34,
    maxHeight: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDd: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  viewAg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  viewAR: {
    maxHeight: 34,
    maxWidth: 34,
    width: 34,
    height: 34,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPk: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  viewPf: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  viewAh: {
    marginRight: 14,
    maxHeight: 34,
    maxWidth: 34,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCj: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    maxWidth: '80%',
  },
  viewAU: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  viewRk: {
    height: 34,
    marginRight: 14,
    maxHeight: 34,
    maxWidth: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewGR: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  viewPy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  buttonWD: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    alignContent: 'center',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  scrollViewSd: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  textWr: {
    textAlign: 'center',
    marginBottom: 6,
  },
  viewBv: {
    paddingBottom: 24,
    paddingTop: 44,
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: 'center',
  },
  iconZ1: {
    width: 40,
    height: 40,
    maxWidth: 40,
    maxHeight: 40,
  },
  iconKK: {
    height: 40,
    width: 40,
    maxWidth: 40,
    maxHeight: 40,
  },
  iconO7: {
    width: 40,
    maxWidth: 40,
    maxHeight: 40,
    height: 40,
  },
  iconPf: {
    height: 40,
    maxHeight: 40,
    width: 40,
    maxWidth: 40,
  },
  iconFb: {
    maxHeight: 40,
    width: 40,
    maxWidth: 40,
    height: 40,
  },
  viewDo: {
    paddingLeft: 32,
    paddingBottom: 14,
    paddingTop: 14,
    paddingRight: 32,
  },
  viewGL: {
    marginTop: 44,
    paddingTop: 14,
    paddingBottom: 34,
    paddingRight: 32,
    paddingLeft: 32,
    alignItems: 'center',
  },
  iconTx: {
    width: 24,
    height: 24,
  },
  dividerAp: {
    height: 1,
  },
  iconWe: {
    height: 24,
    width: 24,
  },
  iconZm: {
    width: 24,
    height: 24,
  },
  iconWg: {
    width: 24,
    height: 24,
  },
  iconQ7: {
    height: 24,
    width: 24,
  },
  dividerOH: {
    height: 1,
  },
  dividerD4: {
    height: 1,
  },
  dividerHy: {
    height: 1,
  },
  dividerYS: {
    height: 1,
  },
});
export default withTheme(Settings);