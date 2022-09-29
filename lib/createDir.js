const download = require('download-git-repo')
const chalk = require('chalk')
const util = require('util')

const dowloadRepo = util.promisify(download)

module.exports = async function createDir(dir, repo) {
  let url = `direct:https://github.com/quanscheng/${repo}.git`

  await dowloadRepo(url, dir, { clone: true }, function (err) {
    console.log(err ? err : chalk.bgGreenBright('\n\r初始化模板成功!\n\r'))
  })
}
