import * as path from 'path'
import * as fs from 'fs'

// Created a folder
// fs.mkdir(path.join(__dirname, '/test'), (err) => {
// if (err) throw err
// console.log('Created a folder')
// })

// Created and write a file
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello Node', (err) => {
  if (err) throw err
  console.log('Created and write a file')
  // Add to file
  fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'data to update', (err) => {
    if (err) throw err
    console.log('File update')
  })
  // Read the file
  fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
  })

})
