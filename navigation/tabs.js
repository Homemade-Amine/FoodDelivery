import React from 'react';

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';
import {Home} from '../screens';

const Tab = createBottomTabNavigator();
const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
    var isSelected = accessibilityState.selected
    if(isSelected) {
      return (
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
            <View style={{ flex: 1, backgroundColor: "#fffaf0" }}></View>
            <Svg
                width={75}
                height={61}
                viewBox="0 0 75 61"
            >
            <Path
                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                fill={"#fffaf0"}
            />
            </Svg>
            <View style={{ flex: 1, backgroundColor: "#fffaf0" }}></View>
          </View>
  
          <TouchableOpacity
              style={{
                  top: -22.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#fffaf0"
              }}
              onPress={onPress}
          > 
              {children}
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <TouchableOpacity
          style={{
              flex: 1,
              height: 60,
              backgroundColor: "#fffaf0"
          }}
          activeOpacity={1}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
  
        )
    }
    
  }

const CustomTabBar = (props) => {
    return (
        <View>
            <View
             style= {{
                 position:'absolute',
                 bottom : 0, 
                 left : 0,
                 right : 0,
                 height : 0,
                 backgroundColor : "#fffaf0"
             }}
            />
        
            <BottomTabBar 
                {...props.props}
            />
        </View>
    )
}

const Tabs = () => {

    return(

        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                style:{
                    borderTopWidth:0,
                    backgroundColor : "transparent"
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props = {props}
                />
                
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../assets/cutlery.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? "#000000" : "#008b8b"
                            }}
                        />
                    ),
                    tabBarButton : (props) => (
                        <TabBarCustomButton 
                            {...props}
                        />

                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../assets/search.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? "#000000" : "#008b8b"
                            }}
                        />
                    ),
                    tabBarButton : (props) => (
                        <TabBarCustomButton 
                            {...props}
                        />

                    )
                }}
            />

            <Tab.Screen
                name="Like"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../assets/like.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? "#000000" : "#008b8b"
                            }}
                        />
                    ),
                    tabBarButton : (props) => (
                        <TabBarCustomButton 
                            {...props}
                        />

                    )
                }}
            />

            <Tab.Screen
                name="User"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../assets/user.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? "#000000" : "#008b8b"
                            }}
                        />
                    ),
                    tabBarButton : (props) => (
                        <TabBarCustomButton 
                            {...props}
                        />

                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;