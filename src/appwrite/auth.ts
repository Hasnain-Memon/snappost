import {Client, Account, ID} from "appwrite";
import conf from "../conf/conf";


class AuthService {
  client = new Client();
  account;

  constructor(){
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }


  async createAccount({email, password, name}) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // call login function here
        this.login({email, password});
        return userAccount;
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Error while creating account:", error);
      throw error;
    }
  }

  async login({email, password}) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Error while logging user:", error);
      throw error;
    }
  }

  async getCurrentUser(){
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Error while getting current user:", error);
      throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Error while logging out user:", error);
      throw error;
    }
  }

}

const authService = new AuthService();

export default authService;