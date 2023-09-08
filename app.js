const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  try {
    const { full_name, dob } = req.body;

    const user_id = `${full_name}_${dob.replace(/-/g, '')}`;

    res.json({
      is_success: true,
      user_id: user_id,
    });
  } catch (error) {
  
    console.error(error);
    res.status(500).json({
      is_success: false,
      error: 'Internal Server Error',
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
