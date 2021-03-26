import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import Login from './screens/Login';

export default class App extends React.Component {
  
  render()
  {
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory: ReadStoryScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
})

const SwitchNavigator = createSwitchNavigator({
  Login: {screen: Login},
  TabNavigator: {screen: TabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator);

