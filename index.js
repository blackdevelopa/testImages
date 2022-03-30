const image = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" onPress="console.log(11)" width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>';
const buff = new Buffer(image);
const base64data = buff.toString('base64');
const img = 'data:image/svg+xml;base64,' + base64data;

console.log(img);