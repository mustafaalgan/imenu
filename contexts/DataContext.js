import React, { useState, createContext } from "react";
import { useNavigation } from "@react-navigation/native";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [token, setToken] = useState("Oturum Henüz Açılmadı");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [kitapList, setSetKitapList] = useState([]);
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [rating, setRating] = useState();
  const [updateId, setupdateId] = useState();
  const [UpdateVisible, setUpdateVisible] = useState(false);
  const [CreateVisible, setCreateVisible] = useState(false);
  const navigation = useNavigation();


  const axios = require('axios');
  const headers = {
    authorization: "Bearer " + token,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const url = "https://authenticationcorewebapi20220215151416.azurewebsites.net";
  const dataToken = () => {

    axios.post(url + '/login', {
      UserName: "mbilen",
      Password: "1234",
    })
      .then(function (response) {
        if (response.status == 200) {
          console.log(response);
          setToken(response.data);
          navigation.navigate("Home");
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  const dataGetAll = () => {


    axios.get(url + "/getAll", { headers })
      .then(function (response) {
        const k = (response.data);
        setSetKitapList(k);
        Object.keys(k).map((key, i) => console.log(k[key]));
      })
      .catch(function (error) {
        console.log(error);
      });



  };
  const dataCreate = () => {

    const createe = {
      author: author,
      title: title,
      rating: rating,
    }

    axios.post(url + "/create", createe, { headers })
      .then(response => response.data.id);

  };
  const dataUpdate = () => {
    const updatee = {
      id: updateId,
      author: author,
      title: title,
      rating: rating,
    }
    axios.put(url + "/update", updatee, { headers })

      .then((response) => {
        console.log(response);
        dataGetAll();
      })
      .catch((error) => {
        console.log("dataUpdate Kısmında Hata: ", error);
      });
  };
  const dataDelete = (bookId) => {
    axios.delete(url + "/delete?id=" + bookId, { headers })

      .then((responseText) => {
        console.log(responseText);

        dataGetAll();
      })
      .catch((error) => {
        console.log("Hata : ", error);
        console.log("Deger: ", bookId);
      });
  };

  return (
    <DataContext.Provider
      value={[
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
        setCreateVisible,
      ]}
    >
      {props.children}
    </DataContext.Provider>
  );
};
