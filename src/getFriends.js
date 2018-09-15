import axios from "axios"
import chalk from "chalk"

let getFriends = async access_token => {

    let request = await axios({
        url: 'https://graph.facebook.com/v1.0/me?fields=friends&access_token=' + access_token,
        method: 'GET',
        headers: {
            "User-Agent": "[FBAN/FB4A;FBAV/1.9.9;FBDM/{density=1.33125,width=800,height=1205};FBLC/en_US;FBCR/;FBPN/com.facebook.katana;FBDV/Nexus 7;FBSV/4.1.1;FBBK/0;]",
            "Content-Type": "application/json"
        }
    })

    if (request.status != 200)
        throw chalk.bold.bgRed.white('An error occurred: getFriends() - ' + request.status)
    return request.data
}

let getFb_dtsg = async cookies => {

    let request = await axios({
        url: 'https://mbasic.facebook.com/',
        headers: {
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, sdch',
            'accept-language': 'en-US,en;q=0.8,en-AU;q=0.6',
            'cookie': cookies,
            'dnt': '1',
            'origin': 'https://mbasic.facebook.com',
            'referer': 'https://mbasic.facebook.com/',
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36'
        }
    })

    if (request.status != 200)
        throw chalk.bold.bgRed.white('An error occurred: getFb_dtsg() - ' + request.status)
    return request.data
}

export {
    getFriends,
    getFb_dtsg
}