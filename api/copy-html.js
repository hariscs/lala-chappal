const ncp = require('ncp')
const path = require('path')

const sourceDir = path.join(__dirname, 'src', 'html')
const destDir = path.join(__dirname, 'dist/src', 'html')

ncp(sourceDir, destDir, function (err) {
  if (err) {
    console.error('Error copying HTML files:', err)
  } else {
    console.log('HTML files copied successfully!')
  }
})
