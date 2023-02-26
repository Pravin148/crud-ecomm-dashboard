# crud-ecomm-dashboard
Created the fullstack project using the MERN stack technologies.

In this project:

- How to create CRUD endpoint.
- How to use MongoDB and NodeJS for building API.
- How to use MERN technology for development of fullstack webapp.

More about MERN

- It is a collection of technologies that enables faster application development.
- It is a compilation of four different technologies that work together to develop dynamic web apps.
- following are the four technologies for MERN :- M - MongoDB
E - ExpressJS
R - ReactJS
N - NodeJS

More about CRUD 

- CRUD refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete.
- CRUD acronym identifies all of the major functions that are inherent to databases.

### overview

This project is using the following modules:

- React :- Functional component, Hooks, props, Routing
- NodeJS :- express
- MongoDB :- Mongoose



### Endpoints 

#### HTML

|HTTP Method|URL|Description|
|---|---|---|
|`GET`|http://localhost:3000/ | Home page |
|`POST`|http://localhost:3000/add | add product page |
|`PUT`|http://localhost:3000/update/:id | Update product page |
|`POST`|http://localhost:3000/signup | SignUp page |
|`POST`|http://localhost:3000/login | Login page |

#### User Service

|HTTP Method|URL|Description|
|---|---|---|
|`GET`|http://localhost:5000/list | find all products |
|`POST`|http://localhost:5000/signup | signup new user |
|`POST`|http://localhost:5000/login | Login existing user |
|`POST`|http://localhost:5000/add} | create new product |
|`DELETE`|http://localhost:5000/delete/:id | Delete product with ID |
|`GET`|http://localhost:5000/update/:id | find product with ID |
|`PUT`|http://localhost:5000/update/:id | update product with ID |
|`GET`|http://localhost:5000/search/:key | search product with Key |

