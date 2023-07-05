import RootNavigator from "./src/RootNavigation";
import {store} from "./src/redux/store";
import { Provider } from "react-redux";
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { NotificationListner, requestUserPermission } from "./src/components/Notification";
import { useEffect } from "react";


const App = () =>  {
  useEffect(() => {
    requestUserPermission();
    NotificationListner();
  },
  []);
  const [fontsLoaded] = useFonts({
    'Nippo-Light': require('./assets/font/Nippo-Light.otf'),
    'Nippo-Medium': require('./assets/font/Nippo-Medium.otf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  
  

  return (   
      <Provider store={store}>
        <StatusBar barStyle = "light-content" 
          hidden = {false} 
          backgroundColor = "#2D3748" 
          translucent = {true}/>
        <RootNavigator />
    </Provider>
  )
}
export default App