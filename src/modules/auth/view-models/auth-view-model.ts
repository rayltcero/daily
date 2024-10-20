import { AuthService } from "../services/auth.service";
import { RegisterDTO, LoginDTO, AuthResponse } from "../models";

export class AuthViewModel {

  private service: AuthService;

  constructor() {
    this.service = new AuthService();
  }

  /**
   * Register a new user
   * @async
   * @param {RegisterDTO} data - The user data
   * @returns {Promise<AuthResponse>} The user data and session
   */
  async register(data: RegisterDTO): Promise<AuthResponse | null> {
    const result = await this.service.register(data);

    return result;
  }

  /**
   * Login a user
   * @async
   * @param {LoginDTO} data - The user credentials
   * @returns {Promise<AuthResponse | null>} The user data and session
   */
  async login(data: LoginDTO): Promise<AuthResponse | null> {
    const result = await this.service.login(data);

    return result;
  }
}
