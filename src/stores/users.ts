import { makeObservable, observable, action, computed } from "mobx";
import { makePersistable } from "mobx-persist-store";
// import { get, post, put, remove, validationWithStatus } from "../api/common";
import { ApiService } from "../services";

// import { config } from "../api";

const { get, post, put, remove, validationWithStatus, config } = ApiService;

type UserModel = {
    id: number | string
}

export class Users {
  data: UserModel[] = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      get: action,
      post: action,
      update: action,
      delete: action,
      totalUsers: computed,
    });
    makePersistable(this, {
      name: "users",
      properties: ["data"],
    });
  }

  setUsers(users: UserModel[]) {
    this.data = users;
  }

  addUser(user: UserModel) {
    const find = this.data.find((f) => f.id === user.id);

    if (!find) {
      this.data.push(user);
    }
  }

  removeUser(user: UserModel) {
    this.data = this.data.filter((f: UserModel) => f.id !== user.id);
  }

  get totalUsers() {
    return this.data.length;
  }

  get(pageNumber: number | undefined, pageLimit: number | undefined) {
    return get(
      //   config.users,
      { params: { page: pageNumber, limit: pageLimit } }
      //   null,
      //   validationWithStatus,
      //   (response) => {
      //     if (response.data.data) {
      //       this.setUsers(response.data.data);
      //     }
      //     console.log(response);
      //     return response;
      //   }
    );
  }

  post(data: object) {
    return post(data);
    // return post(config.users, data, null, validationWithStatus, (response) => {
    //   this.addUser(response.data.data);
    //   console.log(response);
    //   return response;
    // });
  }
  update(data: object) {
    return put(data);
    // return put(
    //   `${config.users}/${data.id}`,
    //   data,
    //   null,
    //   validationWithStatus,
    //   (response) => {
    //     if (validationWithStatus.success && response.data.data) {
    //       this.setUsers(response.data.data);
    //     }
    //     console.log(response.data.data);
    //     return response;
    //   }
    // );
  }
  delete(id: number | string) {
    return remove(id);
    // return remove(
    //   `${config.users}/${id}`,
    //   null,
    //   null,
    //   validationWithStatus,
    //   (response) => {
    //     if (validationWithStatus.success && response.data.data) {
    //       this.removeUser(response.data.data);
    //     }
    //     console.log(response.data.data);
    //     return response;
    //   }
    // );
  }
}
