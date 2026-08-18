function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = greet;

// Run directly check
// if (require.main === module) {
//     console.log(greet("World"));
// }
