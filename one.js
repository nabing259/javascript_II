const isUserPresent = (user, list) => {
    if(list.includes(user)) {
        return(`Yes, ${user} is a valid user.`);
    }
    else {
        return(`No, ${user} is not a valid user`);
    }
}

console.log(isUserPresent('user1', ['user1', 'user2', 'user3']));
