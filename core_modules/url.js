const url = require('url')
const adress = 'https://www.website.com.br/catalog?products=pcgamer'
const parseUrl = new url.URL(adress)

console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.hash)
console.log(parseUrl.port)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams.get('products'))
console.log(parseUrl.username)
console.log(parseUrl.hostname)
