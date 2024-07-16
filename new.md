Big Basket Application (MERN Stack) Full Stack Application
-------------------------------------------------------

Server side Configuration (Express, MongoDB / mongoose)
----------------------------------------------
Modules : express, mongoose, cors, dotenv

npm install express mongoose cors dotenv

DB Design
-----------
Database -> big-basket -> MongoDB ->  mongodb://127.0.0.1:27017/big-basket
Table -> product
Fields -> 
	name : string, 
	image:string, 
	price:number, 
	qty:number, 
	info:string, 
	created: date


Rest API (CRUD Operations with products)
-------------------------
1) Get All Products
	URL -> http://127.0.0.1:5000/api/products
	Method -> GET
	Fields ->  no-fields
	
2) Get single Products
	URL -> http://127.0.0.1:5000/api/products/:id
	Method -> GET
	Fields ->  productId
	
3) Create a product
	URL -> http://127.0.0.1:5000/api/products
	Method -> POST
	Fields -> name, image, peice, qty, info

4) Update A product
	URL -> http://127.0.0.1:5000/api/products/:id
	Method -> PUT
	Fields -> name, image, peice, qty, info

5) Delete A Product
	URL -> http://127.0.0.1:5000/api/products/:id
	Method -> DELETE
	Fields -> no-fields





### mongoose connect
--------------------------
here we use javascript ES6 concept of promises
in promises we use then and catch
then -> for successful response
catch -> for error response

//connect to mongodb
mongoose.connect(process.env.MONGO_DB_LOCAL_URL).then((response)=>{
    console.log(`Connected to Mongo DB Successfully.......`);
}).catch((err)=>{
    console.error(err);
    process.exit(1); //stop the node js process if unable to connect to mongodb 
});




Client Side Application Configuration (React.JS) (Class Based)
------------------------------------------------
components : home, product, admin, create-product, update-product
---------------------------------------

Routing - > react-router-dom -> npm install react-router-dom

http -> axios -> npm install axios