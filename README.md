
# Giphy + React Native

Simple GIFs app with search functionality, pagination with infinite scroll, and smooth loading of gifs.

## Get Started

If you have not yet installed React Native, you can use [this tutorial](https://facebook.github.io/react-native/docs/getting-started.html).

Use ```git clone``` to get project. Then go to the root folder of project and install all node modules using ```npm install``` or ```yarn``` command.

## API Key

You need to get API key from [GIPHY Developers](https://developers.giphy.com/docs/api#quick-start-guide)  and you will need to add value of `API_KEY` inside your `root/src/constants/keys.js` file

(NOTE: I already added developer key)

### Run on Android

1. You have to connect hardware device using [ADB](https://developer.android.com/studio/command-line/adb.html) or run [emulator](https://developer.android.com/studio/run/emulator-commandline.html).
2. Invoke ```yarn android``` command.

### Run on iOS

1. You have to get  [Xcode](https://developer.apple.com/xcode/) installed on your machine.
2. Invoke ```yarn ios``` command.

### Build for Android
- For APK, Invoke ```yarn android-apk``` command.
- For Bundle, Invoke ```yarn android-bundle``` command.

(NOTE: sample keystore and it's credentials are already configured. if you want to change it you can generate new keystore inside ```root/android/app/``` and update ```gradle.properties``` inside ```root/android/```)


### Library used
- [React Query](https://react-query.tanstack.com/)
- [Axios](https://axios-http.com/)
- [@react-native-community/netinfo](https://github.com/react-native-netinfo/react-native-netinfo)


