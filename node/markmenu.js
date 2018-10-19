/**
 * File reads in markdown files in a folder and
 * generates a menu from those files based on the
 * markdown comments in those files.
 */

const fs = require('fs')
const path = require('path')
const articlePath = path.join(__dirname, '../src/articles')
const menuOutputPath = path.join(__dirname, '../src/menu.json')

class Meta {
  constructor () {
    this.title = ''
    this.author = ''
    this.date = ''
    this.metaText = ''
  }
}

const readMarkdown = (file) => {
  let metaData = new Meta()
  let mdfileString = fs.readFileSync(path.join(articlePath, `/${file}`), { encoding: 'utf-8' })

  var subString = mdfileString.substring(
    mdfileString.indexOf('---') + 4,
    mdfileString.lastIndexOf('---') - 1
  )
  metaData.metaText = mdfileString.substring(
    mdfileString.lastIndexOf('---') + 4,
    800
  )

  var metaElements = subString.split('\n')

  metaElements.forEach(metaElement => {
    let keyValuePair = metaElement.split(':')
    metaData[keyValuePair[0].toLocaleLowerCase()] = keyValuePair[1]
  })
  return metaData
}

let files = fs.readdirSync(articlePath)
var menuItems = files.map(readMarkdown)
console.log(menuItems)
fs.writeFileSync(menuOutputPath, JSON.stringify(menuItems))
