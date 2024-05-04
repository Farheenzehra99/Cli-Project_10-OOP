import inquirer from "inquirer";
import chalk from "chalk";
class Client {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    clients = [];
    addClient(obj) {
        this.clients.push(obj);
    }
}
const persons = new Person();
const programmStrat = async (persons) => {
    do {
        console.log(chalk.redBright.bold.italic("Welcome Guest"));
        const ans = await inquirer.prompt({
            type: "list",
            message: "Who would you like to talk to?",
            name: "select",
            choices: ["MySelf", "Client", "Exit"], // Added "Exit" option
        });
        if (ans.select === "MySelf") {
            console.log(chalk.greenBright.bold(`Hello M Talking with Myself`));
            console.log(chalk.blue.bold(`Now I am Fine`));
        }
        if (ans.select === "Client") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Which Client do you want to talk to?",
                name: "Client",
            });
            const client = persons.clients.find((val) => val.name === ans.Client);
            if (!client) {
                const name = new Client(ans.Client);
                persons.addClient(name);
                console.log(`Hello i am ${chalk.yellowBright.bold.italic(name.name)}, Now I am Fine`);
                console.log(persons.clients);
            }
            if (client) {
                console.log(`Hello i am ${chalk.yellowBright.bold.italic(client.name)}, Now I am Fine...........`);
                console.log(persons.clients);
            }
        }
        if (ans.select === "Exit") { // Check if "Exit" option is selected
            break; // Break the loop
        }
    } while (true); // Keep the loop running
};
programmStrat(persons);
