"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
// Created a folder
// fs.mkdir(path.join(__dirname, '/test'), (err) => {
// if (err) throw err
// console.log('Created a folder')
// })
// Created and write a file
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello Node', function (err) {
    if (err)
        throw err;
    console.log('Created and write a file');
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'data to update', function (err) {
        if (err)
            throw err;
        console.log('File update');
    });
    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', function (err, data) {
        if (err)
            throw err;
        console.log(data);
    });
});
