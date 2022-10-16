const { compile } = require('nexe')

compile({
  input: './entry.js',
  build: false, //required to use patches
}).then(() => {
  console.log('success')
})