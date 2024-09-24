import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomTextInput from './CustomTextInput';

function Content() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.highBar}>
        <Text style={styles.backInHighBar}>Back</Text>
        <Text style={styles.contentInHighBar}>Content</Text>
        <Text style={styles.filterInHighBar}>Filter</Text>
      </View>
      <CustomTextInput placeholder='Search' showButton={false} hidenEntry={false} textInputStyles={styles.searchInput} />
      {/* <TextInput style={styles.searchInput} placeholder="Search" /> */}

      <View>
        <View style={styles.headerView}>
            <View style={styles.headerPhoto}></View>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
            <Text style={styles.headerInTime}>8m ago</Text>
        </View>
        <View style={styles.headerView}>
            <View style={styles.headerPhoto}></View>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
            <Text style={styles.headerInTime}>8m ago</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  highBar: {
    width: 343,
    height: 36,
    margin:"auto",
    marginTop: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
  },

  backInHighBar: {
    color: "#5DB075",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
  },

  contentInHighBar: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 36,
    letterSpacing: 0,
    textAlign: "center",
  },

  filterInHighBar: {
    color: "#5DB075",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "right",
  },

  searchInput: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    margin:"auto",
    // marginLeft: 16,
    // marginRight: 16,
    width: 343,
    height: 50,
    marginTop: 20,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    textAlign: "left",
    padding: 16,
    marginBottom:16
  },
  headerPhoto:{
    backgroundColor:"#F6F6F6",
    borderRadius:8,
    width:343,
    height:240,
    margin:"auto",
    marginBottom:8
  },
  header:{
    fontSize:16,
    fontWeight:"600",
    lineHeight:19,
    textAlign:"left",
    marginBottom:8
  },
  headerView:{
    width:345,
    margin:"auto",
    marginBottom:16
  },
  headerInDescription:{
    fontSize:14,
    fontWeight:"400",
    lineHeight:17,
    width:343,
    height:34
  },
  headerInTime:{
    fontWeight:"400",
    lineHeight:17,
    fontSize:14,
    color:"#BDBDBD",
    width:50,
    height:17,
    marginBottom:16,
  },
});

export default Content;