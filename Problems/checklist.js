let object = [
    { name: 'abul', roll: 5 },
    { name: 'babul', roll: 2 },
    { name: 'kabul', roll: 8 },
    { name: 'dabul', roll: 1 },
    { name: 'habul', roll: 9 },
]

for (const obs of object) {
    if (obs.roll == 1) {
        obs.name = 'Mazhar'
    }
}

console.log(object)