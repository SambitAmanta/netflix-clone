Project: Netflix Clone

Description: A full-stack web application that replicates the core features of Netflix, including user authentication, movie/show browsing, genre-based categorization, and personalized content management.

Technologies Used:
Frontend: React, Redux Toolkit, React Router
Backend: Node.js, Express
Authentication: Firebase Authentication
Data Storage: MongoDB
External API: TMDB API

Key Features:

User Authentication:
Implemented Firebase Authentication for secure user registration, login, and logout.
Secured routes based on user authentication status.

Movie and Show Fetching:
Utilized Redux Toolkit to manage state for fetched movies and shows.
Integrated TMDB API to fetch a vast collection of movies and shows.

Genre-Based Categorization:
Developed a genre selection component for users to filter content by genre.
Implemented Redux actions to dynamically filter content based on the selected genre.

Liked Movies and My List:
Enabled users to like/unlike movies and shows.
Stored user preferences in Firestore under their profile.

Created a dedicated "My List" page to showcase liked content.

Routing and Navigation:
Utilized React Router for multi-page navigation within the application.
Implemented smooth navigation between different sections of the app.
