import React from 'react'
import { 
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");



const Restaurant = ({route, navigation}) => {

    const scrollX = new Animated.Value(0);
    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);

    React.useEffect(() => {

        let {item, currentLocation} = route.params;

        setRestaurant(item);
        setCurrentLocation(currentLocation);
    })

    function editOrder(action, menuId, price){

        let orderList = orderItems.slice();
        let item = orderList.filter(a => a.menuId == menuId)

        if(action == "+"){
            

            if(item.length > 0){
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            }

            else{
                const newItem = {
                    menuId : menuId,
                    qty : 1,
                    price : price,
                    total : price
                }
    
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        }else{
            
            if(item.length > 0){
                if(item[0]?.qty > 0){
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function getOrderQty(menuId){
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if(orderItem.length > 0){
            return orderItem[0].qty
        }

        return 0
    }

    function getBasketItemCount(){
        let itemCount = orderItems.reduce((a,b) => a + (b.qty || 0), 0)

        return itemCount
    }

    function sumOrder(){
        let total = orderItems.reduce((a,b) => a + (b.total || 0), 0)
        
        return total.toFixed(2)
    }


    function renderHeader(){
        return (
            <View style={{flexDirection : 'row'}}>

                <TouchableOpacity
                    style={{
                        width : 50,
                        paddingLeft : 20,
                        justifyContent : 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source = {require("../assets/back.png")}
                        resizeMode = "contain"
                        style={{
                            width : 30,
                            height : 30
                        }}
                    />
                </TouchableOpacity>

                {/*Restaurant name section*/}
                <View
                    style={{
                        flex : 1,
                        alignItems : 'center',
                        justifyContent : 'center'
                    }}
                >
                    <View
                        style={{
                            height : 50,
                            alignItems : 'center',
                            justifyContent : 'center',
                            paddingHorizontal : 30,
                            borderRadius : 20,
                            backgroundColor : "#EFEFF1"
                        }}
                    >
                        <Text style={{ fontSize : 20, lineHeight : 22 }} > {restaurant?.name} </Text>


                    </View>

                </View>

                <TouchableOpacity style={{
                    width : 50,
                    paddingRight : 20,
                    justifyContent : 'center'
                }}>
                    <Image
                        source = {require("../assets/list.png")}
                        resizeMode = "contain"
                        style={{
                            width : 30,
                            height : 30
                    }}/>
                </TouchableOpacity>
            </View>
        )
    }


    function renderFoodInfo(){
        return(

            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll ={Animated.event([

                    {nativeEvent: {contentOffset: {x : scrollX}}}
                ], {useNativeDriver : false })}
            >
               {
                   restaurant?.menu.map((item, index) => (
                       <View
                        key={'menu-$(index)'}
                        style={{alignItems : 'center'}}
                       >
                           <View style={{height : height * 0.35}}
                           >

                               {/*Food image*/}
                               <Image 
                                    source = {item.photo}
                                    resizeMode = "cover"
                                    style={{
                                        width : width,
                                        height : "100%"
                                    }}
                               />

                               {/*Quantity*/}
                               <View
                                style={{
                                    position:'absolute',
                                    bottom : -20,
                                    width : width,
                                    height : 50,
                                    justifyContent : 'center',
                                    flexDirection : 'row'
                                }}
                               >
                                   <TouchableOpacity style={{
                                       width : 50,
                                       backgroundColor : "#FFFFFF",
                                       alignItems : 'center',
                                       justifyContent : 'center',
                                       borderTopLeftRadius : 25,
                                       borderBottomLeftRadius : 25
                                    }}
                                    onPress={() => editOrder("-", item.menuId, item.price)}
                                   >
                                       <Text style={{fontSize : 30, lineHeight : 36}}>-</Text>
                                   </TouchableOpacity>

                                   <View style={{
                                           width : 50,
                                           backgroundColor : "#FFFFFF",  
                                           alignItems : 'center',
                                           justifyContent : 'center'
                                        }}
                                    >
                                       <Text style={{fontSize : 22, lineHeight : 30}}>{getOrderQty(item.menuId)}</Text>
                                   </View>


                                   <TouchableOpacity style={{
                                       width : 50,
                                       backgroundColor : "#FFFFFF",
                                       alignItems : 'center',
                                       justifyContent : 'center',
                                       borderTopRightRadius : 25,
                                       borderBottomRightRadius : 25,
                                     }}
                                     onPress={() => editOrder("+", item.menuId, item.price)}
                                   >
                                       <Text style={{fontSize : 30, lineHeight : 36}}>+</Text>
                                   </TouchableOpacity>




                               </View>

                           </View>

                           {/*Name & description */}
                         <View
                            style={{
                                width : width,
                                alignItems : 'center',
                                marginTop : 15,
                                paddingHorizontal : 20
                            }}
                         >
                            <Text style={{marginVertical : 10, textAlign : 'center', fontSize : 22, lineHeight : 30}}>{item.name} - {item.price.toFixed(2)}</Text>
                            <Text style={{fontSize : 16, lineHeight : 22}}>{item.description}</Text>
                         </View>

                         {/*Calories*/}
                         <View
                            style = {{
                                flexDirection : 'row',
                                marginTop : 10
                            }} 
                        >
                            <Image
                                source = {require("../assets/fire.png")}
                                style={{
                                    width : 20,
                                    height : 20,
                                    marginRight : 10
                                }}
                            />

                            <Text style={{fontSize : 16, lineHeight: 22}}>{item.calories.toFixed(2)} cal</Text>

                         </View>

                       </View>
                   ))
               } 
            </Animated.ScrollView>
        )
    }

    function renderDots(){

        const dotPosition = Animated.divide(scrollX, width)
        return (
            <View style={{
                height : 30
            }}>
                <View style={{
                    flexDirection : 'row',
                    alignItems : 'center',
                    justifyContent : 'center',
                    height : 20
                }}>

                    {restaurant?.menu.map((item, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange : [index - 1, index, index + 1],
                            outputRange : [0.3, 1, 0.3],
                            extrapolate : "clamp"
                        })

                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange : [8 * 0.8, 10, 8 * 0.8],
                            extrapolate : "clamp"
                        })

                        const dotColor = dotPosition.interpolate({
                            inputRange : [index - 1, index, index + 1],
                            outputRange : ['#898C95', "#FC6D3F", '#898C95'],
                            extrapolate : "clamp"
                        })

                        return (
                            <Animated.View
                                key={'dot-${index}'}
                                opacity = {opacity}
                                style={{
                                    borderRadius : 20,
                                    marginHorizontal : 6,
                                    width : dotSize,
                                    height : dotSize,
                                    backgroundColor : dotColor
                                }}
                            />


                        )


                    })}

                    
                </View>

            </View>

        )
    }


    function renderOrder(){
        return(

            <View>
                {
                    renderDots()
                }
                <View style={{
                    backgroundColor : "#FFFFFF",
                    borderTopLeftRadius : 40,
                    borderTopRightRadius : 40
                }}>

                    <View style={{
                        flexDirection : 'row',
                        justifyContent : 'space-between',
                        paddingVertical : 20,
                        paddingHorizontal : 30,
                        borderBottomColor : "#EFEFF1",
                        borderBottomWidth : 1
                    }}>
                        <Text style={{fontSize : 20, lineHeight : 22}}>{getBasketItemCount()} item(s)  in Cart</Text>
                        <Text style={{fontSize : 20, lineHeight : 22}}>${sumOrder()}</Text>
                    </View>

                    <View
                        style={{
                            flexDirection : 'row',
                            justifyContent : 'space-between',
                            paddingVertical : 20,
                            paddingHorizontal : 30
                        }}
                    >
                        <View
                            style={{
                                flexDirection : 'row'
                            }}
                        >

                            <Image
                                source = {require("../assets/pin.png")}
                                resizeMode = "contain"
                                style={{
                                    width : 20,
                                    height : 20,
                                    tintColor : '#898C95'
                                }}
                            />
                            <Text style={{marginLeft : 20, fontSize : 18, lineHeight : 22}}>Location</Text>
                        </View>

                        <View style={{flexDirection : 'row'}}>
                                <Image 
                                    source = {require("../assets/mastercard.png")}
                                    resizeMode = "contain"
                                    style={{
                                        width : 20,
                                        height : 20,
                                        tintColor : '#898C95'
                                    }}
                                />

                                <Text style={{marginLeft : 20, fontSize : 18, lineHeight : 22}}>8888</Text>
                        </View>
                        
                    </View>


                    {/*Order button*/}
                    <View
                        style={{
                            padding : 20,
                            alignItems : 'center',
                            justifyContent : 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width : width * 0.9,
                                padding : 20,
                                backgroundColor : "#FC6D3F",
                                alignItems : 'center',
                                borderRadius : 20
                            }}
                        >

                            <Text style={{color : "#ffffff", fontSize : 22, lineHeight : 30}}>Order</Text>
                        </TouchableOpacity>

                    </View>
                </View>


            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderFoodInfo()}
            {renderOrder()}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : "#fffaf0"
    }
})

export default Restaurant;