# Password Reset Flow - Backend

This is the backend of the password reset flow, implemented using Node.js, Express, and MongoDB.

---

## Features

1. **Forgot Password Endpoint**:
   - Generates a secure token for password reset.
   - Sends a reset link via email using Nodemailer.

2. **Password Reset Endpoint**:
   - Verifies the token and updates the user's password securely.
   - Hashes passwords using bcrypt for security.

3. **Token Expiry**:
   - Tokens expire after 1 hour to prevent misuse.

---

## Tech Stack

- **Node.js**: JavaScript runtime for server-side scripting.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user data and tokens.
- **Mongoose**: ODM for MongoDB schema and queries.
- **bcrypt**: For hashing passwords.
- **nodemailer**: For sending email notifications.

---

## Postman Documantation

https://documenter.getpostman.com/view/39189138/2sAYJAcwy1

---