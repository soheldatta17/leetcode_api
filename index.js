const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

let leet = require('./leetcode');

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LeetCode API</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #e9ecef;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            box-sizing: border-box;
        }
        .container {
            width: 90%;
            max-width: 800px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 30px;
            box-sizing: border-box;
        }
        h1 {
            color: #343a40;
            margin-bottom: 20px;
            font-size: 28px;
            text-align: center;
        }
        .info-section {
            margin-bottom: 20px;
            padding: 20px;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            background-color: #f8f9fa;
        }
        .info-section p {
            font-size: 16px;
            color: #495057;
            margin: 0;
        }
        .api-url {
            font-size: 18px;
            color: #007bff;
            font-weight: bold;
            text-align: center;
        }
        footer {
            margin-top: 20px;
            font-size: 14px;
            color: #868e96;
            text-align: center;
        }
        a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>LeetCode API Access</h1>
        <div class="info-section">
            <p>To use the API, replace <strong style="color:#007bff;">yourLeetcodeUsername</strong> in the URL below with your LeetCode username.</p>
        </div>
        <p class="api-url">API URL: /<strong style="color:#007bff;">yourLeetcodeUsername</strong></p>
        <footer>
            <p>Created by <a href="https://github.com/soheldatta17" target="_blank">Sohel Datta</a></p>
        </footer>
    </div>
</body>
</html>
`);
});

app.get('/:id', leet.leetcode);

app.listen(3000, () => {
    console.log('App is running on port 3000');
});
