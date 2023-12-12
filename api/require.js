const func = require(process.cwd() + "/folder/file.js")

module.exports = async (req, res) => {
    res.send(func())
};