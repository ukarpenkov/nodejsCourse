module.exports = function rand(min = 0, max = 10) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}
