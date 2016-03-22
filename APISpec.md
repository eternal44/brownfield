# Truu API Specifications
To test api routes, we use both httpie and curl. Examples of these cli commands are documented below.

## Users
### GET /api/users/:userId
- Gets back user information for a specific user id as a json object

`curl -X GET http://localhost:4000/api/users/1`

`http GET http://localhost:4000/api/users/1`

### GET /api/users
- Gets back all user information as a json array with an object for each individual user

`curl -X GET http://localhost:4000/api/users`

`http GET http://localhost:4000/api/users`

### POST /api/users
- Send all user information as a json object
- ** This should only be called through firebase on the client side but for dev, we will enter users in manually.

`curl -X POST -d "email=test@test.com&name=test test" http://localhost:4000/api/users`

`http POST http://localhost:4000/api/users name='test test' email='test@test.com'`

### PUT /api/users/:userId
- Send an object with the keys as the parameter you would like to update with the value as the new value you would like to set
- We send the userId as a parameter in the request

`curl -X PUT -d "email=test@test.com&name=test test" http://localhost:4000/api/users/1`

`http PUT http://localhost:4000/api/users/1 name='test test' email=test@test.com`

## DELETE /api/users/:userId
- Send the id for the user you would like to delete as a parameter in the url

`curl -X DELETE http://localhost:4000/api/users/1`

`http DELETE http://localhost:4000/api/users/1`

** It works so don't use it too much....

## Posts
### GET /api/posts
- Gets back posts that users can swipe through. basically all the posts for the dashboard. will cache on client.

`curl -X GET http://localhost:4000/api/posts`

`http GET http://localhost:4000/api/posts`

### GET /api/posts/:userId
- Gets back all posts that a user has posted

`curl -X GET http://localhost:4000/api/posts/1`

`http GET http://localhost/api/posts/1`

### POST /api/posts
- send all new post information and it will create a new post

`curl -X POST -d "userId=1&photo=some image url&itemName=test item&itemType=test item type&comment=test item test" http://localhost:4000/api/posts`

`http POST http://localhost:4000/api/posts userId=1 photo='some image url' itemName='test item' itemType='test item type' comment='test item test'`

### PUT /api/posts/:postId
- send the post id as a url parameter and all properties that you want to update in the url body

`curl -X PUT -d "photo=new photo url" http://localhost:4000/api/posts/1`

`http PUT http://localhost:4000/api/posts/1 photo='new photo url' comment='new comment'`

### DELETE /api/posts/:postId
- send the post id that you want to delete as a url parameter and deletes the post

`curl -X DELETE http://localhost:4000/api/posts/1`

`http DELETE http://localhost:4000/api/posts/1`