import express from 'express';
import mongoose from 'mongoose';
import { userRoutes } from './routes/index.js';
import 'dotenv/config';
import cors from "cors"

mongoose.connect(process.env.CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {console.log('Conectado a MongoDB...')
})
    .catch(err => console.log('No se pudo conectar con MongoDB..', err));


const app = express();

app.use(cors())



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req, res) => {
    res.send("database");
});

app.use('/users', userRoutes);
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`port running...`);
})