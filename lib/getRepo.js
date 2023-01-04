const inquirer = require('inquirer')

module.exports = function getRepo() {
  return new Promise(async (resolve, reject) => {
    inquirer
      .prompt({
        type: 'list',
        name: 'repo',
        message: '请选择将要拉取的模板: ',
        choices: [
          'react-template',
          'react-vite-template',
          'shopify-polaris-admin',
          'polaris-ts',
          'antd5-ts',
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
