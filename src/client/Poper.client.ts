import { ClassCache } from "@rbxts/class-cache";
import { RandomPoper } from "./RandomPoper";

const RunService = game.GetService("RunService");
const Workspace = game.GetService("Workspace");

const cache = new ClassCache<RandomPoper>(new RandomPoper(), Workspace, 5);

const interval = 0;
let t = 0;

function create() {
	const range = 5;
	const randPos = new Vector3(math.random(-range, range), 4, math.random(-range, range));

	const poper = cache.get();
	poper.Pop(randPos);

	task.delay(math.random(2, 5), () => {
		poper.cache?.return(poper);
	});
}

RunService.Heartbeat.Connect((dt: number) => {
	t += dt;
	if (t >= interval) {
		t = 0;
		create();
		create();
		create();
	}
});
