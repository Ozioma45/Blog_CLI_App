# Blog CLI Application

This is a Command Line Interface (CLI) application for managing blog posts. It was built using foundational JavaScript concepts and is designed as part of the Learnable Internship Program's **Introduction to JavaScript** module.

## Features

- Add blog posts with a title and content.
- View all saved blog posts.
- Exit the application gracefully.

## Project Goals

- Practice foundational JavaScript concepts, such as:
  - Variables
  - Arrays and Objects
  - Loops and Conditionals
  - Functions
  - Basic input/output handling
- Understand how to build an interactive CLI application.
- Gain confidence in working on simple yet functional JavaScript projects.

## How It Works

1. When you run the application, you will see a menu with three options:
   - Add a post
   - View all posts
   - Exit the application
2. Choose an option by typing the corresponding number.
3. Follow the prompts:
   - If you add a post, you'll be asked to provide a title and content.
   - If you view posts, all previously added posts will be displayed.
   - If you exit, the application will close.
4. Repeat until you are done!

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your computer. You can download it from [Node.js official website](https://nodejs.org/).

## Installation

1. Clone this repository or download the `blog-cli.js` file.
2. Open your terminal or command prompt.
3. Navigate to the folder where the file is located.

## Usage

1. Run the application with the following command:
   ```bash
   node index.js
   ```
2. Follow the prompts displayed on the screen.

## Example Output

```plaintext
Welcome to the Blog CLI Application!
What would you like to do?
1. Add a Post
2. View All Posts
3. Exit

Enter your choice: 1
Enter post title: My First Blog Post
Enter post content: This is my first blog content!

Post added successfully!

What would you like to do?
1. Add a Post
2. View All Posts
3. Exit

Enter your choice: 2
Here are all the posts:
1. Title: My First Blog Post
   Content: This is my first blog content!
```

## Contribution

This is a personal learning project, but if you'd like to suggest improvements, feel free to fork the repository and create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
