# cli start

## 步骤

### 创建命令

#### 先预览简单效果

1. `package.json`添加

   ```json
     "bin": {
       "qsc": "./bin/cli.js"
     },
   ```

2. 调试查看效果
   在当前项目目录:

   ```bash
   npm link

   qsc # 会执行./bin/cli.js
   ```

#### 创建启动命令

1. 安装工具库
   ```bash
   npm install commander --save
   ```
2. 创建命令
   `/bin/cli.js `

   ```js
   #! /usr/bin/env node

   const program = require('commander')

   program
     // 定义命令和参数
     .command('create <app-name>')
     .description('create a new project')
     // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
     .option('-f, --force', 'overwrite target directory if it exist')
     .action((name, options) => {
       // 打印执行结果
       console.log('name:', name, 'options:', options)
     })

   program
     // 配置版本号信息
     .version(`v${require('../package.json').version}`)
     .usage('<command> [option]')

   // 解析用户执行命令传入参数
   program.parse(process.argv)
   ```

3. 校验命令是否成功

   ```bash
   # 1. 命令行输入
   qsc

   # 效果大概是这个样子:
   Usage: qsc <command> [option]

    Options:
    -V, --version output the version number
    -h, --help display help for command

    Commands:
    create [options] <app-name> create a new project
    help [command] display help for command

    # 2. 执行 qsc create
    qsc create

    # 出现下列提示:
    error: missing required argument 'app-name'

    # 3. 执行 qsc create test01
    qsc create test01

    # 出现下列提示:
    name: test01 options: {}

    # 4. 执行 qsc create test01 -f
    qsc create test01 -f

    # 出现下列提示:
    name: test01 options: { force: true }

   ```

   获取命令行指令成功
