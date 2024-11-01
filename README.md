# Sofia Davi - Psychologist Website

A website built with React for Sofia Davi, a psychologist, showcasing her services, biography, articles, and FAQs. The website includes a booking feature through Calendly integration, a quiz that helps users find the most suitable therapy service, and a contact form powered by EmailJS for email submissions.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Future Enhancements](#future-enhancements)
7. [Acknowledgments](#acknowledgments)

---

## Project Overview

This project is a responsive application built with React. It provides comprehensive information about various psychology services, a FAQ section, articles, and an embedded Calendly widget for booking appointments.

## Technologies Used

- **React**: Core library for building the UI components. It manages the overall component-based structure, including:
  - Components like `Biography`, `BurgerMenu`, `ServicePage`, and `ContactForm`.
  - The main routing and conditional rendering of different sections.

- **React Router**: Used for client-side routing, enabling smooth navigation between sections (e.g., biography, services, articles) without full page reloads.
  - Defined in `App.js` to control the different routes (e.g., `/biography`, `/services`).

- **React Scroll**: Provides smooth scrolling effects when navigating between sections on the same page, ensuring a smooth user experience.
  - Implemented in the `Header` and `BurgerMenu` components for single-page navigation.

- **React Hooks (useState, useEffect)**: Manage component state and lifecycle without using class components. For example:
  - `useState` manages the open/close state of the burger menu and the active section in `Header`.
  - `useEffect` handles side effects like adjusting the page title, managing event listeners, and scrolling to sections based on location.

- **EmailJS**: Manages email submissions from the contact form, allowing for direct email communication without a server.
  - Configured in the `ContactForm` component for users to submit contact requests or inquiries.

- **CSS3**: Custom styling for responsive design across different devices, with mobile-specific styles for the burger menu.
  - Styles are organized in `src/styles` for modular, maintainable styling.

- **Calendly**: Embedded widget for direct booking of appointments.
  - Integrated in the `Booking` component, linking directly to Sofia Davi’s Calendly profile.

- **Dynamic Data Loading**

    Some sections, like articles and metadata, are dynamically populated through structured JSON data files located in `src/data`. This approach allows easier management and updating of content without modifying the core components. Metadata for SEO, article contents, and other relevant information are managed in these data files. Examples:

    - Articles: Stored in `articlesData.js`, dynamically imported to the `ArticlePage` component.
    - SEO Metadata: Structured in `metadata.js` and applied across pages using `React Helmet` for dynamic title and meta description tags.

---


## Features

### 1. **Homepage**
   - Welcome page.
   - Smooth navigation to various sections, including biography, articles, and services.

### 2. **Accessibility Options**
 Built-in accessibility features allow users to:
  - Increase or decrease font sizes for better readability.
  - Enable link underlining to improve link visibility, enhancing the experience for visually impaired users.

### 3. **Biography Section**
   - A detailed biography of the psychologist, including a CV download button.

### 4. **Service Dropdown**
   - Expands on hover to list various psychological services.

### 5. **Articles**
   - Contains mental health articles with titles, summaries, and images.
   - Each article links to a dedicated page for in-depth reading.

### 6. **Booking**
   - Calendly integration for appointment scheduling.
   - Embedded widget allows booking directly from the site.

### 7. **Quiz**
   - Interactive quiz with results based on user responses.
   - Provides service recommendations based on answers.

### 8. **Responsive Design**
   - Mobile-friendly layout, with a burger menu that collapses and expands.
   - Smoothly toggles submenus on mobile, optimizing for smaller screens.

### 9. **FAQ Section**
   - Includes a "See More/Less" toggle button, visible for mobile users.
   - FAQ content dynamically adjusts for mobile and desktop users.

### 10. **Contact Form with EmailJS**
   - The contact form is linked with EmailJS, enabling direct email submissions from users.
   - Integrated in the `ContactForm` component to securely send user messages to a designated email address.

### 11. **SEO Optimization**
   - Unique metadata for each page or section.
   - Ensures better search engine visibility for each section and page.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vtmag/sofia-davi-react.git
   cd sofia-davi

2. **Install dependencies**:

    Ensure you’re in the project directory, then install the necessary dependencies:
    ```bash
    npm install

3. **Run the website locally**

    To start the development server, make sure you’re in the project directory and run the following command:
    ```bash
    npm start


## Usage

This application provides an interactive, user-friendly portfolio site for a psychologist, allowing visitors to explore services, articles, and background information, and to book appointments via **Calendly** integration. The main features include:

- **Service Navigation**: Easily browse services, read detailed descriptions, and explore information tailored to individual therapy needs.
- **Accessibility Features**: The site provides built-in options for text resizing and link underlining to enhance readability and accessibility for users with visual impairments.
- **FAQ and Articles**: Dynamic FAQ and article sections offer valuable insights, answering frequently asked questions and providing relevant psychological information.
- **Booking**: A seamless integration with **Calendly** enables clients to schedule appointments directly from the website.
- **Contact Form**: Powered by **EmailJS**, the contact form allows for secure, direct communication with the psychologist.
- **Cookie Policy**: The site features a cookie policy to ensure compliance with data privacy regulations.

## Future Enhancements

Here are potential future improvements to enhance the application:

- **Blog Integration**: Adding a CMS-based blog system (e.g., Contentful, Strapi) for easy content management by non-developers.
- **User Authentication**: Allowing clients to create accounts, view appointment history, and manage their profiles.
- **Additional Accessibility Options**: Expanding accessibility settings to include options like high-contrast mode, screen reader support, and keyboard navigation for full compliance with WCAG standards.

## Acknowledgments

- **React**: The primary framework for building this application's front end.
- **EmailJS**: For handling the seamless integration of the contact form, allowing direct and secure messaging without a backend server.
- **React-Scroll**: For smooth in-app navigation to specific sections.
- **Calendly**: Embedded scheduling functionality for easy client booking.
