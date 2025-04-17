# **E-commerce Website (Fake Store - The Stores)**

A modern e-commerce website built with React, Redux, TypeScript, and Vite. The website allows users to browse, favorite, and purchase products. Key features include authentication, cart management, and user profile management.

## **Features**

- **Authentication**: Users can register, log in, and log out.
- **Cart Management**: Users can add, remove, and view items in the cart, with real-time updates to the cart count.
- **Favorites**: Users can mark items as favorites for later viewing.
- **User Profile**: A personalized experience where users can view their account information and log out.
- **Responsive Design**: Fully responsive design, optimized for mobile, tablet, and desktop devices.
- **State Management**: Redux with Thunk middleware for handling side effects (e.g., API calls).
- **API Integration**: Data is fetched from the [FakeStoreAPI](https://fakestoreapi.com).
- **Local Storage**: Cart and favorite items are stored in `localStorage` for persistent data across sessions.
- **HTTP Requests**: Axios is used for making HTTP requests to the API.
- **Optimized Build**: Vite is used as the build tool for faster development and optimized production builds.
- **React Hooks**: Used for state and side effects management, such as fetching data from the API.

## **Tech Stack**

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for handling global app state.
- **Redux Thunk**: Middleware for handling asynchronous actions like API requests.
- **TypeScript**: A superset of JavaScript that provides static typing for better code quality.
- **Vite**: A next-generation build tool optimized for speed.
- **React Router**: For handling routing and navigation within the app.
- **Axios**: Promise-based HTTP client for making requests to the API.
- **FSD (Feature-Sliced Design)**: Architecture pattern to organize features and layers of the app in a scalable way.
- **Local Storage**: For storing cart and favorite items, ensuring persistence even after page refreshes.
- **Lucide Icons**: For scalable, customizable icons in the UI.
- **SCSS**: For styling the components and managing CSS.

## **Getting Started**

To get the project up and running locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/fake-store.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fake-store
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the project:

   ```bash
   npm run dev
   ```

5. Go to [http://localhost:5173](http://localhost:5173) to view the app in action.

## Planned Improvements

- Support for more advanced search filters.
- UI/UX improvements with additional animations and visual effects.

# License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Author

Aleksandr Barabanov

## Contacts

<div>
  <a href="https://www.linkedin.com/in/aleksandr-barabanov/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a> 
  <a href="mailto:barabanov.codes@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/>
  </a>
  <a href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-notifcenter">
    <img src="https://img.shields.io/badge/indeed-003A9B?style=for-the-badge&logo=indeed&logoColor=white" alt="Indeed"/>
  </a>
  <a href="https://www.codewars.com/users/Aleksandr-Barabanov">
    <img src="https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=codewars&logoColor=grey" alt="Codewars"/>
  </a>
</div>

© 2025 Fake Store
