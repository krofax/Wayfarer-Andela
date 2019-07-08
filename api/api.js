// api.js
import express from 'express';
import config from './config/config';


const app = express()

const { port, env } = config;

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send({ 'message': 'YAY! Congratulations! Start building wayfarer ' });
})

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
