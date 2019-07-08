// api.js
import express from 'express';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send({ 'message': 'YAY! Congratulations! Start building wayfarer ' });
})

app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT}!`)
});
