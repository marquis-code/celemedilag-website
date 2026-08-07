const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, 'app/pages'),
  path.join(__dirname, 'app/components'),
  path.join(__dirname, 'app/layouts')
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.vue')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Aggressive downscaling of text classes
      content = content.replace(/text-7xl/g, 'text-5xl');
      content = content.replace(/text-6xl/g, 'text-4xl');
      content = content.replace(/text-5xl/g, 'text-3xl');
      content = content.replace(/text-4xl/g, 'text-2xl');
      content = content.replace(/text-3xl/g, 'text-xl');
      content = content.replace(/text-2xl/g, 'text-lg');
      // Replace some base sizes if they are in headings
      content = content.replace(/text-xl font-display/g, 'text-lg font-display');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated typography in: ${fullPath}`);
      }
    }
  }
}

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    processDirectory(dir);
  }
});

console.log('Typography aggressive downscaling complete!');
