import { API_URL } from "../config/constants";

export function fetchPhonewords(number: string) {
  return fetch(`${API_URL}phoneword?number=${number}`).then((res) => res.json());
}
