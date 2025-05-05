# Frontend src Directory Structure

The `src` directory contains the main logic for the frontend application.

```
/src
├── components/    # Reusable UI components
├── layout/        # Layout components for different pages
├── pages/         # Individual pages and views
├── static/        # Static assets like images and CSS
├── store/         # Redux store for state management
├── utils/         # Utility functions and helper files
├── App.jsx        # Main application component
├── main.jsx       # Entry point for rendering the React app
```

# Components Folder

The `components` folder contains reusable UI elements.

```
/components
├── Footer.jsx       # Footer component
├── Header.jsx       # Header component
├── index.jsx        # Central export for components
├── LogoutBtn.jsx    # Logout button component
│
├── form/            # Form-related components
│   ├── Input.jsx    # Input field component
│
├── room/            # Components related to chat rooms
    ├── ChatBox.jsx   # Chat interface
    ├── Header.jsx    # Room-specific header
    ├── Messages.jsx  # Display messages
    ├── Sidebar.jsx   # Room sidebar with participants
```

# Layout Folder

The `layout` folder contains layout components that structure different parts of the application.

```
/layout
├── index.jsx         # Central export for layouts
├── RoomLayout.jsx    # Layout for room-related pages
├── WebsiteLayout.jsx # General layout for the website
```

# Pages Folder

The `pages` folder contains all the main views and sections.

```
/pages
├── index.jsx       # Main entry page
│
├── get-started/    # Authentication and onboarding pages
│   ├── ForgotPassword.jsx         # Reset password page
│   ├── ForgotPasswordRequest.jsx  # Request password reset
│   ├── GetStarted.jsx             # Introduction page
│   ├── Login.jsx                  # Login page
│   ├── Register.jsx               # User registration page
│
├── home/           # Homepage sections
│   ├── CategorySection.jsx # Displays debate categories
│   ├── HeroSection.jsx     # Hero banner section
│   ├── Home.jsx            # Home page component
│   ├── JoinUsSection.jsx   # Call-to-action for joining
│
├── profile/        # User profile section
│   ├── Profile.jsx   # User profile page
│
├── room/           # Debate room section
    ├── Room.jsx      # Room view page
```

# Static Folder

The `static` folder contains static assets such as images and styles.

```
/static
├── css/              # Stylesheets
│   ├── tailwind.config.css  # Tailwind CSS configuration
│
├── images/           # Image assets
    ├── index.jsx     # Image references and imports
    ├── [All image files]
```

# Store Folder

The `store` folder manages global state using Redux.

```
/store
├── slices/           # Redux slices
│   ├── alertSlice.js # Handles alert messages
│   ├── authSlice.js  # Handles authentication state
│
├── index.js         # Combines all slices into a Redux store
```

# Utils Folder

The `utils` folder contains helper functions and utilities.

```
/utils
├── FetchUserData.jsx         # Fetches user data
├── FormValidationSchema.jsx  # Validation rules for forms
├── ProtectedRoute.jsx        # Protects routes based on auth
├── Routes.jsx                # Defines frontend routes
├── Socket.jsx                # Manages WebSocket connections
```

## App.jsx

The `App.jsx` file is the main component that structures the entire frontend application.

## Main.jsx

The `main.jsx` file serves as the entry point, where the React application is initialized and rendered into the DOM.
