import express from 'express';

const app = express();

app.listen(3000, () => console.log('api running on port 3000'))

app.get('/', (req,res) => res.json('My api running 😍😍😍😍😍😍😍😍😍😍😍😍😍!'))