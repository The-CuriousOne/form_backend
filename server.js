const express = require('express'); //import the express modules
const app = express(); //create an instance of express
const PORT = process.env.PORT||3000; //define the port. Use the enviornment variable PORT if available, otherwise default to 3000

app.use(express.json()); // middleware to parse JSON bodies in incoming request

app.post('/bfhl',(req, res) => {
    const data = req.body.data; //Extract the 'data' array from the request body
    const numbers = data.filter(item => !isNaN(item)); //Filter out numbers
    const alphabets = data.filter(item => isNaN(item)); //Filter out alphabets
    const highestAlphabet = alphabets.sort((a,b) => a.localCompare(b, undefined, {sensitivity: 'base'})).slice(-1);

    res.json({
        is_success: true,
        user_id: "Abhigyan_Kashyap_14022002",
        email: "as7939@srmist.edu.in",
        roll_number: "RA2111003010936",
        numbers,
        Numbers: numbers,
        Alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

