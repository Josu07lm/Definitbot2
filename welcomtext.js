const welcome = (number, groupname) => {
    return `๐๐ฅ๐ @${number}. ๐ฝ๐๐๐ฃ๐ซ๐๐ฃ๐๐๐ค ๐๐ก ๐๐ง๐ช๐ฅ๐ค${groupname}`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adeus @${number}. Jรก vai tarde ๐`
}
exports.bye = bye