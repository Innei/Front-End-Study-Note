function* loop() {

    for (let i = 0; i < 100; i++) {
        yield i;

    }
}


for (let i = loop(), j = 0; j < 100; j++) {
    console.log(i.next().value)
}
