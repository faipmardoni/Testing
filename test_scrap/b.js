const rp = require('request-promise');
const cheerio = require('cheerio');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('postId.json')
const db = low(adapter)

db.defaults({ posts: [], user: {} }).write()

const getPostId = async (uri) => {
  console.log(uri)
  try {
    const $ = await rp({
      uri,
      transform: (body) => {
          return cheerio.load(body, { includeScripts: false })
      }
    })
    const temp = $('#comment_post_ID')
    if (temp) return temp.val()
    return null
  } catch (error) {
    console.log('error getPostId')
    console.log(error)
  }
}

const getPosting = async (uri) => {
  console.log(uri)
  try {
    const $ = await rp({
        uri,
        transform: (body) => {
            return cheerio.load(body, { includeScripts: false })
        }
    })
    textNode = $('.post-listing .post-box-title a')
    if (textNode) return textNode.attr('href')
    return null
  } catch (error) {
    console.log('error getPosting')
    console.log(error)
  }
}

const scrape = async (id) => {
  try {
    const url = 'https://www.anisubindo.video/?s=https%3A%2F%2Fanifiles.org%2F' + id
    const posting = await getPosting(url)
    const postID = posting ? await getPostId(posting) : null
    const wp_id = postID ? postID : null
    console.log(postID)
    await db.get('posts')
    .push({
      shortURL: id,
      posting,
      wp_id
    })
    .write()
  } catch (error) {
    console.log('error scrape')
    console.log(error)
  }
}

urls = ['2DR0','33Iz','33RT','Xri','Xc8','34VD','Xc7','2EY5','WkK','33Iy','1NE6','2DR2','2EQg','34VC','33Ix','33SH','2EQf','2EK6','34VB','Xc6','WkI','34My','1myF','34TG','2EQh','1NE5','1NQ1','2DOu','33SG','WkH','WkD','2CXu','WMh','34TF','X2k','2EVm','2cPz','Wyb','2DOr','1Nzr','1Nqu','WkL','1myE','Xgv','2EY4','2EK5','34VG','1O0M','2ESc','Xsb','33SF','X16','1NeE','Xlt','1ND4','2EVl','2CPH','X24','wjq','1NzF','1Ovu','Xl5','Ynd','2E00','2DOj','2DR4','1Nwt','2DXd','2dEi','34XS','2EYp','2CRv','2EKm','Xgq','Ydd','1Ntp','X0v','34Ry','Y06','34Mx','2EK7','2EQo','Y1s','1OR6','WM4','2EYc','Xco','2EKa','2ETa','Xox','34WE','WTj','1OhH','34Mz','2DOv','Y5s','2EZn','X2j','2EZv','351z']
async function processArray(urls) {
  for (let i in urls) {
    console.log(`process ke-${i} dari ${(urls.length)}`)
    await scrape(urls[i])
  }
  console.log('Done')
}

processArray(urls)
