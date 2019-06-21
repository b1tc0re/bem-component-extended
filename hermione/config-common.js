'use strict';

const path = require('path'),
    serverPort = 8002,
    enableVNC = false;
module.exports = {
    gridUrl : getGridUrl(),
    //baseUrl : `http://127.0.0.1:${serverPort}`,
    baseUrl : `http://192.168.0.238:${serverPort}`,
    compositeImage : false,
    waitTimeout : 10000,
    screenshotsDir : test => path.join(path.dirname(test.file), 'screens', test.id(), test.browserId),
    screenshotOnRejectTimeout : 10000,
    sessionsPerBrowser : 20,
    retry : 3,
    windowSize: "1124x768",
    calibrate: true,
    browsers :  {
        'firefox-latest' : {
            desiredCapabilities : {
                version : '47.0',
                browserName : 'firefox',
                platform : 'LINUX',
                enableVNC: enableVNC,
            }
        },
        'chrome-old' : {
            desiredCapabilities : {
                version : '60.0',
                browserName : 'chrome',
                platform : 'LINUX',
                enableVNC: enableVNC,
                chromeOptions : {
                    prefs : {
                        browser : {
                            enable_spellchecking : false // Disable spellchecker
                        }
                    }
                }
            }
        },
        'chrome-latest' : {
            desiredCapabilities : {
                version : '75.0',
                browserName : 'chrome',
                platform : 'LINUX',
                enableVNC: enableVNC,
                chromeOptions : {
                    prefs : {
                        browser : {
                            enable_spellchecking : false // Disable spellchecker
                        }
                    }
                }
            }
        },
        'opera-old': {
            desiredCapabilities : {
                version : '52.0',
                browserName : 'opera',
                platform : 'LINUX',
                enableVNC: enableVNC,
                operaOptions : {
                    prefs : {
                        browser : {
                            enable_spellchecking : false // Disable spellchecker
                        }
                    },
                    binary: "/usr/bin/opera"
                }
            }
        },
        'opera-latest': {
            desiredCapabilities : {
                version : '60.0',
                browserName : 'opera',
                platform : 'LINUX',
                enableVNC: enableVNC,
                operaOptions : {
                    prefs : {
                        browser : {
                            enable_spellchecking : false // Disable spellchecker
                        }
                    },
                    binary: "/usr/bin/opera"
                }
            }
        }
    },

    plugins : {
        'html-reporter/hermione' : {
            enabled : true,
            path: '', // не работает в windows
            defaultView : 'all',
            baseHost: '127.0.0.1',
        }
    },

    prepareBrowser : function(browser) {
        browser.addCommand('setFocusedState', require('./commands/setFocusedState'));
        browser.extendOptions({deprecationWarnings: false});
    }
};

function getGridUrl() {
    const { SAUCE_USERNAME, SAUCE_ACCESS_KEY } = process.env;

    if(SAUCE_USERNAME && SAUCE_ACCESS_KEY) {
        return `http://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.saucelabs.com/wd/hub`;
    }

    console.warn('No SAUCE_USERNAME and SAUCE_ACCESS_KEY env was found. Local grid will be used.');
    return 'http://192.168.0.244:4444/wd/hub';
}
