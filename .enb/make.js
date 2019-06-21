let make = require("enb-make"),
    options = {
        platforms : {
            desktop : ['common', 'theme']
        },
        levels : [
            { path: 'node_modules/bem-fontawesome5', check: false }
        ],
    };

module.exports = function(config) {
    make.init(config, options)
        .initializeBundles()
        .initializeMergedBundles()
        .initializeTests()
        .initializeExamples();
};
