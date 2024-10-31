import { ApplicationSettings } from "@nativescript/core";
import { useState } from "react";

export const useHomeController = ({
  route,
  navigation
}) => {
  const auth = JSON.parse(ApplicationSettings.getString("auth"));
  console.log(auth);
  const [user, setUser] = useState(auth.user);
  const [session, setSession] = useState(auth.session);

  return {
    user,
    session
  };
};
