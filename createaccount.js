// npm install steem
// Придумайте логин и пароль для нового аккаунта
const NAME = "myawesomelogin"
const PASS = "PaSsWoRd12345"
const golos = require('steem')
golos.config.set('websocket', "wss://steemd.steemitdev.com")

// Данные создателя аккаунта
// Активный ключ создателя (вашего существующего аккаунта)
const wif= "5XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

// Комиссия блокчейну за создание аккаунта
const fee= "0.200 STEEM"

// Логин создателя (вашего существующего аккаунта)
const creator= "steemit"



// Профиль пользователя. О себе, аватар, и т.д. , можно оставить пустым и заполнить позднее
const jsonMetadata= {
	
}


let x = golos.auth.generateKeys(NAME, PASS, ['owner','active','posting','memo'])
const ownerAuth = {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [[x.owner, 1]]
}
const activeAuth = {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [[x.active, 1]]
}
const postingAuth = {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [[x.posting, 1]]
}
const memoKey= x.memo

const ext =""

golos.broadcast.accountCreate(wif, fee, creator, NAME, 
ownerAuth, 
activeAuth, 
postingAuth, 
memoKey, 
jsonMetadata, 
ext,
(err, result) => {
  if(err) return console.log(err);
    console.log(result)
});
