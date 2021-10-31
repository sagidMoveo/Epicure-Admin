import axios from "axios";

export enum collection {
  chefs = "chefs",
  resturants = "resturants",
  dishes = "dishes",
}

export interface Chef {
  _id: number;
  name: string;
  image: string;
  description: string;
  resturants: string[];
}
interface Dish {
  name: string;
  price: number;
  ingredients: string[];
  tags: string[];
}

interface Rest {
  name: string;
  image: string;
  dishes: string;
}

const BaseUrl = "http://localhost:8081";

export class ApiClient {
  public async getAllChefs(collection: string) {
    return axios
      .get(BaseUrl + "/api/admin/v1/" + `${collection}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("JWT")}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  }

  public async signIn(email: string, pwd: string) {
    return axios
      .post("http://localhost:8081/api/admin/auth/sign_in", {
        email: email,
        password: pwd,
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
  }
}

const apiClient = new ApiClient();

export { apiClient };
