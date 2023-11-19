import { getAllProducts, getProductId } from "../src/database";
import { ProductServices } from "../src/product-service";

jest.mock("../src/database.js");
test("mock module getProductById", () => {
  getProductId.mockImplementation((id) => {
    return {
      id: id,
      name: "Product Mock",
    };
  });

  const product = ProductServices.findById(1);

  expect(product).toEqual({
    id: 1,
    name: 'Product Mock'
  })
});

test('mock module getAllProduct', () => {
    const products = [
        {
            id: 1,
            name: 'Product Mock 1'
        },
        {
            id: 2,
            name: 'Product Mock 2'
        }
    ]

    getAllProducts.mockImplementation(() => {
        return products
    })

    expect(ProductServices.findAll()).toEqual(products)
})
