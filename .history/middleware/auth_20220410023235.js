
module.exports = (req, res, next) => {
    console.log("Yo soy un middleware");

    return next();
}