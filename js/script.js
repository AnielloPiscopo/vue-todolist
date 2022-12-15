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
            
            inputErrorValue: false,

            actualDate : '',
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

            this.refreshInputField();
            this.updateDate();
        },

        refreshInputField(){
            this.newToDoAction = '';
        },

        changeBooleanValue(index){
            this.toDoActions[index].done = !this.toDoActions[index].done;
        },

        changeClass(element){
            this.inputErrorValue = (element === '' || element.length<2) ? true:false;
        },

        updateDate(){
            const date = new Date();
            const dateItalianFormat = date.toLocaleDateString('ita');
            this.actualDate = dateItalianFormat;
        }
    },
}).mount('#app')