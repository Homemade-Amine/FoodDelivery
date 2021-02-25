import React from 'react'
import { 
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions
} from "react-native";


const { width, height } = Dimensions.get("window");


const Home = ({ navigation }) => {


    const initialCurrentLocation = {
        streetName: "Paris",
        gps: {
            latitude: 48.856614,
            longitude: 2.3522219
        }
    }
    
    const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: require("../assets/rice.png"),
        },
        {
            id: 2,
            name: "Noodles",
            icon: require("../assets/noodle.png"),
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: require("../assets/hot-dog.png"),
        },
        {
            id: 4,
            name: "Salads",
            icon: require("../assets/salad.png"),
        },
        {
            id: 5,
            name: "Burgers",
            icon: require("../assets/hamburger.png"),
        },
        {
            id: 6,
            name: "Pizza",
            icon: require("../assets/pizza.png"),
        },
        {
            id: 7,
            name: "Snacks",
            icon: require("../assets/snack.png"),
        },
        {
            id: 8,
            name: "Sushi",
            icon: require("../assets/sushi.png"),
        },
        {
            id: 9,
            name: "Desserts",
            icon: require("../assets/donut.png"),
        },
        {
            id: 10,
            name: "Drinks",
            icon: require("../assets/soda.png"),
        },
    
    ]
    
    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3
    
    const restaurantData = [
      {
          id: 1,
          name: "BurgerFood",
          rating: 4.8,
          categories: [5, 7],
          priceRating: affordable,
          addresse : "745 Lincol Pl",
          photo: require("../assets/burger-restaurant.jpeg"),
          duration: "30 - 45 min",
          location: {
              latitude: 1.5347282806345879,
              longitude: 110.35632207358996,
          },
          courier: {
              avatar: require("../assets/avatar-1.png"),
              name: "Amy"
          },
          menu: [
              {
                  menuId: 1,
                  name: "Crispy Chicken Burger",
                  photo: require("../assets/burger1.jpeg"),
                  description: "Burger with crispy chicken, cheese and lettuce",
                  calories: 200,
                  price: 10
              },
              {
                  menuId: 2,
                  name: "Crispy Chicken Burger with Honey Mustard",
                  photo: require("../assets/burger2.jpeg"),
                  description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                  calories: 250,
                  price: 15
              },
              {
                  menuId: 3,
                  name: "Crispy Baked French Fries",
                  photo: require("../assets/burger3.jpeg"),
                  description: "Crispy Baked French Fries",
                  calories: 194,
                  price: 8
              }
          ]
      },
      {
          id: 2,
          name: "Pizza Yolo",
          rating: 4.8,
          categories: [2, 4, 6],
          priceRating: expensive,
          addresse : "745 Lincol Pl",
          photo: require("../assets/pizza-restaurant.jpeg"),
          duration: "15 - 20 min",
          location: {
              latitude: 1.556306570595712,
              longitude: 110.35504616746915,
          },
          courier: {
              avatar: require("../assets/avatar-1.png"),
              name: "Jackson"
          },
          menu: [
              {
                  menuId: 4,
                  name: "Hawaiian Pizza",
                  photo: require("../assets/chicken-burger.png"),
                  description: "Canadian bacon, homemade pizza crust, pizza sauce",
                  calories: 250,
                  price: 15
              },
              {
                  menuId: 5,
                  name: "Tomato & Basil Pizza",
                  photo: require("../assets/chicken-burger.png"),
                  description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                  calories: 250,
                  price: 20
              }
              
          ]
      },
      {
          id: 3,
          name: "Hotdogs Street",
          rating: 4.8,
          categories: [3],
          priceRating: expensive,
          addresse : "745 Lincol Pl",
          photo: require("../assets/hot-dog-restaurant.jpeg"),
          duration: "20 - 25 min",
          location: {
              latitude: 1.5238753474714375,
              longitude: 110.34261833833622,
          },
          courier: {
              avatar: require("../assets/avatar-1.png"),
              name: "James"
          },
          menu: [
              {
                  menuId: 8,
                  name: "Chicago Style Hot Dog",
                  photo: require("../assets/hot-dog.png"),
                  description: "Fresh tomatoes, all beef hot dogs",
                  calories: 100,
                  price: 20
              }
          ]
      },
      {
          id: 4,
          name: "OSushi",
          rating: 4.8,
          categories: [8],
          priceRating: expensive,
          photo: require("../assets/osushi-restaurant.jpeg"),
          duration: "10 - 15 min",
          location: {
              latitude: 1.5578068150528928,
              longitude: 110.35482523764315,
          },
          courier: {
              avatar: require("../assets/avatar-1.png"),
              name: "Ahmad"
          },
          menu: [
              {
                  menuId: 9,
                  name: "Sushi sets",
                  photo: require("../assets/hot-dog.png"),
                  description: "Fresh salmon, sushi rice, fresh juicy avocado",
                  calories: 100,
                  price: 50
              }
          ]
      },
      {
          id: 5,
          name: "ThaiFood",
          rating: 4.8,
          categories: [1, 2],
          priceRating: affordable,
          addresse : "745 Lincol Pl",
          photo: require("../assets/thai-restaurant.jpeg"),
          duration: "15 - 20 min",
          location: {
              latitude: 1.558050496260768,
              longitude: 110.34743759630511,
          },
          courier: {
              avatar: require("../assets/avatar-1.png"),
              name: "Muthu"
          },
          menu: [
              {
                  menuId: 10,
                  name: "Kolo Mee",
                  photo: require("../assets/hot-dog.png"),
                  description: "Noodles with char siu",
                  calories: 200,
                  price: 5
              },
              {
                  menuId: 11,
                  name: "Sarawak Laksa",
                  photo: require("../assets/hot-dog.png"),
                  description: "Vermicelli noodles, cooked prawns",
                  calories: 300,
                  price: 8
              },
              {
                  menuId: 12,
                  name: "Nasi Lemak",
                  photo: require("../assets/hot-dog.png"),
                  description: "A traditional Malay rice dish",
                  calories: 300,
                  price: 8
              },
              {
                  menuId: 13,
                  name: "Nasi Briyani with Mutton",
                  photo: require("../assets/hot-dog.png"),
                  description: "A traditional Indian rice dish with mutton",
                  calories: 300,
                  price: 8
              },
    
          ]
      }
      
    ]
    
    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    function onSelectCategory(category){
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)
        setSelectedCategory(category)

    }

    function getCategoryNameById(id){
        let category = categories.filter(a => a.id == id)
        if(category.length > 0){
            return category[0].name
        }

        return ""
    }


    function renderHeader(){
        return(

        
        <View style= {{flexDirection : 'row', height : 50}}>
            <TouchableOpacity
                style={{
                    width : 50,
                    paddingLeft : 20,
                    justifyContent : 'center'
                }}
            >

                <Image
                    source={require('../assets/nearby.png')}
                    resizeMode ="contain"
                    style={{
                        width : 30,
                        height : 30
                    }}
                >
                
                </Image>

            </TouchableOpacity>
            <View style={{ flex: 1, alignItems : 'center', justifyContent:'center'}}>
            <View
                style={{
                    width : '70%',
                    height : '100%',
                    backgroundColor : "#dcdcdc",
                    alignItems : 'center',
                    justifyContent : 'center',
                    borderRadius : 30,
                    
                }}
            >
                <Text style={{fontSize: 20, lineHeight: 22}}>
                    {currentLocation.streetName}
                </Text>
            </View>
            </View>

            <TouchableOpacity style={{
                width : 50,
                paddingRight : 20,
                justifyContent : 'center'
            }}>
                <Image
                    source={require('../assets/basket.png')}
                    resizeMode="contain"
                    style={{
                        width  :30,
                        height : 30,
                        
                    }}
                />

            </TouchableOpacity>
        </View>
        )}

    
    function renderMainCategories(){

        const renderItem = ({item}) => {
            return (

                <TouchableOpacity
                    style={{
                        padding : 10,
                        paddingBottom : 20,
                        backgroundColor : (selectedCategory?.id == item.id) ? "#ff8c00" : "#ffffff",
                        borderRadius : 10,
                        alignItems : "center",
                        justifyContent : "center",
                        marginRight: 10,

                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View style={{
                        width : 50,
                        height : 50,
                        borderRadius : 25,
                        alignItems : "center",
                        justifyContent : "center",
                        backgroundColor : (selectedCategory?.id == item.id) ? "#ffffff" : "#d3d3d3"
                    }}>
                        <Image
                            source={item.icon}
                            resizeMode = "contain"
                            style={{
                                width : 30,
                                height : 30
                            }}
                        />

                        
                    </View>

                    <Text style={{
                            marginTop : 10,
                            color : (selectedCategory?.id == item.id) ? "#ffffff" : "#000000",
                            fontSize : 12,
                            lineHeight : 22
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{padding : 20}}>
                    <Text style={{fontSize: 30, lineHeight: 36}}>Catégories</Text>
                    <Text style={{fontSize: 30, lineHeight: 36}}>Principales</Text>

                    <FlatList 
                        data= {categories}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => '${item.id}'}
                        renderItem = {renderItem}
                        contentContainerStyle = {{paddingVertical : 20}}
                    />
            </View>
        )
    }

    function renderRestaurantList(){

        const renderItem = ({item}) => (
            <TouchableOpacity
                style={{marginBottom : 20}}
                onPress = {() => navigation.navigate("Restaurant", {

                    item,
                    currentLocation,
                })}
                
            >
                {/*Image*/}
                <View
                    style={{
                        marginBottom : 10
                    }}
                >
                    <Image source ={item.photo}
                    resizeMode = "cover"
                    style={{
                        width : "100%",
                        height : 200,
                        borderRadius : 20
                    }}/>

                    <View 
                    style={{
                        position:'absolute',
                        bottom : 0,
                        height : 50,
                        width : width * 0.3,
                        backgroundColor : "#ffffff",
                        borderTopRightRadius : 20,
                        borderBottomLeftRadius : 20,
                        alignItems : 'center',
                        justifyContent : 'center',

                    }}
                    >
                     <Text style={{fontSize : 18, lineHeight : 22}}>{item.duration}</Text>    
                    </View>    
                </View>

                {/*Restaurant Info*/}
                <Text style={{fontSize : 20, lineHeight : 30}}>{item.name}</Text>
                <View
                    style={{
                        marginTop : 10,
                        flexDirection : 'row'
                    }}
                >

                    <Image
                        source  = {require('../assets/icon-star.png')}
                        style={{
                            height : 20,
                            width : 20,
                            tintColor : "#ff8c00",
                            marginRight : 10,
                        }}

                    />
                    <Text style={{fontSize : 16, lineHeight : 22}}>{item.rating}</Text>

                    {/*Categories*/}
                    <View
                        style={{
                            flexDirection : 'row',
                            marginLeft : 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {

                                return(

                                    <View
                                        style={{flexDirection : 'row'}}
                                        key={categoryId}
                                        
                                    >
                                        <Text style={{fontSize : 20, lineHeight : 22}}>
                                            {getCategoryNameById(categoryId)}</Text>
                                        
                                        <Text style={{fontSize : 20, lineHeight : 22, color : "#a9a9a9"}}> . </Text>

                                    </View>

                                )
                            })
                        }

                        {/*Price*/}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        fontSize : 20,
                                        lineHeight : 22,
                                        color : (priceRating <= item.priceRating) ? "#000000" : "#a9a9a9"
                                    }}
                                >$</Text>
                            ))
                        }


                    </View>
                </View>

            </TouchableOpacity>
        )

        return (

            <FlatList
            
                data={restaurants}
                keyExtractor={item => '${item.id}'}
                renderItem = {renderItem}
                contentContainerStyle = {{
                    paddingHorizontal: 20,
                    paddingBottom : 30
                }}
            
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : "#fffaf0",
    },
    shadow : {
        shadowColor : "#000",
        shadowOffset:{
            width : 0,
            height : 3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
})

export default Home;