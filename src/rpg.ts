// Imports
import input from "./input.js";

// Creates entity class
class Entity {
	health = 100;
	damage = 10;
	name = "default";
	attack(target: Entity): void {
		target.health = target.health - this.damage;
	}

	heal(healing: number): void {
		this.health = this.health + healing;
	}
}

const player = new Entity();
player.health = 150;
player.damage = 15;
player.name = await input("My name is: ");
let enemy = new Entity();
enemy.health = 1500;
enemy.damage = 50;
enemy.name = "Err";
async function loop(): Promise<void> {
	console.clear();
	console.log("Player Name: " + player.name);
	console.log("Player Health: " + player.health);
	console.log("Player Damage: " + player.damage);

	console.log("Enemy Name: " + enemy.name);
	console.log("Enemy Health: " + enemy.health);
	console.log("Enemy Damage: " + enemy.damage);

	console.log("Choose your option:");
	console.log("[1] Attack");
	console.log("[2] Heal");
	const option = parseInt(await input("Option: "));

	if (option == 1) {
		player.attack(enemy);
		console.log(player.name + " dealt " + player.damage + " to " + enemy.name);
	} else if (option == 2) {
		player.heal(60);
		console.log(player.name + " healed 60 hp");
	}

	if (enemy.health <= 0) {
		console.log(enemy.name + " died!");
		enemy = new Entity();
		enemy.health = 5000;
		enemy.damage = 5;
		enemy.name = "Unknown";
		console.log(enemy.name + " spawned in its place.");
	} else {
		enemy.attack(player);
		console.log(enemy.name + " dealt " + enemy.damage + " to " + player.name);
	}
	if (player.health <= 0) {
		console.log("You died!");
		process.exit(0);
	} else {
		console.log("Press enter to continue.");
		await input();
		loop();
	}
}
loop();
