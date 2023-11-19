import { getAllProducts, getProductId } from "./database";

export class ProductServices {
  static findById(id) {
    return getProductId(id);
  }

  static findAll() {
    return getAllProducts();
  }
}
