//Exercise 1

function StringFormatter() {
    const capitalizeFirst = function(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }

    const toSkewerCase = function(str) {
        return str.split(" ").join("-")
    }

    return {
        capitalizeFirst,
        toSkewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box


//Exercise 2

function Bank(){
    let money = 500

    const depositCash = function(cash) {
        money += cash
    }

    const checkBalance = function(){
        console.log(money)
    }
    
    return {
        deposit : depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950


//Exercise 3

function SongsManager() {
    const songs = {}
    const addSong = function(name, url) {
        const id = url.split("watch?v=")[1]
        songs[name] = id
    }
    const getSong = function(name) {
        return "https://www.youtube.com/watch?v=" + songs[name]
    }
    return {
        addSong,
        getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ