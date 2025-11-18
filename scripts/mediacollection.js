class boardGame {

    #time;


    constructor(name, price, time, image){
        this.name = name;
        this.price = price;
        this.#time = time;
        this.image = image;
    }

    // Methods (behaviors of the class)
    print(content) {
       document.createElement("img").innerHTML = this.content;
        document.getElementById("media").appendChild(content.image);
        console.log(content.image);
        // console.log(this.name + " Prepares to attack " + enemy.name + "...")
        // if(this.#computeSuccess(enemy))
        //     console.log("... and the attack is successful!");
        // else
        //     console.log("... but the attack fails miserably!");
    }

    // defend(enemy) {
    //     console.log(this.name + " Prepares to defend against " + enemy.name + "...")

    // }

    toString(){
        return "Name: " + this.name + ". Price: $" + this.price + " Gameplay time is " + this.time + " minutes.";
    }

    get time(){
        return this.#time;
    }

    set time(value) {
        this.#time = value < 0 ? 30 : value;
    }

    

}
let betrayalGame = new boardGame("Betrayal At House on the Hill", 49.97, 60, "../images/betrayalgame.jpeg");
let hatGame = new boardGame("That's Not A Hat", 9.99, 15, "../notahat.jpeg");
let secretGame = new boardGame("Secret Hitler", 45.00, 45, "../images/secret_hitler.jpeg");

console.log(betrayalGame.toString());
console.log(hatGame.toString());
console.log(secretGame.toString());

betrayalGame.print(betrayalGame);