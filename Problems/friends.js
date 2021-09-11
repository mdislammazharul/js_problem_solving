let friends = ['Md Mazharul Islam', 'Md Azharul Islammmmmmmm', 'Md Kamrul Islammmmmmmmmmmmmm', 'Md Foqrul Islam']

let large = 0
for (const fr of friends) {
    if (fr.length > large) {
        large = fr.length
        largeName = fr
    }
}
console.log(largeName)