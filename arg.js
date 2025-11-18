function arg(name) {
    throw new Error(`Missing: ${name}`);
}
module.exports = arg;
