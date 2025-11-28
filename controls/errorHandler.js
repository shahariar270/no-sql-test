const notFoundHandler = (req, res, next)=>{
    res.status(404).json({
        success:false,
        status:404,
        massage:'Route Not Found'
    })
}


const badRequestHandle = (err, req, res, next)=>{
    res.status(err.status || 500 ).json({
        success:false,
        status:err.status || 500,
        massage: 'Bad Request Server Crash'
    })
}

module.exports = {notFoundHandler, badRequestHandle}
