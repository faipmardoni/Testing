const rp = require('request-promise');
var request = require('request');
const cheerio = require('cheerio');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('driveId-2.json')
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
      const table = textNode.parent().parent().parent().parent()
      const col = textNode.parent().parent().children().index(textNode.parent())
      const row = textNode.parent().parent().parent().children().index(textNode.parent().parent())
      const res = table.children().children().eq(row + 1).find('td').eq(col).children().attr('href');
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
    let res = ''
    let gdriveId = ''
    if (drive) {
      res = await getID(drive)
      if (res) {
        gdriveId = res.split('id=')[1]
      } else {
        res = ''
      }
    } else {
      drive = ''
    }
    console.log(gdriveId)
    await db.get('posts')
    .push({ wp_id: id, shortUrl: short, gdriveId })
    .write()
  } catch (error) {
    console.log('error scrape')
    console.log(error)
  }
}

urls = ['18219','16694','12245','14917','15942','17195','17119','17269','13769','18182','17087','18235','17038','9586','17155','17276','18169','18174','17125','12245','17458','18197','18257','17180','17263','12245','17185','16720','17052','13238','18257','14973','17058','10840','17458','17155','15017','17010','17172','18169','17052','17081','10840','14973','17160','14921','18187','17195','18272','18219','17200','17213','17165','18272','18219','17044','17073','17269','17172','17044','17087','17015','14917','15069','14917','17109','17087','17038','17033','17010','17119','15942','17213','17109','18174','15942','17125','13238','17058','17165','18201','17180','18303','17276','18197','1790','17263','15017','18174','18191','18288','16926','18182','17058','17010','14921','17165','15069','17113','17160','17185','17276','15069','17065','18182','14921','16926','17125','18187','17160','17185','17200','17119','18197','17280','14981','17065','17038','17073','18118','17044','17263','18187','17081','17269','18049','17081','18250','17015','14981','1790','15017','17073','17015','13238','17033','18191','17052','18154','18257','14981','17180','17200','13769','16720','18118','18191','12245','18235','16926','18201','17280','18303','17195','17458','18118','17155','18154','18169','17113','17038','18303','17033','18201','18288','18288','15069','9586','18174','17172','10840','15017','17073','17180','17280','17213','14917','17165','18154','17125','18219','18250','18250','15942','14981','17058','17065','17119','17109','17276','17113','17263','17200','17015','14973','17160','14921','17087','16926','18272','18191','18182','17010','17044','17280','18154','18197','18303','18187']

shortUrls = ['1Pcr','wj8','Ynh','Yte','wja','Zac','1otS','1PbB','wjd','Z9s','Yta','1Par','1P9M','1mF2','2EKt','1OwB','1P8p','1P8y','1PaK','Yng','Yvc','1P9I','1PdG','Yum','Z9w','Yni','1Owt','2EKd','X07','1Otu','1PdE','1osx','1Oty','Z3v','Yva','2EKv','1Oax','Yo7','Yuj','1P8r','X05','Ysw','Z3t','1Otp','Yso','Yt2','1PbE','Zaa','Z7d','1Pcs','Zdp','1PeE','Yue','Z7b','1Pcq','Yri','1Ouo','1Pbz','Yuh','Yrj','Yt9','Yob','Ytf','Yvf','Ytd','Yt7','Ytb','1P9N','1P9A','Yo8','1OuN','wjb','1PeC','Yt5','1P8z','wj9','1PaL','1Ott','1Otz','Yuf','1P9E','Yun','1Pbo','1OwC','1P9J','1MY2','Z9x','1Oay','1P8x','Z82','1phx','Ytq','Z9t','1Otx','Yo6','Yt1','Yud','Yvg','1P8u','Ysp','1Ows','1ovG','Yve','Yss','Z9r','Yt3','Ytp','1PaJ','1PbD','Ysn','1Owu','Zdq','1otR','1P9H','Z3q','wj6','Ysr','1P9L','1Oup','Z6a','Yrh','Z9v','1PbF','Ysx','1PbC','1Opr','Ysv','1PdB','Yoc','wj5','1MY3','1Oaw','Ysz','Yoa','1Otv','1P9B','Z83','X08','Z66','1PdH','wj7','Yul','Zdo','wjg','2EKg','Z6b','Z81','Ynj','1Pas','Ytr','1P9F','Z3r','1Pbp','Zad','Yvd','Z69','2EKw','Z65','1P8s','1P8v','Z80','Z9z','1P9z','1P9D','1Pis','1phw','Yvh','1mF3','1P8A','Yuk','Z3w','1Oaz','1Ouq','Yuc','Z3p','1PeF','Ytg','Yug','Z67','1PaM','1Pct','1PdA','1PdC','wjc','wj4','1osG','Yst','Yt0','Yt8','1OwD','1P8t','Z9y','Zdr','Yod','1osy','Ysq','Yt4','Ytc','Yts','Z7e','Z84','Z9u','Yo9','Yrk','Z3s','Z68','1P9K','1Pbq','1PbG']
async function processArray(urls) {
  for (let i in urls) {
    console.log(`process ke-${i} dari ${(urls.length)}`)
    await scrape(urls[i], shortUrls[i])
  }
  console.log('Done')
}

processArray(urls)
