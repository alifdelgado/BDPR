export class TowersOfHanoi {
	public solve(
		disk: number,
		source: string,
		middle: string,
		destination: string
	): void {
		if (disk === 0)
			return console.log(`Plate ${disk} from ${source} to ${destination}`);

		this.solve(disk - 1, source, destination, middle);
		console.log(`Plate ${disk} from ${source} to ${destination}`);
		this.solve(disk - 1, middle, source, destination);
	}
}
