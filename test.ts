const a = 'string'

let b: 'hi' = 'hi'

type direction = 'left' | 'right'

function moveDog(direction: direction): -1 | 0 | 1 {
	switch (direction) {
		case 'left':
			return -1
		case 'right':
			return 1
		default:
			return 0
	}
}

moveDog('left')

interface IConnection {
	host: string
	port: number
}

function connect(connection: IConnection | 'default') {

}

connect('default')
connect({ host: '', port: 22 })


const connection = {
	host: 'localhost',
	protocol: 'https' as 'https'
}

function connect2(host: string, protocol: 'https' | 'http') {

}

connect2(connection.host, connection.protocol)