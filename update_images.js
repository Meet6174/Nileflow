import fs from 'fs';

let data = fs.readFileSync('src/data/products.js', 'utf-8');

const updatedData = data.replace(/category:\s*"([^"]+)",([\s\S]*?)image:\s*"([^"]+)"/g, (match, category, middle, oldImage) => {
  const imageMap = {
    'Submersible': 'https://commons.wikimedia.org/wiki/Special:FilePath/Submersible_pump_0.75HP.jpg',
    'Open Well': 'https://commons.wikimedia.org/wiki/Special:FilePath/Centrifugal_Pump.jpg',
    'Domestic': 'https://commons.wikimedia.org/wiki/Special:FilePath/Water_pump.jpg',
    'Mud Pump': 'https://commons.wikimedia.org/wiki/Special:FilePath/Slurry_Pump.jpg'
  };
  const newImage = imageMap[category] || oldImage;
  return `category: "${category}",${middle}image: "${newImage}"`;
});

fs.writeFileSync('src/data/products.js', updatedData);
console.log('Done replacing products.js images');
