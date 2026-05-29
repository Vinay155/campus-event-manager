# Campus Event Manager API

A RESTful API built using Node.js, Express.js, and MongoDB.

## Features

- Create Event
- View All Events
- View Single Event
- Update Event
- Delete Event

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

```bash
npm install
npm run dev
```

## Postman Collection

The exported Postman collection is available in:

```text
postman/Campus-Event-Manager-Collection.json
```

## Environment Variables

Create a .env file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## API Endpoints

POST /api/events

GET /api/events

GET /api/events/:id

PUT /api/events/:id

DELETE /api/events/:id