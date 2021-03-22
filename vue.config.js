module.exports = {
    pwa: {
        name: "Polympics Web Dashboard",
        themeColor: "#cc2b31",
        msTileColor: "#18181b",
        iconPaths: {
            favicon32: "img/icons/favicon-32x32.png",
            favicon16: "img/icons/favicon-16x16.png",
            appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
            msTitleImage: "/img/icons/msapplication-icon-144x144.png"
        },
        workboxOptions: {
            skipWaiting: true
        }
    }
};
