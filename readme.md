# Simple Blog CLI Application

A command-line interface (CLI) application that allows users to create, view, edit, and delete blog posts directly in the terminal. This project was developed as part of the **Learnable Internship Program** at **Genesys Tech Hub**.

---

## Features

- **Add Blog Posts**: Create new blog posts by providing a title and content.
- **View Blog Posts**: View a list of all existing blog posts.
- **Edit Blog Posts**: Modify the title and content of an existing post.
- **Delete Blog Posts**: Remove blog posts by selecting the desired post.
- **Exit**: Close the application when you're done.

---

## How to Use

### Prerequisites

- Ensure **Node.js** is installed on your computer.  
  You can download Node.js from [Node.js Official Website](https://nodejs.org/).

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-cli-app
   ```
3. Install dependencies (if any, though this project does not require additional packages):
   ```bash
   npm install
   ```

### Run the Application

- Start the application by running:
  ```bash
  node index.js
  ```

### Main Menu

Once the application starts, you’ll see the following menu options:

```
Simple Blog CLI Application
1. Add a new blog post
2. View all blog posts
3. Edit a blog post
4. Delete a blog post
5. Exit
```

- Enter the number corresponding to your desired action and follow the prompts.

---

## File Structure

```
blog-cli-app/
├── index.js        # Main application file
├── README.md       # Project documentation (this file)
```

---

## Example Usage

Here’s an example of how the application works:

1. **Adding a Post**

   - You’ll be prompted to enter a title and content for your blog post.
   - Once added, the post is stored in the application.

2. **Viewing Posts**

   - Displays a list of all blog posts, including their titles and content.

3. **Editing Posts**

   - Select a post by its number.
   - Enter the new title and content to update the post.

4. **Deleting Posts**
   - Choose the post you want to delete by its number.
   - The post will be removed permanently.

---

## Tech Stack

- **Node.js**: A JavaScript runtime used to build this CLI application.

---

## Project Motivation

This project was created as part of the **Learnable Internship Program** by **Genesys Tech Hub** to enhance our understanding of building practical, user-friendly CLI applications using Node.js.

---

## Acknowledgments

- Special thanks to **Genesys Tech Hub** and the **Learnable Internship Program** for the opportunity to learn and grow.
- Guidance and support from mentors and teammates.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to share your feedback or contributions! 😊
