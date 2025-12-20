require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const port = process.env.port || 3000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connect to MongoDB Altas'))
  .catch((error) => console.error('Failed to connect to MongoDB Altas'));

const photoSchema = new mongoose.Schema({
    image_data: { 
        type: String, 
        required: true 
    },
    timestamp: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    description: {
      type: String,
    }
});

const Photo = mongoose.model('Photo', photoSchema);

app.get('/api/photos', async(req, res) => {
  try {
    const photos = await Photo.find().sort({createdAt: -1});
    res.json(photos);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

app.post('/api/upload', async(req, res) => {
  const newPhoto = new Photo({
      image_data: req.body.image,
      timestamp: req.body.time,
      description: req.body.description
    });
  
  try {
    const savePhoto = await newPhoto.save();
    res.status(201).json(savePhoto);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
