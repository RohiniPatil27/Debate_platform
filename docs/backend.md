# Backend Directory Structure

The `backend` directory consists of the following folders and files:

```
/backend
├── public/          # Public assets
├── src/             # Source code
├── .env             # Environment variables (not committed to Git)
├── .env.sample      # Sample environment variables
├── .gitignore       # Specifies files to be ignored by Git
├── .prettierignore  # Specifies files to be ignored by Prettier
├── .prettierrc      # Prettier configuration
├── package-lock.json # Lockfile for dependencies
├── package.json     # Dependencies and scripts for the backend
```

# Source (src) Directory Structure

The `src` directory contains the core logic for the backend application.

```
/src
├── configs/        # Configuration files
├── controllers/    # Business logic for different API endpoints
├── middlewares/    # Middleware functions
├── models/         # Mongoose models
├── routers/        # Express route handlers
├── utils/          # Utility functions and helpers
├── index.js        # Entry point, initializes server and database
```

# Configs Folder

The `configs` folder contains configuration files for different aspects of the application:

```
/configs
├── app.config.js       # General application settings
├── database.config.js  # MongoDB connection setup
├── email.config.js     # Email service configuration
├── server.config.js    # Server-specific settings
```

# Controllers Folder

The `controllers` folder contains functions that handle business logic for API requests:

```
/controllers
├── room.controllers.js # Handles room-related operations
├── tag.controllers.js  # Handles tag-related operations
├── user.controllers.js # Handles user-related operations
```

# Middlewares Folder

The `middlewares` folder contains Express middleware functions:

```
/middlewares
├── auth.middlewares.js  # Authentication and authorization logic
├── multer.middlewares.js # File upload handling with Multer
```

# Models Folder

The `models` folder contains Mongoose schemas for database collections:

```
/models
├── likeDisLike.model.js # Model for likes and dislikes
├── likedRoom.model.js   # Model for rooms liked by users
├── message.model.js     # Model for storing messages
├── room.model.js        # Model for debate rooms
├── tag.model.js         # Model for tags associated with debates
├── user.model.js        # Model for user data
```

# Routers Folder

The `routers` folder defines API endpoints for different resources:

```
/routers
├── room.routes.js # Routes for room operations
├── tag.routes.js  # Routes for tag operations
├── user.routes.js # Routes for user operations
```

# Utils Folder

The `utils` folder contains helper functions for various tasks:

```
/utils
├── apiError.js        # Handles API error responses
├── apiResponse.js     # Standard API response format
├── asyncHandler.js    # Wrapper for handling async errors
├── generateToken.js   # Generates authentication tokens
├── getModelByName.js  # Retrieves Mongoose models dynamically
├── socket.js          # Handles WebSocket connections
├── validators.js      # Input validation functions
```

# Index.js (Main Entry Point)

The `index.js` file is the starting point of the backend application. It is responsible for initializing the server and connecting to the database. This file also loads environment variables.
