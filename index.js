import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    let test = { name: 'test', value: 'test'}
    res.json(test);
});

app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        return console.log("Server error: ", err);
    }
    console.log("Server OK");
});