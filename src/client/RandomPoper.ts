import { Cachable } from "@rbxts/class-cache";

export class RandomPoper extends Cachable {
	part: BasePart;

	constructor() {
		super();
		this.part = new Instance("Part");
	}

	hide(): void {
		this.part.PivotTo(this.defaultCFrame);
		this.part.Anchored = true;
		this.part.CanCollide = false;
		this.part.AssemblyLinearVelocity = new Vector3(0, 0, 0);
	}

	setParent(parent: Instance | undefined): void {
		this.part.Parent = parent;
	}

	create(): RandomPoper {
		return new RandomPoper();
	}

	gotten(): void {
		this.part.Color = new Color3(math.random(), math.random(), math.random());
		this.part.Size = new Vector3(math.random(1, 3), math.random(1, 3), math.random(1, 3));
	}

	Pop(position: Vector3): void {
		this.part.Anchored = false;
		this.part.CanCollide = true;
		this.part.PivotTo(new CFrame(position));

		const randUpwardsForce = new Vector3(math.random(-10, 10), math.random(10, 300), math.random(-10, 10));
		this.part.ApplyImpulse(randUpwardsForce.mul(this.part.AssemblyMass));

		this.part.ApplyAngularImpulse(new Vector3(math.random(-10, 10), math.random(-10, 10), math.random(-10, 10)));
	}
}
