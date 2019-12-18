module.exports = function print(msg) {
    var stars = "";

    for (var i = 0; i < msg.length; i++) {
        stars += "*";
    }
    console.log(stars);
    console.log(msg);
    console.log(stars);
};