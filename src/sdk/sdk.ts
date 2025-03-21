/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Pets } from "./pets.js";
import { Store } from "./store.js";
import { User } from "./user.js";
import { Users } from "./users.js";

export class Petstore extends ClientSDK {
  private _pets?: Pets;
  get pets(): Pets {
    return (this._pets ??= new Pets(this._options));
  }

  private _store?: Store;
  get store(): Store {
    return (this._store ??= new Store(this._options));
  }

  private _user?: User;
  get user(): User {
    return (this._user ??= new User(this._options));
  }

  private _users?: Users;
  get users(): Users {
    return (this._users ??= new Users(this._options));
  }
}
