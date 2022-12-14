// * ABIENTE DI SVILUPPO IN VUE

const {createApp} = Vue;



createApp({
    data(){
        return{
            toDoActions : [
                {
                    text:'Fare i compiti',
                    done: false,
                },

                {
                    text:'Fare la spesa',
                    done: true,
                },

                {
                    text:'Portare il cane a passeggio',
                    done: false,
                },

                {
                    text:'Cambiare la busta della spazzatura',
                    done: true,
                },

                {
                    text:'Cambiare la ciotola al cane',
                    done: true,
                },

                {
                    text:'Dare il cibo ai gatti',
                    done: false,
                },

                {
                    text:'Cucinare',
                    done: true,
                },

                {
                    text:'Studiare per l\'esame',
                    done: true,
                },

                {
                    text:'Andare in palestra',
                    done: false,
                },

                {
                    text:'Fare la ricarica telefonica',
                    done: false,
                },
            ],

            newToDoAction : '',

            isTheClassPresent : false, 
        }
    },



    methods: {
        removeElementOfTheList(list,index){
            list.splice(index,1);
        },

        addElementToTheList(list,newElementText){
            newElementText = newElementText.toLowerCase();

            if(newElementText !='' && newElementText.length>=2){
                const newElement = {
                    text: newElementText,
                    done: false,
                }
    
                list.push(newElement);
            }
        },

        changeBooleanValue(index){
            this.toDoActions[index].done = !this.toDoActions[index].done;
        },

        toggleClass(element,elementClass){
            console.log(element)
        }
    },
}).mount('#app')