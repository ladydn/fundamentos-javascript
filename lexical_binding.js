//lexical binding
const finctionalCharacter = {
    name: 'Walter White',
    messageWithTraditionalFunction: function(message){
    console.log(`${this.name} dice: ${message}`);
    },

    //en esta parte no existe un vinculacion
    messageWithArrowFunction: (message) =>{
      console.log(`${this.name} dice: ${message}`);
    }
}
finctionalCharacter.messageWithTraditionalFunction('I am the one who knocks');
finctionalCharacter.messageWithArrowFunction('I am the danger');