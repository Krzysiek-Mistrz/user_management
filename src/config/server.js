/*
Configures the Express server, middleware, and routes.
*/

const app = require('../app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});