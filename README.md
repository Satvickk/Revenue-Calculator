# Revenue Calculator

Revenue Calculator is a React-based web application that helps users analyze and export financial growth data in a user-friendly interface. It includes features such as growth summaries, revenue calculations, and CSV exports.

## Features

- Display financial growth data in a table format.
- Calculate and display total revenue and average annual growth.
- Export data to CSV files with proper Unicode support.
- Interactive UI with Toast notifications for better user experience.
- Form validation using Formik and Yup.
- Fully responsive design with TailwindCSS styling.
- Data visualization using Chart.js.

---

## Installation

To set up and run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/revenue-calculator.git
   cd revenue-calculator
   
2. Install dependencies:

   ```bash
   npm install

3. Run the development server:

   ```bash
   npm run dev

The application will be available at http://localhost:5173.

## Scripts

- npm run dev: Starts the development server.
- npm run build: Builds the project for production.
- npm run preview: Previews the built production files.
- npm run lint: Lints the codebase using ESLint.


# Technologies Used

## Frontend

- React: Core library for building UI components.
- Redux Toolkit: State management for handling growth data.
- Formik & Yup: Form handling and validation.
- React Toastify: Toast notifications for user interactions.
- Chart.js: Graphical representation of data.

## Styling

- TailwindCSS: Utility-first CSS framework for fast styling.
- react-csv: Library for exporting data to CSV files.

# Dependencies

## Production

- @reduxjs/toolkit: For managing app state.
- chart.js: Data visualization library.
- formik: Simplifies form management.
- react-csv: Enables CSV file export.
- react-toastify: Adds toast notifications.
- yup: Validates form data.

## Development

- vite: Frontend tooling for faster builds.
- eslint: Code linting to ensure consistency.
- tailwindcss: Styling with utility classes.


## Exporting Data to CSV

This app uses react-csv for exporting data. The CSV includes:

- Year
- Revenue Generated (₹)
- Revenue Growth (₹)
- 
Ensure your system or application opening the CSV supports UTF-8 encoding for proper rendering of the Indian Rupee symbol.
