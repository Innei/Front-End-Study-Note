// Proxy(对象, 处理器)

const handler = {
    set(target, key, value) {
        target[key] = value.match(/[0-9]+/g).join('-')
        console.log(target[key])
    },
    get(target, key) {
        console.log(target[key])
        return target[key]
    }
}

const obj = {}

const proxy = new Proxy(obj, handler);
proxy.one = '122 33 22'