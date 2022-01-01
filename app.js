const login = async (username, password)=> {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'future') return 'Weclome'
    throw 'Invalid Password'
}

login('Li', 'future')
.then((msg)=>{
    console.log("Logged In")
    console.log(msg)
})
.catch((err)=>{
    console.log('ERROR')
    console.log(err)
})