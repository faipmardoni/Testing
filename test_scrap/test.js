const puppeteer = require('puppeteer');
const rp = require('request-promise');
const cheerio = require('cheerio');
let downloadLink;
let zippyURL;
let urls = [
    'https://www.kurogaze.top/kakuriyo-no-yadomeshi-episode-26-tamat-subtitle-indonesia/'
];

let scrape = async (params) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const linkZippy = [];

    for (let p of params) {
        await page.setJavaScriptEnabled(false)
        await page.goto(p);
        const domain = extractRootDomain(p);
        switch (domain) {
            case "kurogaze.top":
                downloadLink = await page.evaluate(() => {
                    let result = [];
                    for (let i = 2; i <= 9; i++) {
                        for (let j = 2; j <= 5; j++) {
                            let dLink = document.querySelector(`#content > div.postsbody > div.articles > div.singlecontent > div.dl-box > div:nth-child(${i}) > a:nth-child(${j})`);
                            if(dLink) result.push(dLink.href);
                        }
                    }
                    return result;
                });
                for (let d of downloadLink) {
                    var lastURL = d.split('?r=')[1];
                    if (!lastURL) lastURL = d.split('?site=')[1];
                    var oriURL = base64_decode(lastURL);
                    if (oriURL && oriURL.includes('zippyshare')) linkZippy.push(oriURL);
                }
                break;
            case "samehadaku.tv":
                downloadLink = await page.evaluate(() => {
                    const s720p = document.querySelector('#the-post > div > div:nth-child(3) > div:nth-child(11) > ul > li:nth-child(3) > span:nth-child(4) > a:nth-child(2)').href;
                    const s480p = document.querySelector('#the-post > div > div:nth-child(3) > div:nth-child(11) > ul > li:nth-child(2) > span:nth-child(4) > a:nth-child(2)').href;
                    const s360p = document.querySelector('#the-post > div > div:nth-child(3) > div:nth-child(13) > ul > li:nth-child(1) > span:nth-child(4) > a:nth-child(2)').href;
                    const s240p = document.querySelector('#the-post > div > div:nth-child(3) > div:nth-child(17) > ul > li:nth-child(2) > span:nth-child(4) > a:nth-child(2)').href;
                    return [s720p, s480p, s360p, s240p];
                });
                for (let d of downloadLink) {
                    await page.goto(d);
                    const tetew = await page.evaluate(() => {
                        return document.querySelector('#splash > div > div.c-message > div.download-link > a').href;
                    });
                    await page.goto(tetew);
                    const greget = await page.evaluate(() => {
                        return document.querySelector('#splash > div > div.c-message > div.download-link > a').href;
                    });
                    const lastURL = greget.match(/\/([^\/]+)\/?$/)[1];
                    const oriURL = base64_decode(lastURL.substr(3));
                    linkZippy.push(oriURL);
                }
                break;
            default:
                break;
        }
    }

    browser.close();
    return linkZippy;
};

scrape(urls).then(res => {
    res.forEach(r => {
        console.log(r);
        get_ddl_zippy(r);
    })
})

function get_ddl_zippy(uri) {
    rp({
        uri,
        transform: (body) => {
            return cheerio.load(body, { includeScripts: true })
        }
    }, function(e, res) {
        zippyURL = res.request.uri.href
    })
        .then(($) => {
            var textNode = $('script').map((i, x) => x.children[0]).filter((i, x) => x && x.data.match('getElementById')).get(0).data.split(';')
            const a = textNode[0].split("=")
            return a[1].split(" + ")
        })
        .then(result => {
            let math1 = result[1].replace("(", "")
            let math2 = result[2].replace(")", "")
            const sum = eval(math1 + "+" + math2)
            const zippy = getDownload(uri)
            const fileName = result[3].split("\"")[1]
            const ddl = zippyURL = zippy + sum + fileName
            console.log(ddl)
        })
}

function base64_decode(w) {
    var m, b, z, k, x, q, A, y, v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        s = 0,
        j = 0,
        u = "",
        p = [];
    if (!w) {
        return w
    }
    w += "";
    do {
        k = v.indexOf(w.charAt(s++)), x = v.indexOf(w.charAt(s++)), q = v.indexOf(w.charAt(s++)), A = v.indexOf(w.charAt(s++)), y = k << 18 | x << 12 | q << 6 | A, m = y >> 16 & 255, b = y >> 8 & 255, z = 255 & y, 64 == q ? p[j++] = String.fromCharCode(m) : 64 == A ? p[j++] = String.fromCharCode(m, b) : p[j++] = String.fromCharCode(m, b, z)
    } while (s < w.length);
    return u = p.join(""), decodeURIComponent(escape(u.replace(/\0+$/, "")))
}

function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}

function extractHostname(url) {
    var hostname;
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}

function getDownload(url) {
    return 'https://' + url.split('/')[2] + '/d/' + url.split('/')[4] + "/"
}
