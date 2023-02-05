let personName: string = '詹炜权'
let age: number = 22
let isGood: boolean = true
let myNull: null = null
let myUndefined: undefined = undefined
let placeStay: string[] = ['深圳市', '龙岗区']
let placeStayType2: Array<string> = ['布吉街道', '布吉新村']
let myTuple: [string, number, boolean] = ['1', 2, false]
let myObj: Object = {name: 'obj', isObj: true, zz: {zz: 1}}
enum Color {Red, Green, Black}
let moreColor: Color = Color.Green
let notSure: any = ''
console.log({personName, age, isGood, myNull, myUndefined, placeStay, placeStayType2, myTuple, myObj, moreColor})