export class GCD {
	public gcdRecursion(a: number, b: number): number {
		if (a % b === 0) return b;

		return this.gcdRecursion(b, a % b);
	}

	public gcdIterative(a: number, b: number): number {
		let temp: number = 0;
		while (b != 0) {
			temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}
}
