# Chat-API-NestJs

This is a RESTful API built with NestJS and MongoDB that provides book descriptions for a given book title.

## Prerequisites

- Node.js (version 14 or higher)
- MongoDB (version 4.4 or higher)

## Steps

1. Clone the repository:
git clone https://github.com/your-username/Chat-API-NestJs.git


Copy
2. Navigate to the project directory:
`cd Chat-API-NestJs`


Copy
3. Install dependencies:
`npm install`

Copy
4. Set up the environment variables:
- Create a `.env` file in the root directory of the project.
- Add the following environment variables:
  ```
  CHAT_PORT=3000
  CHAT_DB=mongodb://localhost:27017/chat
  CHAT_JWTSECRET=RYkxKuhGkzvIXHLUiMJlFt1P
  ```
5. Start the development server:
`npm run start:dev`


Copy
The API will be accessible at the port you set it in .env file `http://localhost:CHAT_PORT`.
! By default it is 3000. !

## Usage

You can use a tool like Postman or cURL to interact with the API. Here are some example requests:

### Get users by email

GET `/book/chris@gmail.com`


Copy

### Create a new use

POST /users
```
{
"email": "example@gmail.com",
"password": "123456"
}
```


For more detailed information about the API endpoints, please refer to the **API Endpoints** section.

## API Endpoints

| Method | Endpoint   | Description                     |
| ------ | ---------- | ------------------------------- |
| GET    | /users     | Get a list of users             |
| POST   | /users     | Create a new user               |
| GET    | /users/:email| Get user by email             |

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
