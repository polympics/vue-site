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
            + ` expires=${expiresAt.toUTCString()}; SameSite=Strict; Path=/`;
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
    },

    /** Check if the user can manage an account.
     *
     * If the return value is 0, the user cannot manage the account.
     * From least to most significant, the bits of the return value mean:
     * - The user can manage the account's permissions.
     * - The user can manage the account's details.
     * - The user can manage the account's team.
     */
    canManage: (accountId, ownAccount) => {
        const P = polympics.PolympicsPermissions;
        const canChangeTeam = (
            ownAccount.permissions & P.manageAccountTeams ||
            ownAccount.id.toString() === accountId.toString()
        ) ? 1 : 0;
        const canChangeDetails =
            (ownAccount.permissions & P.manageAccountDetails) ? 1 << 1 : 0;
        const canChangePermissions =
            (ownAccount.permissions & P.managePermissions) ? 1 << 2 : 0;
        return canChangeTeam | canChangeDetails | canChangePermissions;
    }
}
