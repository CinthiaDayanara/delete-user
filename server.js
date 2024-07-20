const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3001;


mongoose.connect('mongodb://localhost:27017/users_db', {

});

app.use(express.json());


app.use('/api/users', userRoutes); 


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
