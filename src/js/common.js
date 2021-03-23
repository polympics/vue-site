/** JS utils common to multiple pages. */

/** Get a cookie. */
export function getCookie(name) {
    const pattern = new RegExp(`^ *${name} *= *(.*)`);
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const match = cookie.match(pattern);
        if (match) return match[1];
    }
    return "";
}

/** Set a cookie. */
export function setCookie(name, value, { daysLasts = 30 } = {}) {
    const expiresAt = new Date();
    expiresAt.setTime(expiresAt.getTime() + 1000 * 60 * 60 * 24 * daysLasts);
    document.cookie =
        `${name}=${value};` +
        ` expires=${expiresAt.toUTCString()}; SameSite=Strict; Path=/`;
}

/** Delete a cookie. */
export function deleteCookie(name) {
    setCookie(name, "", { daysLasts: 0 });
}

/** Get the Polympics client, authenticated or unauthenticated. */
export function getClient() {
    const username = getCookie("username");
    const password = getCookie("password");
    if (!(username && password)) {
        return new polympics.UnauthenticatedClient({
            apiUrl: process.env.VUE_APP_API_URL
        });
    }
    return new polympics.UserClient({
        credentials: {
            username: username,
            password: password
        },
        apiUrl: process.env.VUE_APP_API_URL
    });
}

/** Store user credentials in cookies. */
export function login(credentials) {
    setCookie("username", credentials.username);
    setCookie("password", credentials.password);
}

/** Delete user credential cookies. */
export function logout() {
    deleteCookie("username");
    deleteCookie("password");
}

/** Check if the user can manage an account.
 *
 * If the return value is 0, the user cannot manage the account.
 * From least to most significant, the bits of the return value mean:
 * - The user can manage the account's permissions.
 * - The user can manage the account's details.
 * - The user can manage the account's team.
 * - The user can delete the account.
 */
export function canManage(accountId, ownAccount) {
    const P = polympics.PolympicsPermissions;
    const isOwnAccount = ownAccount.id.toString() === accountId.toString();
    const canChangeTeam =
        ownAccount.permissions & P.manageAccountTeams || isOwnAccount ? 1 : 0;
    const canChangeDetails =
        ownAccount.permissions & P.manageAccountDetails ? 1 << 1 : 0;
    const canChangePermissions =
        ownAccount.permissions & P.managePermissions ? 1 << 2 : 0;
    const canDeleteAccount = canChangeDetails || isOwnAccount ? 1 << 3 : 0;
    return (
        canChangeTeam |
        canChangeDetails |
        canChangePermissions |
        canDeleteAccount
    );
}
