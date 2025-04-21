# RuraBloom - Rural Job Platform

RuraBloom is a comprehensive job platform designed specifically for rural communities. It connects job seekers with opportunities in rural areas and helps employers find qualified candidates.

## Features

- **Interactive Job Map:**  Utilizes Mapbox to display job locations on an interactive map, allowing users to visually explore opportunities in different rural areas.
- **Advanced Job Search:** Robust job search functionality with filters for location, salary range, job type (Full-time, Part-time, Seasonal, Contract), and categories.
- **Categorized Job Listings:** Jobs are organized into clear categories with visual icons for easy browsing and discovery.
- **User Profiles for Job Seekers:** Job seekers can create profiles to showcase their skills and experience, and easily apply for jobs.
- **Job Posting for Employers:** Employers can post job openings targeted at rural communities, reaching qualified candidates.
- **Responsive Design:** Fully responsive and accessible on all devices, ensuring a seamless experience for all users.
- **Blog:** Informative blog section with insights, success stories, and resources related to rural employment.
- **FAQ and Help Center:** Dedicated sections to answer common questions and provide support to users.
- **Contact Form:** Easy-to-use contact form for users to get in touch with the RuraBloom team.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git
- Mapbox account for the interactive map

## Getting Started

### Setting Up Mapbox

RuraBloom uses Mapbox for its interactive map feature. To get started with Mapbox, you'll need to create an account and obtain an access token. Here's how:

1. **Create a Mapbox account:**
   - Go to [https://www.mapbox.com/signup](https://www.mapbox.com/signup) and sign up for a free account.

2. **Get an access token:**
   - Once logged in, navigate to your account dashboard.
   - Find the "Access tokens" section and create a new access token. You can name it something like "RuraBloom Token".

3. **Set up your Mapbox token in your project:**
   - Create a `.env.local` file in the **root** directory of your project.
   - Add the following line to your `.env.local` file, replacing `your_mapbox_token_here` with the access token you just obtained from Mapbox:

     ```
     NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token_here
     ```
     **Important:**  `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` is the variable name that RuraBloom is configured to use. Make sure you use this exact name.

### Installation and Running the Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/rurabloom.git # Replace with the actual repository URL
   ```

2. **Navigate to the project directory:**
   ```bash
   cd rurabloom
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

5. **Access the application:**
   - Open your browser and go to `http://localhost:3000`.

### Updating Your Mapbox Access Token

If you need to update your Mapbox access token at any point (e.g., you regenerate it in Mapbox, or you want to use a different token), simply follow these steps:

1. **Locate your `.env.local` file:** This file is in the root directory of your RuraBloom project.
2. **Open `.env.local` in a text editor.**
3. **Find the line:** `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_current_mapbox_token`
4. **Replace `your_current_mapbox_token` with your new Mapbox access token.**
5. **Save the `.env.local` file.**
6. **Restart the development server** if it's currently running to ensure the changes are picked up.

Now RuraBloom will use your updated Mapbox access token.

## Contributing

We welcome contributions to RuraBloom! If you're interested in contributing, please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and how to get involved.

## License

[MIT License](LICENSE)

---

**RuraBloom - Blooming Rural Communities with Opportunities**

