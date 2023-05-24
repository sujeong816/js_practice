<template>
    <div class="two">
        <h1>ExamTwo</h1>
        <table>
            <tr>
                <td>ID</td>
                <td>이름</td>
                <td>나이</td>
                <td></td>
            </tr>
            <tr v-for="(person, index) in persons" v-bind:key="person.id">
                <td>{{ person.id }}</td>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td><button type="button" v-on:click="remove(index)">삭제</button></td>
            </tr>
        </table>
    </div>
</template> 
   
<script>
export default {
    name: "ExamTwo",
    data() {
        return {
            persons: [
                { id: 101, name: "홍길동", age: 16},
                { id: 102, name: "임꺽정", age: 18 },
                { id: 103, name: "장길산", age: 19 },
                { id: 104, name: "이몽룡", age: 17}
            ],
        };
    },
    methods: {
        remove(index) { 
            if (confirm("삭제하시겠습니까?")) 
                this.persons.splice(index, 1); 
        }
    }
}
</script> 
<style scoped> 
table { border-collapse: collapse; width: 400px;
        margin-left: auto; margin-right: auto;} 
td { padding: 5px; border: 1px solid #aaa; text-align: center; } 
td:nth-child(4) { width: 50px; } 
tr:nth-child(1) { background-color: #ddd; }
 </style>