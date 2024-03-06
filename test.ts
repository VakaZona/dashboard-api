enum Direction {
	Left = "left",
	Right = 'right'
}

Direction.Left

function move(direction: Direction) {
	switch (direction) {
		case Direction.Left:
			return -1
		case Direction.Right:
			return 1
	}
}

