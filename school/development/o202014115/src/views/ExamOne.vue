<template>
 <div>
    <h1>할 일</h1> 
    <table> 
        <tr>
            <td>ID</td>
            <td>할일</td>
        </tr> 
        <tr v-for="one in todos" v-bind:key="one.id">
            <td>{{ one.id }}</td> 
            <td>
                <input type="checkbox" v-model="one.done" /> 
                {{ one.title }}
                <span v-on:click=" deleteTodo(index)">x</span>
            </td> 
        </tr> 
    </table> 
    <input type="text" v-model="title" />
    <button type="button" v-on:click="addTodo">등록</button>
 </div> 
</template> 

<script> 
export default { 
    name: "ExamOne", 
    data() { 
        return { 
            todos: [ 
                { id: 1, title: "과제", done: false }, 
                { id: 2, title: "시험공부", done: false }, 
                { id: 3, title:"코딩훈련", done: false } 
            ],
            title: "",
            lastId: 3
        } 
    },
    methods: {
        addTodo: function() {
            this.todos.push({id: ++this.lastId, title: this.title})
            this.title = ""
        },
        deleteTodo(index) {
            if(confirm("삭제?"))
                this.todos.splice(index, 1)
        }
    } 
} 
</script> 
<style scoped> 
h1 { border-bottom: 1px solid gray; } 
div { padding: 30px; margin: 30px auto; width: 400px; 
    border: 1px solid #ccc; 
    box-shadow: 3px 3px 3px #aaa; } 
table { border-collapse: collapse; margin: 20px 0; width: 100%; } 
tr:nth-child(1) { background-color: #eee; text-align: center; } 
td { border: 1px solid gray; padding: 6px; } 
td:nth-child(1) { text-align: center; width: 30px; } 
input[type=text] { padding: 5px; margin-right: 5px; width: 300px; } 
button { padding: 0.3em 1.5em; } 
span { font-weight: bold; margin-left: 10px; cursor: pointer; float: right;} 
tr.done { background-color: #f8f8f8; color: #bbb; text-decoration: line-through; } 
input[type=checkbox] { accent-color: #bbb; }
</style>