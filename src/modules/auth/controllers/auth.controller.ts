import { useContext } from "react";
import { AuthViewModel } from "../view-models/auth-view-model";
import { RegisterDTO, LoginDTO, AuthResponse } from "../models";
import { ApplicationSettings } from "@nativescript/core";
import { useState } from "react";
import { AuthContext } from '../contexts/auth';

export const useAuthController = ({
  route,
  navigation
}) => {

  const [isLoading, setLoading] = useState(false);
  const context = useContext(AuthContext);

  /**
   * Register a new user
   * @async
   * @param {RegisterDTO} data - The user data
   * @returns {Promise<AuthResponse | null>} The user data and session
   */
  const register = async (data: RegisterDTO): Promise<AuthResponse | null> => {
    const viewModel = new AuthViewModel();
    setLoading(true);
    const result = await viewModel.register(data);

    if (result) {
      ApplicationSettings.setString("auth", JSON.stringify(result.data));
      setLoading(false);
      context.register(result.data);
    }

    return result;
  }

  /**
   * Login a user
   * @async
   * @param {LoginDTO} data - The user credentials
   * @returns {Promise<AuthResponse | null>} The user data and session
   */
  const login = async (data: LoginDTO): Promise<AuthResponse | null> => {
    const viewModel = new AuthViewModel();
    setLoading(true);
    const result = await viewModel.login(data);

    if (result) {
      ApplicationSettings.setString("auth", JSON.stringify(result.data));
      setLoading(false);
      context.login(result.data);
    }

    return result;
  }

  return {
    register,
    login,
    isLoading
  };
};
