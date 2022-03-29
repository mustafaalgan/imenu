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


  const dataToken = async () => {

    await fetch(
      "https://authenticationcorewebapi20220215151416.azurewebsites.net/login",
      {
         method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          userName: "mbilen",
          password: "1234" 
        }),
      }
    )
      .then((response) => response.text()).
      then((responseText) => {
        if (responseText != "") {
          setToken(JSON.stringify(responseText).slice(3, -3));
          console.log(token);
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        console.log("Hata : ", error);
      });
  };
  const dataGetAll = () => {
    fetch(
      "https://authenticationcorewebapi20220215151416.azurewebsites.net/getAll",
      {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((responseText) => {
        console.clear();
        const k = JSON.parse(responseText);
        setSetKitapList(k);
        Object.keys(k).map((key, i) => console.log(k[key]));
      })
      .catch((error) => {
        console.log("Get All Books kısmında hata", error);
      });
  };
  const dataCreate = () => {
    fetch(
      "https://authenticationcorewebapi20220215151416.azurewebsites.net/create",
      {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: author,
          title: title,
          rating: rating,
        }),
      }
    )
      .then((response) => response.text())
      .then((responseText) => {
        console.log(JSON.parse(responseText));
      })
      .catch((error) => {
        console.log("Add Book Kısmında Hata: ", error);
      });
  };
  const dataUpdate = () => {
    fetch(
      "https://authenticationcorewebapi20220215151416.azurewebsites.net/update",
      {
        method: "PUT",
        headers: {
          authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: updateId,
          author: author,
          title: title,
          rating: rating,
        }),
      }
    )
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText);
        dataGetAll();
      })
      .catch((error) => {
        console.log("dataUpdate Kısmında Hata: ", error);
      });
  };
  const dataDelete = (bookId) => {
    fetch(
      "https://authenticationcorewebapi20220215151416.azurewebsites.net/delete" +
      "?id=" +
      bookId,
      {
        method: "DELETE",
        headers: {
          authorization: "Bearer " + token,

          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((responseText) => {
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
