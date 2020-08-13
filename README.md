## Forge Platform Interview

### How to start the server
```sh
cd server
yarn install
yarn start
```

### How to start the app
```sh
cd app
yarn install
yarn start
```

### What you need to do
#### Server:
Implement the following routes
- Create a todo object
- Get all todo objects
- Update a todo object
- Delete a todo object

A todo object contains a title and a description
```javascript
{
    title: string,
    description: string
}
```
	
#### App:
Make an api request to the server to get all todos objects and provide a textbox to filter the todo list by title.

You can choose any libraries to make the request. 

You can use a table to show all filtered todos

You don't need to worry about styling

**Remarks: It is not require to implement create, update delete function in the UI. # New Document**