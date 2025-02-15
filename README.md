# React Dashboard Application

Welcome to my React Dashboard project! This is a modern admin dashboard built with React and Material-UI, featuring customizable themes, a collapsible sidebar, and reusable components. It's designed to be practical, polished, and a showcase of what I can build with React.

![Dashboard](public/assets/images/Dashboard.png)

<a href="https://doms-admin-dashboard.netlify.app/" target="_blank">View demo</a>

## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Pages Added](#pages-added)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Dark and Light Themes**: Easily switch between modes using a custom theme context.
- **Responsive Layout**: Works smoothly across all screen sizes.
- **Collapsible Sidebar**: A clean and customizable navigation menu.
- **Reusable Components**: Modular design for quick scalability.
- **Search and Icons**: Functional search bar and icons for better interactivity.

![Dashboard Demo](public/assets/DarkLightMode.gif)

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure
```
.
├── App.jsx                # Main application logic and routes
├── components/
│   ├── global/
│   │   ├── Topbar.jsx     # The interactive navigation bar
│   │   ├── Sidebar.jsx    # Collapsible sidebar
│   └── Header.jsx         # Reusable header component
├── theme.js               # Theme settings and color tokens
├── index.css              # Global styles
└── public/                # Static assets (e.g., profile images)
```

## Key Files
- **`App.jsx`**: Manages routing and theme context. Additional routes are ready to go—just uncomment or add them.
- **`Sidebar.jsx`**: Handles the collapsible menu, with user profile info included when expanded.
- **`Topbar.jsx`**: Contains theme toggling and useful action icons like notifications and settings.
- **`theme.js`**: All the theme logic and color tokens in one place for easy updates.

## Technologies Used
- **React**: For building the core of the application.
- **Material-UI (MUI)**: Provides sleek, modern components.
- **React Router**: Manages routing between different pages.
- **React Pro Sidebar**: Makes building and styling the sidebar much simpler.

## Usage
### Adding a New Page
1. Add a route in `App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
2. Create a new file (e.g., `NewPage.jsx`) for your component.
3. Add a corresponding menu item in `Sidebar.jsx`.

### Customizing the Sidebar
1. Add a menu item:
   ```jsx
   <MenuItem icon={<NewIcon />}>New Section</MenuItem>
   ```
2. Link it to a new route using `react-router-dom`.

## Components Overview
### **Topbar**
The Topbar includes:
- A search bar with Material-UI's `InputBase`.
- Theme toggling with icons for dark/light mode.
- Interactive action icons for notifications, settings, and profile management.

### **Sidebar**
The sidebar:
- Collapses/expands for better screen utilization.
- Includes customizable menu items and a user profile section.
- Uses `react-pro-sidebar` for a flexible and functional design.

#### Sidebar Updates
The Sidebar has been improved with a structured menu and new features:

### Key Features:
- **Reusable Menu Items**: Menu items are built using a reusable `Item` component, making the code cleaner and easier to manage.
- **Organized Sections**: The menu is divided into categories for easier navigation:
  - **Data**: Manage Team, Contacts Information, and Invoices Balances.
  - **Pages**: Profile Form, Calendar, and FAQ Page.
  - **Charts**: Bar Chart, Pie Chart, Line Chart, and Geography Chart.
- **Icons and Links**: Each menu item has an icon from Material-UI for a polished look.

![Menu Items](public/assets/images/MenuItems.png)

#### Example:
Here’s how a section looks in the Sidebar:
```jsx
<Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
  Data
</Typography>
<Item
  title="Manage Team"
  to="/team"
  icon={<PeopleOutlinedIcon />}
  selected={selected}
  setSelected={setSelected}
/>
```

## Pages Added
The application now includes several new pages, each designed for specific functionality and styled with Material-UI components.

### 1. **Team Page**
![Team Page](public/assets/images/TeamPage.png)
- **Purpose**: Manage team members by displaying details like ID, name, age, phone number, email, and access level.
- **Features**: Uses `DataGrid` for a clean and interactive table view, with access level badges and color-coded styling for cells and headers.

#### Code Highlights:
```jsx
<DataGrid
  rows={mockDataTeam}
  columns={columns}
  sx={{
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.blueAccent[700],
    },
  }}
/>
```

### 2. **Invoices Page**
![Invoices Page](public/assets/images/InvoicesPage.png)
- **Purpose**: Display a list of invoice balances with details like ID, name, phone, email, cost, and date.
- **Features**: Includes a checkbox selection for rows and custom rendering for the cost column with color highlights.

#### Code Highlights:
```jsx
<DataGrid
  checkboxSelection
  rows={mockDataInvoices}
  columns={columns}
  sx={{
    "& .MuiDataGrid-root": { border: "none" },
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: colors.blueAccent[700],
    },
  }}
/>
```

### 3. **Form Page**
![Form Page](public/assets/images/FormPage.png)
- **Purpose**: Create a new user profile by collecting data like name, contact, and address.
- **Features**: Built with Formik and Yup for form validation and management, with Material-UI's `TextField` for styling.

#### Code Highlights:
```jsx
<Formik
  initialValues={initialValues}
  validationSchema={userSchema}
  onSubmit={handleFormSubmit}
>
  {({ values, errors, touched, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        error={touched.firstName && !!errors.firstName}
        helperText={touched.firstName && errors.firstName}
      />
    </form>
  )}
</Formik>
```

### 4. **Dashboard**
The Dashboard page combines all components into a central hub, offering key metrics, visualizations, and recent activities.

- **Key Features**:
  - Statistics Overview: `StatBox` components for displaying metrics like Emails Sent, Sales Obtained, and Traffic Received.
  - Revenue Chart: A `LineChart` showing trends over time.
  - Recent Transactions: A scrollable list with transaction details.
  - Data Visualizations: Includes `BarChart` and `GeographyChart` components.
  - Campaign Progress: Visualized using a circular progress indicator (`ProgressCircle`).

#### Code Highlights:
```jsx
<Box
  display="grid"
  gridTemplateColumns="repeat(12, 1fr)"
  gridAutoRows="140px"
  gap="20px"
>
  <StatBox
    title="12,361"
    subtitle="Emails Sent"
    progress="0.75"
    increase="+14%"
    icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
  />
</Box>
```

## Contributing
Got a cool idea for this? Fork the project, make your changes, and submit a pull request. Collaboration is always welcome.

## License
This project is licensed under the [MIT License](LICENSE).

---

Thanks for stopping by! This dashboard has been a great way to refine my React skills and create something functional and visually appealing. If you have any feedback or questions, let me know!



Thanks for stopping by! This dashboard has been a great way to refine my React skills and create something functional and visually appealing. If you have any feedback or questions, let me know!
