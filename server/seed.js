const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

const path = require('path');
dotenv.config({ path: path.join(__dirname, '.env') });

const products = [
  {
    name: 'SOLO Q-70L Plus',
    category: 'Car Battery',
    description: 'A premium 9-plate high-performance battery designed for maximum reliability and superior cranking power in car engines. Optimized for longer life.',
    image: 'Solo 9 plates.jpeg',
    brand: 'SOLO'
  },
  {
    name: 'SOLO MA-115',
    category: 'Car Battery',
    description: 'Robust 11-plate battery engineered for multi-purpose use including cars and UPS systems. Features advanced plate technology for deeper discharge cycles.',
    image: 'Solo 11 plates.jpeg',
    brand: 'SOLO'
  },
  {
    name: 'SOLO 12V Super 4',
    category: 'Motorcycle Battery',
    description: 'Ultra-compact 18-plate high-density battery for heavy-duty motorcycle performance. Delivers consistent voltage for electrical systems.',
    image: 'Solo 18 plates.jpeg',
    brand: 'SOLO'
  },
  {
    name: 'SOLO Solar 60',
    category: 'Solar Battery',
    description: 'Specialized 5-plate solar storage solution. Designed for efficiency and endurance in residential solar energy setups.',
    image: 'Solo Solar 60.jpeg',
    brand: 'SOLO'
  },
  {
    name: 'SOLO Battery Plate (2HN)',
    category: 'Battery Plates',
    description: 'High-precision 2HN negative lead plates. The core component of our reliability, manufactured in-house since 1984.',
    image: '2HN plate.jpeg',
    brand: 'SOLO'
  },
  {
    name: 'SOLO Standard Battery Plate',
    category: 'Battery Plates',
    description: 'Our industry-leading standard battery plates, used by OEM partners across Pakistan for automotive and industrial energy storage.',
    image: 'Standard plate.jpeg',
    brand: 'SOLO'
  },
  {
    name: 'SOLO Sprocket Gear Set',
    category: 'Sprockets',
    description: 'Hardened steel sprockets for smooth power transmission and superior chain life on motorcycles.',
    image: 'https://via.placeholder.com/300?text=SOLO+Sprocket',
    brand: 'SOLO'
  }
];


const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crown_accumulator');
    console.log('Seed: Connected to MongoDB');
    
    await Product.deleteMany({});
    console.log('Seed: Cleared existing products');
    
    await Product.insertMany(products);
    console.log('Seed: Inserted initial products');
    
    mongoose.connection.close();
    console.log('Seed: Completed');
  } catch (err) {
    console.error('Seed Error:', err);
  }
};

seedDB();
