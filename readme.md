# Unmaintained

These definitions are usable, but not planned to be updated past `content_2017-12-04`. New projects will probably be using Typescript anyway.

# n-flow-ft-content

Flow type definition for a piece of FT content, as represented in Elastic Search. Automatically generated on publish from the ES mappings.

## Usage

`npm install @financial-times/n-flow-ft-content`, then in a Flow-activated repo you can `import type {FtItem} from '@financial-times/n-flow-ft-content'`.

## Using Flow in your project

Add `flow-bin` as a dependency of your project. Create an empty [`.flowconfig`](https://flow.org/en/docs/config/) file at the root of your project (e.g. by running `flow init`).

If you don't want to introduce a build step for your code, use the [Flow comment syntax](https://flow.org/en/docs/types/comments/). Otherwise, install either `babel-preset-flow` or `flow-remove-types` and add it to your build process.

Run `flow check` as part of your CI tests, and maybe in a `precommit` hook. Encourage your developers to add a Flow integration to their editor.

### Editor integration

#### Atom

Install [`atom-ide-ui`](https://atom.io/packages/atom-ide-ui) and [`ide-flowtype`](https://atom.io/packages/ide-flowtype). Alternatively, you could install the whole of [Nuclide](https://nuclide.io/).

#### VS Code

Install [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) or [vscode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide).

#### Sublime Text

Install [FlowIDE](https://packagecontrol.io/packages/FlowIDE), and optionally [SublimeLinter-flow](https://packagecontrol.io/packages/SublimeLinter-flow) and the [Babel](https://packagecontrol.io/packages/Babel) syntax highlighting.

#### Other editors

https://flow.org/en/docs/editors/

## Licence

MIT
