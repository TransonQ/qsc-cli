const inquirer = require('inquirer')

module.exports = function getRepo() {
  return new Promise(async (resolve, reject) => {
    inquirer
      .prompt({
        type: 'list',
        name: 'repo',
        message: '请选择下载框架',
        choices: [
          'react-template',
          'react-vite-template',
          'shopify-polaris-admin',
        ], // git上项目模板
        default: 0,
      })
      .then((answers) => {
        resolve(answers)
      })
      .catch((err) => {
        reject({})
      })
  })
}
