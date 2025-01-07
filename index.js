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
  console.log("3. Exit");

  rl.question("Choose an option (1, 2, or 3): ", (choice) => {
    switch (choice) {
      case "1":
        addPost();
        break;
      case "2":
        viewPosts();
        break;
      case "3":
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

// Start the application
showMenu();
