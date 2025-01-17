import express from 'express';
import bodyParser from 'body-parser';
import {randomSuperhero} from 'superheroes';


const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.render('index.ejs',
        {
            name : randomSuperhero()
        }
    );
});

app.listen(port, () => {
    console.log(`Listening on -> http://localhost:${port}`);
});