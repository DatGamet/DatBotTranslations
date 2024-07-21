# Dat Bot - Translations
If you would like to add a language to Dat Bot, you can do so here. I appreciate any help.

You can use en.json (English) and de.json (German) as a template to translate.

Create a pull request or send a file to the [Support Server](https://discord.gg/BQumAujuvk). 

If you find a mistake or have a suggestion for improvement, you are welcome to submit it as indicated above. I am open to suggestions. 

Tip: You can use https://deepl.com/ for help. 


## Tool
In this repository there is also a tool which can be used to see how far a language has been translated and which keys have not yet been translated.

The tool requires Node.js to be installed on your device. Then all packages can be installed with `npm install` and started with `node ./Tool/index.js`

There are two optional flags that can be used:
- `language`: To view only a specific language. Example: `node ./Tool/index.js de` for german
- `nokeys`: Does not output any untranslated keys. Can be useful if a language has hardly been translated and you just want to get an overview of all languages.
  Can also be used as a second flag for one language. Example: `node ./Tool/index.js de nokeys`.