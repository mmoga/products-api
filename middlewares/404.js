module.exports = function notFoundHandler(req, res, next){
    res.status(404).send('Lions, tigers, and bears—Oh my! Nothing to see here.')
}