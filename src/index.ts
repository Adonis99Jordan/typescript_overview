function getuserInput() {
    const userName = prompt('Please type your name');
    const age: any = prompt('Please enter your age');

    const userData = {
        userName: userName,
        age: age
    };

    return userData;
}