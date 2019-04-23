import React from 'react';
import { Platform, StyleSheet, Text, 
    View, FlatList, TouchableOpacity, 
    Image, SafeAreaView, StatusBar, TouchableHighlight } from 'react-native';
// import ic_menu from '../image/list.png';
import ic_menu from '../image/menu-lines.png';
import Drawer from 'react-native-drawer';
console.disableYellowBox = true;

const menu = [
    { 'title': 'Feed' },
    { 'title': 'Stories' },
    { 'title': 'Activity' },
    { 'title': 'Messages' },
    { 'title': 'Friends' },
]

const menu2 = [
    { 'title': 'Help' },
    { 'title': 'Settings' },
]

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    renderDrawer() {
        // SlideMenu
        return ( 
            <View style={styles.menuContainer}>
            <View style={styles.menuTitleContainer}>
                <TouchableOpacity style={styles.profileImgContainer}>
                    <Image source={{ uri:"https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={styles.profileImg} />
                </TouchableOpacity>
            </View>
                <FlatList
                    style={{ flex: 1.0, marginTop: 80, marginLeft: 50}}
                    data={menu}
                    extraData={this.state}
                    renderItem={({ item, index }) => {
                        return(
                            <TouchableOpacity style={styles.menuTitleContainer}>
                                <Text style={styles.menuTitle}
                                    key={index}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    }} />
                    <FlatList
                    style={{ flex: 1.0, marginTop: 50, marginLeft: 50}}
                    data={menu2}
                    extraData={this.state}
                    renderItem={({ item, index }) => {
                        return(
                            <TouchableOpacity style={styles.menuTitleContainer}>
                                <Text style={styles.menuTitle}
                                    key={index}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    }} />

            </View>
        )
    }

    openDrawer() {
        this.drawer.open();
    }

    closeDrawer() {
        this.drawer.close();
    }

    render() {
        return(
            <SafeAreaView style={styles.safeAreaStyle}>
            {/* // <View> */}
            <StatusBar barStyle = "light-content" backgroundColor = "blue"/>
                <View style={styles.mainContainer}>
                    <Drawer
                        ref={(ref) => this.drawer = ref}
                        content={this.renderDrawer()}
                        type='static'
                        tapToClose={true}
                        openDrawerOffset={0.35}
                        styles={drawerStyles}>
                        {/* //Main View */}
                        <View style={styles.headerContainer}>
                            <View style={styles.menuButton}>
                                <TouchableOpacity
                                    onPress={this.openDrawer.bind(this)}>
                                    <Image style={{ tintColor: 'black', padding: 10 }} source={ic_menu} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.headerTitle}>FEED</Text>
                            <View style={styles.menuButton} />
                        </View>
                    </Drawer>
                </View>
            {/* // </View> */}
            </SafeAreaView>
        )
    }
}

const drawerStyles = {
    drawer: {
        flex: 1.0,
        backgroundColor: '#6f6f77',
        // 3B599B
    },
    main: {
        flex: 1.0,
        backgroundColor: 'white',
    }
}

const styles = {
    mainContainer: {
        flex: 1.0,
        backgroundColor: 'white'
    },
    safeAreaStyle: {
        flex: 1.0,
        paddingTop: 25,
        backgroundColor: 'grey',
    },
    headerContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContect: 'center',
        backgroundColor: 'white',
        elevation   : 2,
        // flex        : 1,
        // margin      : -5,
        // padding     : -10,
        // borderWidth : 2,
        borderColor : '<anything>'
    },
    headerTitle: {
        flex: 1.0,
        textAlign: 'center',
        alignSelf: 'center',
        marginLeft: -18,
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    menuButton: {
        marginLeft: 8,
        marginRight: 8,
        alignSelf: 'center',
        tintColor: 'white'
    },
    menuContainer: {
        flex: 1.0,
        backgroundColor: '#6f6f77',
    },
    menuTitleContainer: {
        alignItem:'center',
        height: 60,
        width:'100%',
        flexDirection:'row',
    },
    menuTitle: {
        width:'100%',
        color: 'white',
        textAlign: 'left',
        fontSize: 17,
        alignSelf:'center',
    },
    profileImgContainer: {
        // alignItem: 'center',
        // alignSelf:'center',
        // height: 80,
        // width: '100%',
        marginLeft: 50,
        marginTop: 80,
        borderRadius: 40,
    },
    profileImg: {
        height: 50,
        width: 50,
        alignItem:'center',
        flexDirection:'row',
        borderRadius: 40,
    },
}