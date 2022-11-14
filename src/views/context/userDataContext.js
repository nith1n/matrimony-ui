import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../utils/config";
import { AuthContext } from "./authContext";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const { userToken } = useContext(AuthContext);

  const [userData, setUserData] = useState([]);

  const [branchData, setBranchData] = useState([]);

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

  const branchDetails = () => {
    axios
      .get(`${BASE_URL}/api/v1/branch/list`, {})
      .then((res) => {
        let branchData = res.data;
        console.log(branchData);
        setBranchData(branchData);
      })
      .catch((e) => {
        console.log("branch list api fetch error : " + e);
      });
  };

  return (
    <UserDataContext.Provider value={{ userDetails, userData, branchDetails, branchData }}>
      {children}
    </UserDataContext.Provider>
  );
};
