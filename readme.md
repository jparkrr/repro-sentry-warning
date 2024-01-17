# Repro sentry warning

`yarn install`
`npx expo start --web`

## The error

```
WARNING in ./node_modules/@sentry/react-native/dist/js/wrapper.js:33:4
export 'TurboModuleRegistry' (imported as 'TurboModuleRegistry') was not found in 'react-native' (possible exports: AccessibilityInfo, ActivityIndicator, Alert, Animated, AppRegistry, AppState, Appearance, BackHandler, Button, CheckBox, Clipboard, DeviceEventEmitter, Dimensions, Easing, FlatList, I18nManager, Image, ImageBackground, InteractionManager, Keyboard, KeyboardAvoidingView, LayoutAnimation, Linking, LogBox, Modal, NativeEventEmitter, NativeModules, PanResponder, Picker, PixelRatio, Platform, Pressable, ProgressBar, RefreshControl, SafeAreaView, ScrollView, SectionList, Share, StatusBar, StyleSheet, Switch, Text, TextInput, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, UIManager, Vibration, View, VirtualizedList, YellowBox, findNodeHandle, processColor, render, unmountComponentAtNode, unstable_createElement, useColorScheme, useLocaleContext, useWindowDimensions)
  31 |
  32 | const RNSentry: Spec | undefined = isTurboModuleEnabled()
> 33 |   ? TurboModuleRegistry.get<Spec>('RNSentry')
     |    ^
  34 |   : NativeModules.RNSentry;
```