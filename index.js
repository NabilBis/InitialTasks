/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FirstView from './src/components/FirstView.js';
import Navigation from './src/navigation/Navigation.js';
import {name as appName} from './app.json';
import ListView from './src/components/ListView.js';

AppRegistry.registerComponent(appName, () => ListView);
