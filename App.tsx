import { configure, getStorybookUI } from "@storybook/react-native";

configure(async () => {
  // Since require.context doesn't exist in metro bundler world, we have to
  // manually import files ending in *.stories.js
  require("./stories");
  
  // for import font

  // await Font.loadAsync({
  //   MuseoSans300: require('./components/assets/fonts/museosans_300-webfont.ttf'),
  //   MuseoSans500: require('./components/assets/fonts/museosans_500-webfont.ttf'),
  //   MuseoSans700: require('./components/assets/fonts/museosans_700-webfont.ttf'),
  // });
}, module);

export default getStorybookUI({
  asyncStorage:
    require('@react-native-community/async-storage').default ||
    require('react-native').AsyncStorage ||
    null,
});
