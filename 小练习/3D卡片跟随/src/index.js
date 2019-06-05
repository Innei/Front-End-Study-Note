// UA检测
var browser = {
    versions: function () {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

if (browser.versions.mobile || browser.versions.android || browser.versions.ios) {
    const body = document.createElement('body')
    body.style.height = '100vh';
    body.innerHTML =
        `
        <div style=" top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height:2em;
    width:10em;
    margin: auto;position: absolute;"><span style="font-size=2rem;">请到桌面端进行浏览~~</span></div>
    
        `.trim()
    document.body.remove()
    document.documentElement.appendChild(body);
    throw "not PC";
}


const card = document.querySelector('.card')


card.onmousemove = function (e) {

    let width = this.style.width;

    const middle = width / 2;

    this.style.transform = `rotateX(${(e.offsetX - middle) / 30 - 10}deg) rotateY(${(e.offsetY - middle) / 30 - 30}deg)`

}

const mess = document.querySelector('.conversion')

mess.onclick = () => {
    mess.style.opacity = 0;
    document.body.classList.add('noblur')
    setTimeout(() => {
        mess.remove()
        document.querySelector('#landlord').removeAttribute('style')
    }, 500);
}

let contents = ['你好!', '这里是 yiny ~', '欢迎来到我的主页~~~~'];

const p = document.querySelector('.conversion > p')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

(async function () {
    for (let say of contents) {
        const letter = [...say]
        for (let l of letter) {
            await sleep(100);
            p.innerHTML += '<span>' + l + '</span>';


        } await sleep(500)
        p.innerHTML = '';
    };
    p.innerHTML = contents[contents.length - 1]
    await sleep(1000)
    mess.onclick()
})()

