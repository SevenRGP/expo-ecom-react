import { Client, Account, ID } from 'appwrite';
import config from '../config/config';

class AppwriteAuth {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  };

  createUser = async ({ email, password, name }) => {
    try {
      const user = await this.account.create(ID.unique(), email, password, name);
      if (user) {
        return this.login({ email, password });
      }
      return null;
    } catch (error) {
    }
  };

  login = async ({ email, password }) => {
    try {
      const user = await this.account.createEmailPasswordSession(email, password);
      return user;
    } catch (error) {
    }
  };

  getCurrentUser = async () => {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
    }

    return null;
  };

  logout = async () => {
    try {
      const user = await this.account.deleteSession('current');
      return user;
    } catch (error) {
    }
  };

};

const appwriteAuth = new AppwriteAuth();

export default appwriteAuth;