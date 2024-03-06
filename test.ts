let a: number = 5
let b: string = '5'

let c = a + b

let t: number = a + Number(b)

let d = true

let names: string[] = ['test1', 'test2']

let tup: [number, string] = [4, 'test']
// tup.push('test 2')

let e: any = 3
e = 'test'
e = true

let anyArr: any[] = ['test', true, 3]


function greet(name: string): string {
	return name
}

names.map((x: string) => x)


function coord(coord: { lat?: number, long: number }) {

}

