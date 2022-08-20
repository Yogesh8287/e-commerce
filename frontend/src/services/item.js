import axios from "axios";

const API_URL = "http://localhost:5000/items";

class ItemService {
  async getItemById(id) {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  }
  async getItems() {
    const { data } = await axios.get(API_URL);
    return data;
  }

  async createItem(item) {
    const { data } = await axios.post(API_URL, item);
    return data;
  }

  async updateItem(id, item) {
    const { data } = await axios.put(`${API_URL}/${id}`, item);
    return data;
  }

  async deleteItem(id) {
    const { data } = await axios.delete(`${API_URL}/${id}`);
    return data;
  }
}

export default new ItemService();
