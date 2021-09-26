/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';

/**
 * Remove comment on the import you want to run
 * 
 * Comment on the other imports that you don't want to run
 */

// import App from './src/Video1/App'
import App from './src/Simple/App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
