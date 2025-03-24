ToDoList = [
]

const ToDoMachine = {

    data() {
        return {
            ToDoList: window.ToDoList,
            newToDo:{
                todo: null,
                done: false,
            }
        }
    },
    methods:{
        AddToDo: function(){
            if(this.newToDo.todo){

                this.ToDoList.push(this.newToDo)
                this.newToDo = {};
                localStorage.setItem("ToDos", JSON.stringify(this.ToDoList))
            }
            else{
                alert("Preencha todos os campos");
            };

            
            
        },

        CleanToDo: function(){
            this.ToDoList = [];
            
        }
    },
    created(){
        this.ToDoList = localStorage.getItem("ToDos") ? JSON.parse(localStorage.getItem("ToDos")) : this.ToDoList;
    },
    updated(){
        localStorage.setItem("ToDos", JSON.stringify(this.ToDoList))
    }

};

Vue.createApp(ToDoMachine).mount('#app');
