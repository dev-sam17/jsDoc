const fs = require('fs/promises')

update()

async function update() {
    try {
        const FILEPATH = './node_modules/@reconvert/microservice-clients/createClient.js'

        const text = await fs.readFile(FILEPATH, 'utf8')
        console.log(JSON.stringify(text))

        const lines = text.split('\n')

        const newLine = lines.map(line => {
            if (line.includes('const clientUrl = URLS[packageName]')) {
                line = `\t\tconst clientUrl = typeof config === 'string' ? config : URLS[packageName][platform][env];`
            }
            return line
        })

        await fs.writeFile(FILEPATH, newLine.join('\n'), 'utf8')
    } catch (error) {
        console.error(error)
    }
}
