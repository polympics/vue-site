/** JS utils common to multiple pages. */
const common = {
    /** Get a cookie. */
    getCookie: (name) => {
        const pattern = new RegExp(`^ *${name} *= *(.*)`);
        const cookies = document.cookie.split(";");
        for (const cookie of cookies) {
            const match = cookie.match(pattern);
            if (match) return match[1];
        }
        return "";
    },

    /** Set a cookie. */
    setCookie: (name, value, { daysLasts = 30 } = {}) => {
        var expiresAt = new Date();
        expiresAt.setTime(
            expiresAt.getTime() + (1000 * 60 * 60 * 24 * daysLasts));
        document.cookie = `${name}=${value};`
            + ` expires=${expiresAt.toUTCString()}`;
    },

    /** Delete a cookie. */
    deleteCookie: (name) => {
        common.setCookie(name, "", { daysLasts: 0 });
    },

    /** Get the Polympics client, authenticated or unauthenticated. */
    getClient: (apiUrl) => {
        const username = common.getCookie("username");
        const password = common.getCookie("password");
        if (!(username && password)) {
            return new polympics.UnauthenticatedClient({ apiUrl: apiUrl });
        }
        return new polympics.UserClient({
            credentials: {
                username: username, password: password
            },
            apiUrl: apiUrl
        });
    },

    /** Store user credentials in cookies. */
    login: (credentials) => {
        common.setCookie('username', credentials.username);
        common.setCookie('password', credentials.password);
    },

    /** Delete user credential cookies. */
    logout: () => {
        common.deleteCookie('username');
        common.deleteCookie('password');
    }
}
