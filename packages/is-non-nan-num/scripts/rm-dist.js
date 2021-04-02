const fs = require('fs')
const path = require('path')

fs.rmdirSync(
  path.join(__dirname, '..', 'dist'),
  { recursive: true }
)

console.log('🗑  Removed `dist` folder')
