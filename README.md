## Forge Platform Interview

### How to start the server
```sh
cd server
yarn install or npm install
yarn start or npm start
```

### How to start the app
```sh
cd app
yarn install or npm install
yarn start or npm start
```

### What you need to do
#### Server
Implement a full CRUD cycle for a todo app

A todo object contains a title and a description
```javascript
{
    title: string,
    description: string
}
```
	
#### App
Make an api request to the server to get all todos objects and provide a textbox to filter todos by title. You can use a table to show all filtered todos.

- Choose any libraries to make the request
- Don't need to worry about styling
- It is not required to implement create, update delete function in the App