# Global Givers

## Project Overview

Global Givers is a digital platform designed to connect individuals and organizations, enabling them to collaborate and contribute to meaningful causes and social impact initiatives. The platform focuses on facilitating charitable giving, volunteer engagement, and awareness-building for a diverse range of non-profit organizations and community projects worldwide.

### Mission Statement

"Empowering change, one click at a time." PhilanthroLink is dedicated to empowering individuals to make a positive impact through accessible and streamlined options for giving, volunteering, and community involvement. Our commitment is to provide meaningful change and collective action in the pursuit of a better world.

## Features

### Key Features

1. **Organization Profiles:**
   - Dedicated profiles for NGOs showcasing mission, projects, impact stories, financial transparency metrics, and contact information.

2. **Donation Facilitation:**
   - Secure payment processing with multiple payment methods.
   - Recurring donation options for ongoing support.

3. **Volunteer Opportunities:**
   - Listings with details such as location, date/time, required skills, and volunteer roles.
   - Registration, scheduling, feedback, and testimonials.

4. **Event Updates:**
   - Listings with details such as date, time, location, organizer, and event description.
   - RSVP and ticketing options for event participation.
   - Event notifications and reminders.

### User Roles

1. **Admin:**
   - Manage user accounts, organization profiles, donations, volunteer opportunities, and event listings.
   - Moderate content to ensure platform integrity.

2. **Donors:**
   - Create profiles, browse organizations, make donations, sign up for volunteer opportunities, and receive updates on events.

3. **Organizations:**
   - Create profiles, showcase work, list fundraising events, recruit volunteers, and track donations.

## Additional Features

1. **Social Sharing:**
   - Enable users to share organization profiles, fundraising events, volunteer opportunities, and donation campaigns on social media platforms.

2. **Impact Stories and Testimonials:**
   - Feature compelling stories, testimonials, and case studies showcasing the transformative impact of donations and volunteer efforts.

3. **Impact Metrics:**
   - Provide quantitative data on the impact of donations and volunteer efforts through charts, graphs, and infographics.

4. **Personalized Recommendations (Optional):**
   - Use machine learning algorithms to analyze user behavior and provide personalized recommendations for organizations, events, and volunteer opportunities.

## Implementation Technologies

### Frontend

- Utilize frontend frameworks like ReactJS or AngularJS for a responsive and intuitive user interface.

### Backend

- Build the backend infrastructure using Node.js with Express.js framework.
- Use MongoDB or another suitable database solution to store organization profiles, donation records, and event data.

### Authentication and Authorization

- Implement authentication mechanisms using JWT or OAuth for secure user authentication and role-based access control.

### Payment Integration

- Integrate payment gateways such as Stripe, PayPal, or Braintree to facilitate secure online donations.

### Location-based Services

- Utilize geolocation APIs or services to provide personalized event updates based on the user's location.

### Notification System

- Implement notification mechanisms (e.g., email, push notifications) to keep users informed about new organizations, events, and updates.

## Getting Started

To get started with the PhilanthroLink platform, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/philanthrolink.git`
2. Install dependencies: `npm install`
3. Configure environmental variables for authentication, payment integration, and other sensitive information.
4. Run the application: `npm start`

## Contributors

- [OMSATYASWAROOP](https://github.com/Omsatyaswaroop29)
- [Rachana Manjunath](https://github.com/RachanaManjunath04)
- [Team Member 2](https://github.com/team-member-2)
- [Team Member 3](https://github.com/team-member-3)

## License

This project is licensed under the [MIT License](LICENSE).

## Technologies Used

- HTML
- Bootstrap 4
- Custom CSS
- JavaScript (for validation)

## Bootstrap Components Used

- Container: To provide a centered and responsive layout.
- Form controls: For input fields and buttons.
- Alert: To display validation error messages.
- Button: To style the login button.
- Grid System: For responsive design.
- Utilities: Various utility classes to enhance styling and layout.
- Navbar : With Bootstrap, a navigation bar can extend or collapse, depending on the screen size.
- Navigation Links:navbar-nav: For the unordered list of navigation links.nav-link: For individual navigation links.active: To mark the active link.dropdown: For dropdown menus.dropdown-menu: For styling the dropdown menu.
- Carousel : A carousel (often called a slider or slideshow) is a component to showcase content (often images) in a rotating fashion, one item at a time.
- Dropdown : A dropdown is an interactive component that allows users to choose one value from a list. When a user clicks the dropdown, it displays a list of choices, and upon selecting one, the list collapses.
- Modal: Used for overlaying content on top of the main view. Elements include- modal,modal-dialog,modal-content,modal-header,modal-title,modal-body,modal-footer.
- Progress bars: Used to represent the progress of tasks. Elements include: progress,progress-bar.
- Cards: Used for displaying content built with flexible container. Elements include:card,card-img-top,card-body,card-title,card-text.
- Jumbotron: This is a lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.
- Accordion: It is a lightweight, extendable, and modular component that provides a way to collapse content sections.
- Accordion Item:Represents a single item in an accordion. Each item consists of a header and a content section.
- Row & Col:Represents the grid system of Bootstrap, allowing you to structure your content in a responsive way.
- Typography:display-4: A typography class for styling the main heading.
- Footer:bg-primary text-white: For styling the footer background with white text. list-unstyled: For styling lists in the footer.

## Bootstrap Classes Used
## General

container & container-fluid

Purpose: To provide a responsive fixed-width or full-width (respectively) container for wrapping site contents.
Usage: The .container class is used to wrap the main content of the page, ensuring it's centered and has consistent horizontal padding.
row

Purpose: Acts as a wrapper for columns, ensuring proper alignment and gutter spacing.
Usage: Used to group sets of columns, mainly within the container for the card display sections.
col-md-6

Purpose: To define column width when the viewport is at the medium breakpoint or larger. Each col-md-6 occupies half the width of its container.
Usage: Used for the individual cards to ensure they stack in two columns on medium-sized screens.
mb-4 & mt-5

Purpose: Provides margins to elements.
Usage: Added to elements for spacing. For instance, mb-4 is used to give a bottom margin to cards, and mt-5 is used for top margin in containers and the footer.
navbar, navbar-expand-lg, navbar-dark, navbar-brand, and related navbar classes

Purpose: Bootstrap classes for styling and controlling the behavior of navigation bars.
Usage: Used to create a responsive navigation bar at the top of the pages.
carousel and related classes

Purpose: Classes to implement a responsive slider or carousel of images.
Usage: Used on the landing page to showcase various images with captions.
card, card-img-top, card-body, and card-title

Purpose: Bootstrap classes used to style different parts of a card.
Usage: Used to style and structure the individual cards showcasing different talents on the landing page.
bg-primary & text-white

Purpose: To set the background color to the primary theme color and set the text color to white, respectively.
Usage: Applied to the footer and navbar for styling.
list-unstyled

Purpose: Removes default list styles and padding/margin.
Usage: Used on the ul elements in the footer to remove bullet points and default padding/margin.

Navbar: Defines the navbar.
Usage- Added to the navigation section on the landing page.

Navbar-brand: Styles the brand/logo.
Usage- Added to the navigation section on the landing page.

Navbar-toggler: Styles the button that appears on smaller screens to toggle the navbar content.
Usage- Added to the navigation section on the landing page.

Dropdown-toggle: Used on an element (usually a button) that toggles the dropdown.
Usage- Added to the navigation section for providing the list of profession.

Dropdown-menu: Wraps the dropdown items.
Usage- Added to the navigation section for providing the list of profession.

Dropdown-item: Styles each item inside the dropdown menu.
Usage- Added to the navigation section for providing the list of profession.

Carousel-inner: Wraps all the slides.
Usage- Added to landing page to display multiple images.

Carousel-item: Styles each individual slide/item.
Usage- Added to landing page to display multiple images which styles individual slides.

Carousel-indicators: Contains the slide indicators (little dots).
Usage- Added to landing page to display multiple images.

Card-img-top: Places an image at the top of the card.

Card-body: Container for the main content of the card.

Card-title: Styles the title inside the card.

Card-text: Styles the text inside the card.

Modal-dialog: Acts as a wrapper for the modal content.

Modal-content: Contains the actual modal content, including the header, body, and footer.

Modal-header: Contains the header content of the modal.

Modal-title: Represents the title of the modal.

Modal-body: Contains the main content of the modal.

Modal-footer: Contains the footer content of the modal.

Progress: Container for the progress bar component.

Progress-bar: Represents the actual bar of the progress component.

text-center: Centers the inner content of an element horizontally.

bg-primary: Applies the primary theme color as the background color.

text-white: Makes the text color white.

display-4: Provides a large, display heading size.

accordion-collapse: The container for the collapsible content of an accordion item.

accordion-body: The content of an accordion item.

border-success: Adds a green border to elements, indicating a positive or successful context.

bg-white: Sets the background color of an element to white.

p-4: Adds padding to all sides of an element, making the content spaced out from its borders.

btn-outline-light: Bootstrap class for a button with a light-colored outline.

btn-warning: Bootstrap class for a button with a warning color.

btn-block: Bootstrap class to make a button fill the full width of its parent container.

col-md-3: Bootstrap class for creating a column with a width of 3 units (out of 12) on medium-sized screens.

text-white: Bootstrap class for setting the text color to white.


## Specific to the Login Page
## login-container

Purpose: Custom class to style the login container.
Usage: Used to set styles specific to the login box, such as width, margin, padding, border, and shadow.
logo

Purpose: Custom class for the logo presentation inside the login box.
Usage: Used to center the logo within the login box.
alert & alert-danger

Purpose: To showcase warning or error messages in a styled manner.
Usage: Used to display an error message for invalid login credentials.
