const rp = require('request-promise');
const cheerio = require('cheerio');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('wp.json')
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

urls = ['1Pcr','wj8','Ynh','Yte','wja','Zac','1otS','1PbB','wjd','Z9s','Yta','1Par','1P9M','1mF2','2EKt','1OwB','1P8p','1P8y','1PaK','Yng','Yvc','1P9I','1PdG','Yum','Z9w','Yni','1Owt','2EKd','X07','1Otu','1PdE','1osx','1Oty','Z3v','Yva','2EKv','1Oax','Yo7','Yuj','1P8r','X05','Ysw','Z3t','1Otp','Yso','Yt2','1PbE','Zaa','Z7d','1Pcs','Zdp','1PeE','Yue','Z7b','1Pcq','Yri','1Ouo','1Pbz','Yuh','Yrj','Yt9','Yob','Ytf','Yvf','Ytd','Yt7','Ytb','1P9N','1P9A','Yo8','1OuN','wjb','1PeC','Yt5','1P8z','wj9','1PaL','1Ott','1Otz','Yuf','1P9E','Yun','1Pbo','1OwC','1P9J','1MY2','Z9x','1Oay','1P8x','Z82','1phx','Ytq','Z9t','1Otx','Yo6','Yt1','Yud','Yvg','1P8u','Ysp','1Ows','1ovG','Yve','Yss','Z9r','Yt3','Ytp','1PaJ','1PbD','Ysn','1Owu','Zdq','1otR','1P9H','Z3q','wj6','Ysr','1P9L','1Oup','Z6a','Yrh','Z9v','1PbF','Ysx','1PbC','1Opr','Ysv','1PdB','Yoc','wj5','1MY3','1Oaw','Ysz','Yoa','1Otv','1P9B','Z83','X08','Z66','1PdH','wj7','Yul','Zdo','wjg','2EKg','Z6b','Z81','Ynj','1Pas','Ytr','1P9F','Z3r','1Pbp','Zad','Yvd','Z69','2EKw','Z65','1P8s','1P8v','Z80','Z9z','1P9z','1P9D','1Pis','1phw','Yvh','1mF3','1P8A','Yuk','Z3w','1Oaz','1Ouq','Yuc','Z3p','1PeF','Ytg','Yug','Z67','1PaM','1Pct','1PdA','1PdC','wjc','wj4','1osG','Yst','Yt0','Yt8','1OwD','1P8t','Z9y','Zdr','Yod','1osy','Ysq','Yt4','Ytc','Yts','Z7e','Z84','Z9u','Yo9','Yrk','Z3s','Z68','1P9K','1Pbq','1PbG']
async function processArray(urls) {
  for (let i in urls) {
    console.log(`process ke-${i} dari ${(urls.length)}`)
    await scrape(urls[i])
  }
  console.log('Done')
}

processArray(urls)
