const readline = require("readline");

// here i create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// here's an array to store blog post
let blogPosts = [];

// now, the function to display options
function showMenu() {
  console.log("\nSimple Blog CLI Application");
  console.log("1. Add a new blog post");
  console.log("2. View all blog posts");
  console.log("3. Edit a blog post");
  console.log("4. Delete a blog post");
  console.log("5. Exit");

  rl.question("Choose an option (1, 2, 3, 4, or 5): ", (choice) => {
    switch (choice) {
      case "1":
        addPost();
        break;
      case "2":
        viewPosts();
        break;
      case "3":
        editPost();
        break;
      case "4":
        deletePost();
        break;
      case "5":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        showMenu();
    }
  });
}

// Function to add a new post
function addPost() {
  rl.question("Enter the title of your blog post: ", (title) => {
    rl.question("Enter the content of your blog post: ", (content) => {
      const newPost = { title, content };
      blogPosts.push(newPost);
      console.log("Blog post added successfully!\n");
      showMenu();
    });
  });
}

// Function to view all posts
function viewPosts() {
  console.log("\nYour Blog Posts:");
  if (blogPosts.length === 0) {
    console.log("No blog posts yet.");
  } else {
    blogPosts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   ${post.content}\n`);
    });
  }
  showMenu();
}

// Function to edit a post
function editPost() {
  if (blogPosts.length === 0) {
    console.log("No blog posts to edit.");
    showMenu();
    return;
  }

  console.log("\nChoose a post to edit:");
  blogPosts.forEach((post, index) => {
    console.log(`${index + 1}. ${post.title}`);
  });

  rl.question("Enter the number of the post you want to edit: ", (index) => {
    const postIndex = parseInt(index) - 1;
    if (postIndex >= 0 && postIndex < blogPosts.length) {
      rl.question("Enter the new title: ", (newTitle) => {
        rl.question("Enter the new content: ", (newContent) => {
          blogPosts[postIndex].title = newTitle;
          blogPosts[postIndex].content = newContent;
          console.log("Blog post updated successfully!\n");
          showMenu();
        });
      });
    } else {
      console.log("Invalid post number. Please try again.");
      showMenu();
    }
  });
}

// Function to delete a post
function deletePost() {
  if (blogPosts.length === 0) {
    console.log("No blog posts to delete.");
    showMenu();
    return;
  }

  console.log("\nChoose a post to delete:");
  blogPosts.forEach((post, index) => {
    console.log(`${index + 1}. ${post.title}`);
  });

  rl.question("Enter the number of the post you want to delete: ", (index) => {
    const postIndex = parseInt(index) - 1;
    if (postIndex >= 0 && postIndex < blogPosts.length) {
      blogPosts.splice(postIndex, 1);
      console.log("Blog post deleted successfully!\n");
      showMenu();
    } else {
      console.log("Invalid post number. Please try again.");
      showMenu();
    }
  });
}

// Start the application
showMenu();
