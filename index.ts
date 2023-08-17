const mql = require('@microlink/mql')

const metalink = async (url: string, options?: {
    audio?: boolean,
    screenshot?: boolean,
    animation?:boolean,
    adblock?: boolean,
    codeScheme?: string,
    colorScheme?: string,
    iframe?: boolean
}) => {
    return await mql(url, options)
}
export {
    metalink
}