class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    info() {
        console.log(`Hi, I'm ${this.name}, my email is ${this.email}`);
    }

    // 静态方法只有在原型对象上调用, 无法在实例对象上调
    static description() { 
        console.log(`I'm a user`);

    }

    // 设置属性时调用函数
    set github(value) {
        this.github_name = value;
    }

    // 读取属性时调用函数
    get github() {
        return this.github_name;
    }
}

const people1 = new User('user1', 'i@');

