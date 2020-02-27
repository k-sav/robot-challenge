import CompassNode from './compassnode'

class Compass {
    head: CompassNode | null;
    length: number;
    private tail: CompassNode | null;

    constructor(values: string[]) {
        this.length = 0
        this.head = null
        this.tail = null

        Array.from(new Set(values)).forEach(value => {
            this._push(value)
        })
    }

    find(value: string) {
        let node = this.head
        for (let i = 0; i < this.length; i++) {
            if (node.value === value) {
                return node
            }
            node = node.right
        }
        return node
    }

    _push(value: string) {
        // create a new node
        const newNode = new CompassNode(value)

        // if the list is empty,the new node should become the head and the tail
        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } else {
            // the current tail should point forward (= next) to the new node
            this.tail.right = newNode

            // the new node should point back (= prev) to the current tail
            newNode.left = this.tail

            // the new node should become the new tail
            this.tail = newNode

            // Loop head.left to tail, and tail.right to head 
            this.tail.right = this.head
            this.head.left = this.tail
        }

        // increase length by 1
        this.length += 1

        // return new node
        return newNode
    }
}

export default Compass

