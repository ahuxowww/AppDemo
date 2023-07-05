import axios from "axios";

export function fetchLoginData() {
  return axios({
    method: "get",
    url: "https://62d8ce909088313935951ab9.mockapi.io/api/test/blogs",
  });
}
