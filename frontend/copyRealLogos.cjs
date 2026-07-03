const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

const iconsToFetch = [
  'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 
  'Netflix', 'Tesla', 'Spotify', 'Airbnb', 'Uber', 
  'X', 'IBM', 'Intel', 'Nvidia', 'Oracle', 
  'Adobe', 'Salesforce', 'Samsung', 'Sony', 'PayPal'
];

const mediaDir = path.join(__dirname, 'public', 'media');

if (!fs.existsSync(mediaDir)) {
  fs.mkdirSync(mediaDir, { recursive: true });
}

for (const iconName of iconsToFetch) {
  // simple-icons uses slugs or exact names
  const icon = simpleIcons.Get(iconName.toLowerCase());
  if (icon) {
    const fileName = iconName.toLowerCase() + '.svg';
    const filePath = path.join(mediaDir, fileName);
    
    // The simple-icons SVG doesn't have a fill color by default, it uses currentColor or black.
    // We will inject the brand color into the SVG string
    let svgContent = icon.svg;
    svgContent = svgContent.replace('<svg ', `<svg fill="#${icon.hex}" `);

    fs.writeFileSync(filePath, svgContent);
    console.log(`Saved ${fileName} (Color: #${icon.hex})`);
  } else {
    console.log(`Icon not found: ${iconName}`);
  }
}
