// Express Imports
import app from "./app.js";

// Set the server port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Start Express server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
