import Cookies from "next-cookies";

export function unauthPage(context) {
    return new Promise(resolve => {
        const allCookies = Cookies(context);

        if (allCookies.token) {
            context.res.writeHead(302, {
                Location: '/posts'
            }).end()
        }
        return resolve('unauthorized')
    })
}

export function authPage(context) {
    return new Promise(resolve => {
        const allCookies = Cookies(context);

        if (!allCookies.token) {
            context.res.writeHead(302, {
                Location: '/'
            }).end()
        }
        return resolve({
            token: allCookies.token
        })
    })
}