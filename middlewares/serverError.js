module.exports = function serverErrorHandler(err, req, res, next){
    res.status(500).json({
        msg: "something done broke"
    })
}