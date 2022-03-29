import React, { useEffect, useContext } from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, BackHandler, Alert, Dimensions } from 'react-native'
const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height
import { DataContext } from '../contexts/DataContext';


const Home = () => {

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Dikkat !', 'Çıkış Yapmak İstediğinize Emin misiniz ?', [
        {
          text: 'Hayır',
          onPress: () => null,
          style: 'hayır',
        },
        { text: 'Evet', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  const [
    dataToken,
    email,
    setEmail,
    password,
    setPassword,
    dataGetAll,
    kitapList,
    setSetKitapList,
    dataDelete,
    author,
    setAuthor,
    title,
    setTitle,
    rating,
    setRating,
    dataCreate,
    UpdateVisible,
    setUpdateVisible,
    updateId,
    setupdateId,
    dataUpdate,
    CreateVisible,
    setCreateVisible,] = useContext(DataContext);


  const getAllBooksFunction = (e) => {
    e.preventDefault();
    dataGetAll();

  };


  useEffect(() => {
    return dataGetAll();
  }, []);


  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {kitapList.map((kitap) => (
          <TouchableOpacity key={kitap.id} style={styles.card}>
            <Text> {kitap.author} </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView >
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  card: {
    justifyContent: "center",
    paddingLeft: heightScreen * 0.02,
    marginTop: heightScreen * 0.02,
    borderRadius: 25,
    width: widthScreen * 0.8,
    height: heightScreen * 0.1,
    backgroundColor: "red"
  },
  scrollView: {
    backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
  text: { fontSize: 25 }
})


