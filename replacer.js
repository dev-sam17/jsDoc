const fs = require('node:fs/promises');

const FILENAME = 'server.js'

const readScript = async () => {
    const textData = await fs.readFile(FILENAME, 'utf8')
    const lines = textData.split('\n');

    const newLines = lines.map((line, i) => {
        if (line.includes('http://') || line.includes('racer.setUrl')) {
            // console.log(line);

            if (line.startsWith('//')) {
                return line
            }

            return '// ' + line;
        } else if (line.includes('configFilePath')) {
            const thisLine = line.includes(',') ? line : (line + ',');
            
            if (lines[i + 1].includes('logPath')) {
                return thisLine;
            }


            return thisLine + '\n' + "\t\tlogPath: './logs'"
        }

        return line
    })

    // console.log(newLines);

    await fs.writeFile(FILENAME, newLines.join('\n'))
    //    console.log(JSON.stringify(newLines))
}

readScript();

