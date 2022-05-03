
module.exports = (req, res, next) => {
    console.log("Yo soy un middleware");

    return next();
}














// NOTES
// console.log("Yo soy un middleware");