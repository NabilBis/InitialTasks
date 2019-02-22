import {createStackNavigator, createAppContainer} from 'react-navigation';
import FirstView from '../components/FirstView.js';
import SecondView from '../components/SecondView.js';
import ListView from '../components/ListView.js';

const MainNavigator = createStackNavigator({
//  Lista: {screen: ListView},
  Uno: {screen: FirstView},
  Dos: {screen: SecondView},
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
