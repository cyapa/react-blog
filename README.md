# React blog app by Chathura Yapa

Blog management tool

### Features

- Blogs
    - [x] Create a new blog
    - [x] Delete a blog
    - [ ] List blogs

- Comments
    - [ ] Add comments to blogs
    - [ ] Delete comments
    - [ ] Display comments in a blog

- Likes
    - [ ] Like/Dislike blogs
    - [ ] Like/Dislike blogs

- Unit Testing
    - [ ] Services
    - [ ] Hooks
    - [ ] Components


## Requirements to run 
- **NPM Version** atleast `6.14.7`
- **[API Server](https://github.com/cyapa/react-blog-api):** The Blog API up and running


## How to run the application in production

Both the App & Server are deployed in **[Heroku](http://www.heroku.com/):** (Currently not deployed in Heroku, Please run the app in local :))

~~App URL : https://react-blog-cyapa.herokuapp.com~~

~~Server API URL: https://react-blog-cyapa-api.herokuapp.com/docs~~



## How to run the application in local machine

1. Clone the Server repo from GitHub and from root directory run `pip install -r requirements.txt` to install the dependancies. 

    Then run `uvicorn main:app --reload` to host the API in local machine. The documentation is available on [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

2. Clone the App repo from Github and in root directory run `yarn` to install the dependancies. 

    Then with `yarn start` The app will run in in [http://ocalhost:3000](http://ocalhost:3000)

3. In order to connect the API with the Server running in local machine, the *API_PREFIX* should be changed in API configuration: [https://github.com/cyapa/react-blog/blob/master/src/services/BlogService.ts](https://github.com/cyapa/react-blog/blob/master/src/services/BlogService.ts) to `http://127.0.0.1:8000`


## Special notes

 - Did not spend too much time providing the perfect User interface with richer stylings
 - The linting on server side is not yet configured
 - KMS is not configured to store secret keys such as database connections


