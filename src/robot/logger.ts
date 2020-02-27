export const prefix = '[robot]'

function logger(type: string, details: string[] = []) {
    if (messages[type]) return `${messages[type]} ${details.join(', ')}`
    return `${prefix} Something is wrong` 
}

const messages: {[key: string]: string} = {
    notPlacedYet: `${prefix} Hey. I'm not on the board yet. Try the PLACE command`,
    potentiallyOffTable: `${prefix} Do you want me to fall onto the floor!?!?`,
    placeBearing: `${prefix} <Facing> should be one of`,
    placexPosYPos: `${prefix} X & Y are expected to be whole numbers`,
    report: `${prefix} Hey. I'm at`,
}

export default logger
