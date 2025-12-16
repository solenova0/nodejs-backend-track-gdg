import express from "express";

const app = express();
const PORT = 3000;

// a) /home → green HTML
app.get("/home", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1 style="color: green;">Welcome to the Home Page</h1>
      </body>
    </html>
  `);
});

// b) /about → plain text
app.get("/about", (req, res) => {
  res.send("This is the about page of the Express application.");
});

// c) /students/:studentId/?department=
app.get("/students/:studentId", (req, res) => {
  const { studentId } = req.params;
  const { department } = req.query;

  res.json({
    id: studentId,
    department: department || "Not specified"
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
