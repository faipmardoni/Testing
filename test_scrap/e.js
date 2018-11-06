const rp = require('request-promise');
var request = require('request');
const cheerio = require('cheerio');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('driveId-3.json')
const db = low(adapter)

db.defaults({ posts: [], user: {} }).write()

const getID = async (uri) => {
  try {
    var r = await rp({uri, resolveWithFullResponse: true});
    if(r.req) return r.req.path
    return null
  } catch (error) {
    console.log('error getID')
    console.log(error)
  }
}

const getDrive = async (uri, short) => {
  console.log(uri)
  try {
    const $ = await rp({
        uri,
        transform: (body) => {
            return cheerio.load(body, { includeScripts: true })
        }
    })
    textNode = $(`a[href*="${short}"]`)
    if (textNode) {
      // const table = textNode.parent().parent().parent().parent()
      // const col = textNode.parent().parent().children().index(textNode.parent())
      // const row = textNode.parent().parent().parent().children().index(textNode.parent().parent())
      // const res = table.children().children().eq(row + 1).find('td').eq(col).children().attr('href');
      const res = textNode.next().attr('href')
      return res
    }
    return null
  } catch (error) {
    console.log('error getDrive')
    console.log(error)
  }
}

const scrape = async (id, short) => {
  try {
    const url = 'https://www.anisubindo.video/?p=' + id
    const url2 = 'https://anifiles.org/' + short
    let drive = await getDrive(url, url2)

    let temp = ''
    if (drive) {
      temp = drive.split('id=')[1]
    }
    console.log(temp)
    await db.get('posts')
    .push({ wp_id: id, shortUrl: short, gdriveId: temp })
    .write()

    // let res = ''
    // let gdriveId = ''
    // if (drive) {
    //   res = await getID(drive)
    //   if (res) {
    //     gdriveId = res.split('id=')[1]
    //   } else {
    //     res = ''
    //   }
    // } else {
    //   drive = ''
    // }
    // console.log(gdriveId)
    // await db.get('posts')
    // .push({ wp_id: id, shortUrl: short, gdriveId })
    // .write()
  } catch (error) {
    console.log('error scrape')
    console.log(error)
  }
}

urls = ['17731','17689','17731','17560','17432','18363','17432','18448','16732','17689','17655','17731','18257','18363','17689','17751','18257','18169','18363','17432','6293','18235','6830','18257','18257','17655','17731','17705','17751','6293','16720','12245','17195','18257','12245','18257','720','720','12245','12245','12245','16745','6830','12245','18448','18169','18235','17195','18235','720','17751','720','720','720','17195','18257','12245','16720','16694','17269','12245','17195','12245','17269','17269','17195','17593','12245','720','18235','18235','16720','12245','17269','17269','17195','17195','17269','720','18235','18169','12245','12245','12245','12245','17269','17195','16720','17269','17269','17269','17269','17195','18235','17705','17195','12245','12245','17269','18235']

shortUrls = ['2DR0','33Iz','33RT','Xri','Xc8','34VD','Xc7','2EY5','WkK','33Iy','1NE6','2DR2','2EQg','34VC','33Ix','33SH','2EQf','2EK6','34VB','Xc6','WkI','34My','1myF','34TG','2EQh','1NE5','1NQ1','2DOu','33SG','WkH','WkD','2CXu','WMh','34TF','X2k','2EVm','2cPz','Wyb','2DOr','1Nzr','1Nqu','WkL','1myE','Xgv','2EY4','2EK5','34VG','1O0M','2ESc','Xsb','33SF','X16','1NeE','Xlt','1ND4','2EVl','2CPH','X24','wjq','1NzF','1Ovu','Xl5','Ynd','2E00','2DOj','2DR4','1Nwt','2DXd','2dEi','34XS','2EYp','2CRv','2EKm','Xgq','Ydd','1Ntp','X0v','34Ry','Y06','34Mx','2EK7','2EQo','Y1s','1OR6','WM4','2EYc','Xco','2EKa','2ETa','Xox','34WE','WTj','1OhH','34Mz','2DOv','Y5s','2EZn','X2j','2EZv','351z']

// urls = ['17269']
// shortUrls = ['2DOj']
async function processArray(urls) {
  for (let i in urls) {
    console.log(`process ke-${i} dari ${(urls.length)}`)
    await scrape(urls[i], shortUrls[i])
  }
  console.log('Done')
}

processArray(urls)
