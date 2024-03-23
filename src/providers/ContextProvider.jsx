"use client"
import { useQuery } from "@tanstack/react-query";
import React, { createContext } from "react";
import { getProfileInfo } from "../../apiRoutes/services";

export const ProfileContext = createContext();

const ContextProvider = ({ children }) => {

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfileInfo(),
  });
  console.log(profile)

  return <ProfileContext.Provider value={{ profile }}>{children}</ProfileContext.Provider>;
};

export default ContextProvider;
