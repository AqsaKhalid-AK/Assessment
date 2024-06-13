Setup Instructions

Clone the repository

Make sure you have Node.js installed on your computer. You can download it from nodejs.org.

Open a Terminal or Command Prompt

Navigate to the project directory using the terminal or command prompt.

Run the following command to install the required dependencies (Express):

npm install express

Start the server by running the following command:

node server.js

The server will start running at http://localhost:3000.

File Structure
project_root/
├── index.html
├── script.js
├── server.js
└── data/
    ├── messages.json
    └── users.json

index.html: Main HTML file that displays the chat messages and user information.
script.js: JavaScript file that fetches and renders JSON data.
server.js: Node.js server script using Express to serve the application.
data/messages.json: JSON file containing chat messages.
data/users.json: JSON file containing user information.