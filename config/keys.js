module.exports = {
    "mongoURI": process.env.MONGODB_URI || 'mongodb://travelynx.herokuapp.com',
    "jwtSecret": "TL_myJwtSecret"
}

// {
//     "mongoURI": "process.env.MONGOLAB_URI_BRONZE || 'mongodb://localhost/travelynx'",
//     "jwtSecret": "TL_myJwtSecret"
// }