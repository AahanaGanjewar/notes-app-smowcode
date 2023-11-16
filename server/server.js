const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const usersRoutes = require('./routes/usersRoutes');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
