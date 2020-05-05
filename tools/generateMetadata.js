const YAML = require('yaml');
const fs = require('fs');

const basePath = './public/blog-content';

const fileNames = fs.readdirSync(basePath);

const configs = fileNames.map((fileName) => {
    const fileContent = fs.readFileSync(`${basePath}/${fileName}`);

    const regex = /^---([\S\s]*)---\n/g;

    const match = regex.exec(fileContent.toString());

    return {
        ...YAML.parse(match[1]),
        fileName,
    };
});

fs.writeFileSync('./public/metadata.json', JSON.stringify(configs, null, 2));
