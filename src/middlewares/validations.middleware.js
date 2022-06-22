const sayBye = (req, res, next) => {
    console.log('Bye World')
    next()
}

module.exports = {
    sayBye
}