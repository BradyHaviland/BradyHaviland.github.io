

class boardGame {

    #time;
    


    constructor(name, price, time, image){
        this.name = name;
        this.price = price;
        this.#time = time;
        this.image = image;

        this.#print();

    }

    // Methods (behaviors of the class)
    #print(content) {
        this.name = document.createElement("p").textContent = content.name;
        this.name = document.getElementsByTagName("p");
        this.price = document.createElement("p").textContent = content.price;
        this.#time = document.createElement("p").textContent = content.#time;
        this.image = document.createElement("p").textContent = content.image;


       //div.appendchild(this.name);
        //document.getElementById("media").appendChild(content.name);
        //document.getElementById("media").appendChild(content.name);
        //console.log(this.name);
        // console.log(this.name + " Prepares to attack " + enemy.name + "...")
        // if(this.#computeSuccess(enemy))
        //     console.log("... and the attack is successful!");
        // else
        //     console.log("... but the attack fails miserably!");
    }

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

const boardGame1 =  '{"Game Name": "Betrayal At House On The Hill", "Price": 49.97, "Estimated Play Time": 60 , "Image": "images/betrayalgame.jpeg"}';
const boardGame2 =  '{"Game Name": "Secret Hitler", "Price": 45.00, "Estimated Play Time": 45, "Image": "images/secret_hitler.jpeg"}';

const boardGame3 =  '{"Game Name": "Thats Not A Hat", "Price": 9.99, "Estimated Play Time": 15, "Image": "images/notahat.jpeg"}';




        

// const boardGameObject = JSON.parse(boardGame1);
// console.log(boardGame1);
// console.log(boardGame1.price);

let boardGameMedia = document.getElementById("media");
//boardGameMedia.appendChild(content.name);





// console.log(betrayalGame.toString());
// console.log(hatGame.toString());
// console.log(secretGame.toString());

//betrayalGame.print(betrayalGame.name);

