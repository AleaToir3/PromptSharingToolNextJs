const user1 = { name: "Alice" };
const user2 = null;


const getUserName = (nom)=>{
 return nom?.name ? (nom.name) : ("nom incocooc")
}


console.log(getUserName(user1)); // "Alice"
console.log(getUserName(user2)); // "Nom inconnu"
