type coord = { lat: number, lang: number }

interface ICoord {
	lat: number
	long: number
}


type ID = number | string
// type myString = string


function compute(coord: coord) {

}

function compute2(coord: ICoord) {

}

interface Animal {
	name: string
}

interface Dog extends Animal {
	tail?: boolean
}

const dog: Dog = {
	name: 'dog'
}

console.log(dog.name)

type AnimalType = {
	name: string
}

type DogType = Animal & {
	tail: boolean
}

interface Cat {
	name: string
}

interface Cat {
	tail: boolean
}

const cat: Cat = {
	name: 'test',
	tail: true
}
