# Chat App UI

This project is a simple chat interface built using **React** and **TailwindCSS**, designed to display chat messages grouped by date (e.g., "1 day ago", "2 days ago"). The chat also includes hoverable options for **editing** and **deleting** individual chats.

[UI Preview](./public/data1.png)

## Features

- **Grouped Chats by Date**: Chats are dynamically grouped by the date they were sent, with dividers indicating how long ago they were.
- **Hover Actions**: When hovering over a chat, options to **edit** and **delete** appear.
- **Responsive Design**: The UI adapts to various screen sizes and remains functional on smaller displays.

## How to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/RuberDucky/ChatBotUI.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ChatBotUI
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the project:

   ```bash
   npm start
   ```

## Technologies Used

- **React.js**: Frontend JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for fast UI development.
- **React Router**: For handling routing between chat pages.

## Project Structure

```
├── public
│   ├── edit.png        # Edit icon
│   ├── delete.png      # Delete icon
│   ├── message.png     # Message icon
│   ├── user.png        # User icon
│   └── send.png        # Send icon
├── src
│   ├── components
│   │   ├── SideBar.jsx
|   ├── pages
│   │   ├── ChatPage.jsx
│   │   ├── HomePage.jsx
│   ├── App.js
│   ├── index.js
│   └── styles
│       └── tailwind.css
└── README.md
```

## Customization

- **Hover Icons**: You can replace the icons in the `public` folder with your own if needed.
- **Chat Grouping**: Chats are grouped based on the `date`. In a real-world app, you can fetch the chat data from a backend API and implement dynamic date grouping.

## How to Add Your UI Image

1. Add your UI image file (e.g., `ui-preview.png`) to the `public` folder.
2. In the `README.md`, update the placeholder:

   ```markdown
   [UI Preview](./public/data1.png)
   ```

This will display the image in the README.

## Future Enhancements

- Add dynamic chat loading from a database.
- Implement real-time chat functionality using WebSockets.
- Include user authentication.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.