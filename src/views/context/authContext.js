import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../utils/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userData, setUserData] = useState([]);

  const login = (username, password) => {
    setIsLoading(true);

    console.log(username);
    console.log(password);

    username = "nithin@email.com";
    password = "Nithin@123";

    axios
      .post(`${BASE_URL}/api/auth/login`, {
        username: username,
        password: password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.jwt);

        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", userInfo.jwt);
        console.log(userInfo.jwt);
      })
      .catch((e) => {
        console.log("login error " + e);
      });
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);
      setUserToken(userToken);
      setUserInfo(userInfo);
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
    setIsLoading(false);
  };

  const userDetails = () => {
    axios
      .get(`${BASE_URL}/user/v1/api/list-users`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        let userData = res.data;
        console.log(userData);
        setUserData(userData);
      })
      .catch((e) => {
        console.log("user list api fetch error : " + e);
      });
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
