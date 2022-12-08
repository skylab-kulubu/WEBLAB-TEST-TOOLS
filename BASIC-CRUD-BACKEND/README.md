# BASIC CRUD BACKEND
This backend has been created by saddeg21.

It has got some simple functions for basic CRUD operations.

## STRUCTURE
All routes are being created under this main route. This is endpoint for this REST API.
```sh
/api/v1/products
```

## ROUTES

I've created those routes for testing your frontend for basic CRUD Operations.
I used main 4 METHOD for requests.

| ROUTE | METHOD |
| ------ | ------ |
| **/newProduct** | POST |
| **/allProducts** | GET |
| **/:product** | GET |
| **/:product** | PATCH |
| **/:product** | DELETE |

## CONTROLLERS
### newProduct
A new product could be created via using **/newProduct** route.

| FIELD | ATTRIBUTES EXPECTED |
| ------ | ------ |
| **product** | STRING, REQUIRED, UNIQUE, INDEX |
| **imgURL** | STRING,REQUIRED |
| **description** | STRING,REQUIRED |
| **barcode** | NUMBER,REQUIRED |

### getAllProduct
No body expected.
All products are accessible via using **/allProducts** route.

### getProductById
This REST API uses ***product*** field as an index for documents. It doesn't use _id for accessing.
A product is accessible via using **/:product**, which :product is a request parameter.

### updateProduct
This REST API uses ***product*** field as an index for documents. It doesn't use _id for accessing.
Find a product via using product field and change it via giving changes on request body.
A product change could be done via using **/:product**, which :product is a request parameter.

### deleteProduct
This REST API uses ***product*** field as an index for documents. It doesn't use _id for accessing.
Find a product via using product field and delete it.
A product deletion could be done via using **/:product**, which :product is a request parameter.

