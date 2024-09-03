import axios from "axios"

export default class ProductService {
  // Load application theme
  async Load_Products() {
    try {
      let response = await axios.get<any>("https://dummyjson.com/products")
      if (response.status) {
        return response.data
      } else {
      }
    } catch (err: any) {
      console.error(err)
    } finally {
      // You can perform cleanup or additional actions here
    }
  }
}

export const productService = new ProductService()
