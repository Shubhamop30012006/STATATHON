// // server.js
// const app = require('./server/app');
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
// console.log('Server is listening on port ${PORT}');
// });

// server.js (root)
const app = require('./server/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
