const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = [
  { name: 'google', color: '4285F4' },
  { name: 'microsoft', color: '00A4EF' },
  { name: 'amazon', color: 'FF9900' },
  { name: 'apple', color: '000000' },
  { name: 'meta', color: '0668E1' },
  { name: 'netflix', color: 'E50914' },
  { name: 'tesla', color: 'CC0000' },
  { name: 'spotify', color: '1DB954' },
  { name: 'airbnb', color: 'FF5A5F' },
  { name: 'uber', color: '000000' },
  { name: 'x', color: '000000' },
  { name: 'ibm', color: '0530AD' },
  { name: 'intel', color: '0071C5' },
  { name: 'nvidia', color: '76B900' },
  { name: 'oracle', color: 'F80000' },
  { name: 'adobe', color: 'FF0000' },
  { name: 'salesforce', color: '00A1E0' },
  { name: 'samsung', color: '1428A0' },
  { name: 'sony', color: '000000' },
  { name: 'paypal', color: '00457C' }
];

const downloadDir = path.join(__dirname, 'public', 'companies');

async function downloadIcons() {
  for (const icon of icons) {
    const url = `https://cdn.simpleicons.org/${icon.name}/${icon.color}`;
    const filePath = path.join(downloadDir, `${icon.name}.svg`);
    
    await new Promise((resolve) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          fs.writeFileSync(filePath, data);
          console.log(`Downloaded ${icon.name}.svg`);
          resolve();
        });
      }).on('error', (err) => {
        console.error(`Failed to download ${icon.name}`, err);
        resolve();
      });
    });
  }
}

downloadIcons();
