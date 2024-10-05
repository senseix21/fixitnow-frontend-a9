

# FixItNow Frontend

This is the frontend of **FixItNow**, a service request and repair management platform that allows users to easily book repair services, track progress, and manage appointments. This project is built with **Next.js** for the React framework, utilizing **Redux Toolkit** for state management, **Tailwind CSS** for styling, and **React Hook Form** with **Yup** for form validation.

## Features

- **User Authentication:** JWT-based authentication and session management.
- **Form Management:** Efficient form handling with **React Hook Form** and validation using **Yup**.
- **Date Handling:** Date selection and formatting using **react-datepicker** and **date-fns**.
- **Global State Management:** Managed using **Redux Toolkit** with persistence via **redux-persist**.
- **API Integration:** Seamless API requests using **Axios** for service interactions.
- **Responsive Design:** Built with **TailwindCSS** and **DaisyUI** for fully responsive user interfaces.

## Technologies Used

- **Next.js (v13.5.5):** Server-side rendering, file-based routing, and optimized build system.
- **React (v18):** Component-based front-end framework.
- **Redux Toolkit (v1.9.7):** State management tool with simplified syntax.
- **Tailwind CSS (v3):** Utility-first CSS framework.
- **DaisyUI (v3.9.3):** Tailwind CSS component library.
- **Axios (v1.5.1):** Promise-based HTTP client for the browser and Node.js.
- **JWT Decode (v3.1.2):** Decoding JSON Web Tokens to manage user sessions.
- **Yup (v1.3.2):** Schema builder for value parsing and validation.

## Getting Started

### Prerequisites

Before running this project, ensure that you have the following installed:

- **Node.js** (v16.13.0 or higher)
- **npm** (v8 or higher) or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/fixitnow-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fixitnow-frontend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Environment Variables

Create a `.env.local` file in the root of the project, and add the following environment variables:

```bash
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_JWT_SECRET=your_jwt_secret
```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build for Production

To create an optimized build for production, run:

```bash
npm run build
```

Start the production server using:

```bash
npm run start
```

### Linting

To check for code quality and enforce coding standards, run:

```bash
npm run lint
```

## Project Structure

```bash
fixitnow-frontend/
├── components/    # Reusable React components
├── pages/         # Next.js pages (file-based routing)
├── public/        # Public assets such as images
├── styles/        # Tailwind and custom CSS styles
├── store/         # Redux store and slices
├── utils/         # Helper functions and utilities
├── .env.local     # Environment variables
├── package.json   # Project dependencies and scripts
└── README.md      # Project documentation
```

## Scripts

- **dev:** Runs the development server.
- **build:** Builds the project for production.
- **start:** Starts the production server.
- **lint:** Runs ESLint to check for code quality issues.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added some feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Contact

For any questions or inquiries, feel free to contact us at **support@fixitnow.com**.

---

This README adheres to industry standards and covers important aspects of the project for developers and collaborators. You can customize it further as needed.
