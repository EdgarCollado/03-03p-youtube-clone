# YouTube Clone Project

## Objective
The objective of this project is to create a simplified version of YouTube, one of the most popular video-sharing platforms. By using the YouTube API, you will gain experience with third-party APIs, learn how to handle data fetching, and create a responsive and interactive user interface similar to YouTube's.

## Getting Started

1. **Fork the Repository**: Click the 'Fork' button at the top right of this page to create a copy of this repository in your GitHub account.
2. **Clone Your Forked Repository**: Clone the repository to your local machine using the `git clone` command with your repository's URL.
3. **Navigate to Your Project Folder**: Change your directory to the folder where you cloned the repo.
4. **Install Dependencies**: Run `npm install` to install the necessary dependencies for the project.

## Register for the YouTube API
1. Go to the [Google Developers Console](https://console.developers.google.com/).
2. Create a new project by clicking the "+ Create Project" button and follow the prompts.
3. Once your project is created, click on "Enable APIs and Services" at the top.
4. Search for "YouTube Data API v3" in the search box and enable it.
5. Go to the "Credentials" tab on the left sidebar and click on "Create Credentials" at the top.
6. Select "API key" from the drop-down and your new API key will be created.
7. Copy this API key and store it securely. This is what you will use to authenticate your requests to the YouTube API.

**Note:** Keep your API key confidential to prevent unauthorized usage and charges.

## Handling API Keys Securely
- **Never hardcode your API keys directly into your files**, especially those you're pushing to a public repository.
- Create a `.env` file in the root of your project directory.
- Inside the `.env` file, add your API key like this: `REACT_APP_API_KEY=your_api_key_here`. The prefix `REACT_APP_` is required for Create React App to pick up the environment variable.
- In your application, you can access the API key via `process.env.REACT_APP_API_KEY`. This keeps your key secure and outside of your main codebase.
- Make sure to add `.env` to your `.gitignore` file to prevent it from being pushed to a public repository.
- **Note**: While this method keeps your API key hidden from your codebase, it does not fully secure your key from the client-side. Consider implementing a backend proxy if you need to keep your key completely secure.

## Integrating React Router
To manage different views such as the index view of videos, a search view, and a specific video page, you'll need to integrate React Router into your project.
- Install React Router by running `npm install react-router-dom`.
- Create three main routes:
  - **Index Route (`/`)**: This will be the landing page where popular videos or a predefined set of videos are displayed.
  - **Search Route (`/search`)**: This route will show search results. It gets triggered when a user performs a search using the Search Bar.
  - **Video Route (`/video/:id`)**: This route will display a single video and its details. The `:id` parameter allows you to fetch and display the correct video based on the video ID.

## Exercise Instructions

### Create Basic Components
- **Search Bar**: Develop a search bar component to allow users to search for videos.
- **Video List**: Create a list component to display search results.
- **Video Player**: Implement a video player that plays the selected video from the list.

### Fetching Data from YouTube API
- Use axios to fetch videos based on the user's search query from the YouTube API. Axios is a popular, promise-based HTTP client for the browser and Node.js. You can learn more and find installation instructions at [npm: axios](https://www.npmjs.com/package/axios).
- To fetch data, construct a GET request to the `https://www.googleapis.com/youtube/v3/search` endpoint with the necessary query parameters including your API key.

### Handling User Interaction
- Allow users to click on a video from the list and play it in the Video Player component.
- Enable users to perform new searches and view the results.

### Styling
- Apply CSS or a styling library of your choice to style the application, aiming to closely resemble YouTube's design.
- Ensure that the application is responsive and provides a good user experience on different devices.

### Optional Enhancements
- **Implement additional features**: Consider adding features like viewing comments, related videos, or user channels.
- **Improve performance**: Implement techniques to optimize the performance of your application, like lazy loading or pagination.

## Expected Features of the Completed Project
- **Search Functionality**: Users should be able to search for videos using the YouTube API and see a list of results.
- **Video Playback**: Users should be able to click on a video from the list and have it play in the Video Player component.
- **Responsive Design**: The application should be well-styled and responsive, providing a good user experience on both desktop and mobile devices.
- **Error Handling**: The application should handle errors gracefully, such as displaying a message when no videos are found or the API limit is reached.

## ChatGPT Assistance Prompts
If you encounter any challenges, consider asking ChatGPT the following questions to guide your development process:
- "How do I use axios to make a GET request to the YouTube API?"
- "What are some best practices for handling API keys securely in a React application?"
- "How can I make my application responsive to different screen sizes?"
- "I'm having trouble with [specific issue], what are some potential solutions?"

## Submission Guidelines
- **Commit Regularly**: Make sure to commit your changes regularly to your forked repository.
- **Push Your Changes**: Once you're satisfied with your project, push your changes to your GitHub repository.
- **Open a Pull Request**: Create a pull request from your forked repository to the original assignment repository with a title and brief description of your implementation and any challenges you faced.

We're excited to see your creative interpretations and how you tackle the challenges of working with a real-world API! Good luck!

## Editor's Note

This project is based off of a project that was originally introduced in Pursuit's standard curriculum. The original YouTube clone project was meant to be a group project spanning a week. I would recommend spending about 15 hours doing research on the YouTube API, understanding API keys, and looking more into how you can use video in a web context (hint, check out the `<video>` tag).