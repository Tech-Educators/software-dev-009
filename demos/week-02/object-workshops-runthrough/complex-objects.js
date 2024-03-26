const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

// Accessing properties
console.log(blogPost.author.name); // Output: Bob

console.log(blogPost.tags[0]); // Output: coding

console.log(blogPost.tags.length); // Output: 4

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
); // Output: There are 4 tags for post "My first blog post":

// loops (again?!). Yes. Always. Always with the loops.
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}
