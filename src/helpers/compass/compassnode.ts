class CompassNode {
    left: CompassNode | null;
    right: CompassNode | null;

    constructor(public value: string) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export default CompassNode