import { RegisterDTO, LoginDTO, AuthResponse } from "../models";
import { API_PATH } from "@/config";

export class AuthService {

  /**
   * Register a new user
   * @async
   * @param {RegisterDTO} data - The user data
   * @returns {Promise<AuthResponse>} The user data and session
   */
  async register(data: RegisterDTO): Promise<AuthResponse | null> {
    const PATH = `${API_PATH}/api/auth/register`;

    try {
      const response = await fetch(PATH, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to register user");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);

      return null;
    }
  }

  /**
   * Login a user
   * @async
   * @param {LoginDTO} data - The user credentials
   * @returns {Promise<AuthResponse | null>} The user data and session
   */
  async login(data: LoginDTO): Promise<AuthResponse | null> {
    const PATH = `${API_PATH}/api/auth/login`;

    try {
      const response = await fetch(PATH, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to login user");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);

      return null;
    }
  }
}
