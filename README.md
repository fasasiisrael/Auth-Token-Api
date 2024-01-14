# Tokenization Auth
 Signup and Signin with token











Authentication API Documentation
1. Sign Up
Endpoint: POST /auth/signup
Description: Allows a user to sign up with an email.
Request Body:
json
-----
{
  "email": "user@example.com"
}
Response:
json
-----
{
  "message": "User signed up successfully!",
  "user": {
    "email": "user@example.com"
  }
}
Error Response:
json
-----
{
  "error": "Error message here"
}
2. Login
Endpoint: POST /auth/login
Description: Allows a user to log in with an email.
Request Body:
json
-----
{
  "email": "user@example.com"
}
Response:
json
-----
{
  "token": "JWT_TOKEN_HERE"
}
Error Response:
json
-----
{
  "error": "Error message here"
}
3. Logout
Endpoint: POST /auth/logout
Description: Logs a user out.
Response:
json
-----
{
  "message": "User logged out successfully!"
}
Error Response:
json
-----
{
  "error": "Error message here"
}
Email API Documentation
1. Send Token via Email
Endpoint: POST /mail/send-token
Description: Sends a token to the user's email for authentication.
Request Body:
json
-----
{
  "email": "user@example.com"
}
Response:
json
-----
{
  "message": "Token sent successfully!"
}
Error Response:
json
-----
{
  "error": "Error message here"
}
