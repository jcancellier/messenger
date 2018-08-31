import { createStackNavigator } from 'react-navigation';
import { ChatScreen } from '../screens';

const RootNavigator = createStackNavigator({
  Chat: { screen: ChatScreen }
});

export default RootNavigator;