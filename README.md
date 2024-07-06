# Bookmark-Web📑

## 介绍

​	Bookmark-Web基于React18、TypeScript、Vite5、Ant-Design、TailwindCSS开发的将浏览器书签转成导航页面的网站。

## 开发

- **统一包管理器[pnpm](https://pnpm.io/installation)**

```
//设置了preinstall钩子校验，其他包管理器npm、yarn下载会报错
pnpm i
pnpm dev
```

- **使用[husky](https://typicode.github.io/husky/)、[lint-staged](https://github.com/lint-staged/lint-staged)配合[Eslint](https://eslint.org/docs/latest/)、[Prettier](https://prettier.io/docs/en/) 、[EditorConfig](https://editorconfig.org/#overview)格式化代码**

```
//在git pre-commit钩子里执行lint-staged，每次git commit前会对暂存区的指定代码进行eslint语法校验,prettiter自动格式化
"lint-staged": {
		"src/**/*.{ts,tsx}": [
			"pnpm lint",
			"prettier --write --ignore-unknown"
		]
	},
```

- **使用[commitlint](https://commitlint.js.org/guides/getting-started.html)、[commitizen](https://commitizen.github.io/cz-cli/)、[cz-git](https://cz-git.qbb.sh/zh/)规范提交信息**

```
//在git commit-msg钩子里执行commitlint进行commit message格式校验，格式规范可以参考阮一峰老师的文章(https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

rules: {
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'perf',
				'test',
				'chore',
				'revert',
				'build',
				'ci',
			],
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 72],
	},
//在package.json 添加 config 指定commitizen使用cz-git进行git commit提示(终端输入cz触发commit提示)
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  }

```

## 未完待续...

