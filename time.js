var id = document.getElementById('datenow')
var id2 = document.getElementById('datenow2')
var id3 = document.getElementById('cm')
var down = 0
function nowdate() {
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var date1 = now.getDate()
    var hour = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    let day_arr = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)']
    let day = day_arr[now.getDay()];

    if (minutes <= 9) {
        minutes = '0' + minutes
    }
    if (seconds <= 9) {
        seconds = '0' + seconds
    }
    if (hour <= 9) {
        hour = '0' + hour
    }
    id.innerText = year + '年' + month + '月' + date1 + '日' + day
    id2.innerText = hour + ':' + minutes + ':' + seconds
    id2.style.color = '#191970';
    if (id2.innerText >= '09:00:00') {
        cm.innerText = '朝礼まで'
    }
    if (id2.innerText >= '09:45:00') {
        cm.innerText = '1限目'
        //cm.innerText='授業終了まで'
    }
    if (id2.innerText >= '10:45') {
        cm.innerText = '2限目'
    }
    if (id2.innerText >= '11:45:00') {
        cm.innerText = '3限目'
    }
    if (id2.innerText >= '12:35:00') {
        cm.innerText = '昼休み'
    }
    if (id2.innerText >= '13:15:00') {
        cm.innerText = '4限目'
    }
    if (id2.innerText >= '14:15:00') {
        cm.innerText = '5限目'
    }
    if (id2.innerText >= '15:15:00') {
        cm.innerText = '6限目'
    }
}
setInterval(nowdate, 0)
