let str="sv university"
console.log(str.length);
console.log(str.length-1)
console.log(str[0])
console.log(str[str.length-1])
// str[0]="r"
console.log(str)
let arr=[1, 2, 5, "abc", 12, true, false, null, undefined]
console.log(arr[arr.length-2])
arr.push("cse")
console.log(arr)
arr.pop()
console.log(arr)
let obj={
    abc:'gg',
    bcv:30,
    bv:"new work",
    nm:['a', 'b', 3]
}
console.log(obj)
console.log(obj.bcv)
console.log(obj.nm)
delete obj.bcv
console.log(obj)
obj.rjv={a:3, b:'vc', c:26}
console.log(obj)


let name="abc"
let Class ="btech cse"
let sunjects=["abc","bcd"]
let newobj={
    name,Class,sunjects
}
console.log(newobj)

let ans=[1,2,[3,4,5,[7,8,9]]]
console.log(ans[2][3][0])

let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}
console.log(superHeroes[1].villains[0].name)
console.log(superHeroes[2].villains[0].name)
console.log(superHeroes[2].villains[1].health)
console.log(superHeroes[2].villains[1].name)