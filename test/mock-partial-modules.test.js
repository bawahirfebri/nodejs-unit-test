jest.mock('../src/database.js', () => {
    const originalModule = jest.requireActual('../src/database.js')

    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn()
    }
})

import { getAllProducts, getProductId } from "../src/database";
import { ProductServices } from "../src/product-service";

test.failing("mock module getProductById", () => {

  ProductServices.findById(1);
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
