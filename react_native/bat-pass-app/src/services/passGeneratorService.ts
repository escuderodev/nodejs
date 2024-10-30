export default function passGenerator() {
    let password: string = ''
    let characters: string = '@#$AaBcDdefGHi@#$Jkl@$#mnOP@qrst#UVxZ@#$1234567890'
    const passwordLength = 8

    for(let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}