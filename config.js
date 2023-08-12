/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
        address: "0.0.0.0",
        port: 8080,
        basePath: "/",
        ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

        useHttps: false,
        httpsPrivateKey: "",
        httpsCertificate: "",

        language: "en",
        locale: "en-US",
        logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
        timeFormat: 12,
        units: "imperial",

        modules: [
                {
                        module: "alert",
                },
        {
            module: "WallberryTheme",
            position: "fullscreen_below", // Required Position
            config: {
              unsplashAccessKey: "<<<<<unsplashKey>>>>>", // REQUIRED
              collections: "<<<<<collectionID>>>>>", // optional - leave empty for a random photo
              addBackgroundFade: ["top"],
              autoDimOn: true,
              brightImageOpacity: 0.65

            }
        },
                {
                        module: "updatenotification",
                        position: "top_bar"
                },
                {
                        module: "clock",
                        position: "top_left",
            config: {
                showSunTimes: true,
                showDate: true,
                showWeek: true,
                displaySeconds: false

            }
                },
                {
                        module: "calendar",
                        header: "Schedule",
                        position: "top_left",
                        config: {
                                calendars: [
                                        {
                                                fetchInterval: 7 * 24 * 60 * 60 * 1000,
                                                symbol: "calendar-check",
                                                url: "<<<<<CalendarIcalLink>>>>>"
                                        }
                                ]
                        }
                },
        {
            module: "MMM-pihole-stats",
            position: "top_left", // Or any valid MagicMirror position.
            config: {
                apiURL: "<<<<<PiholeAdminPHPLink>>>>>",
              apiToken: "<<<<<PiHoleAPIKey>>>>>",

            }
        },
        {
                        module: "MMM-OnSpotify",
                        position: "bottom_center", /* bottom_left, bottom_center */
                        config: {
                                displayWhenEmpty: "none",
                                mediaAnimations: false,
                                fadeAnimations: false,
                                transitionAnimations: false,
                                showBlurBackground: false,
                                clientID: "<<<<<clientID>>>>>",
                                clientSecret: "<<<<<clientSecret>>>>>",
                                accessToken: "<<<<<accessToken>>>>>",
                                refreshToken: "<<<<<refreshToken>>>>>"
                        }
                },
                {
                        module: "weather",
                        position: "top_right",
                        config: {
                                weatherProvider: "openweathermap",
                                type: "current",
                                location: "<<<<<location>>>>>",
                                locationID: "<<<<<LocationID>>>>>", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                                apiKey: "<<<<<APIKey>>>>>"
                        }
                },
                {
                        module: "weather",
                        position: "top_right",
                        header: "Weather Forecast",
                        config: {
                                weatherProvider: "openweathermap",
                                type: "forecast",
                                location: "<<<<<location>>>>>",
                                locationID: "<<<<<LocationID>>>>>", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                                apiKey: "<<<<<APIKey>>>>>"
                        }
                },
                {
            module: "MMM-ServerStatus",
            position: "top_right",       // Choose a position
            config: {
                hosts: [    // For example
                    { name: "MKE UDM", ip: "<<<<<someIP>>>>>" },
                    { name: "WS UDMSE", ip: "<<<<<someIP>>>>>" },
                    { name: "DNS1", ip: "<<<<<someIP>>>>>" },
                    { name: "DNS2", ip: "<<<<<someIP>>>>>" },
                    { name: "DNS3", ip: "<<<<<someIP>>>>>" },
                    { name: "DNS4", ip: "<<<<<someIP>>>>>" },
                ],
            },
        },
                {
                        module: 'MMM-WiFiPassword',
                        position: "bottom_right",
                          config: {
                                //See 'Configuration options' for more information.
                                network: "<<<<<SSID>>>>>",
                                password: "<<<<<PW>>>>>",
                                showPassword: false,
                                showNetwork: false,
                                showAuthType: false,

                          }
                }
        ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
