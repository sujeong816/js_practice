<template>
    <div> 
        <h1>ExamFour</h1> 
        <table> 
            <tr>
                <td>index</td>
                <td>value</td>
            </tr> 
            <tr v-for="num in nums" v-bind:key="num.id"> 
                <td>{{ num.id }}</td> 
                <td>{{ num.val }}</td> 
            </tr> 
        </table> 
        <p>
            ExamFourChild
            <input type="text" v-model="val" /> 
            <button type="button" v-on:click="addNum">전달</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "ExamFour",
    data() {
        return {
            nums: [], val: "", id: 0
        }
    },
    methods: {
        addNum: function() {
            this.nums.push({id: ++this.id, val: this.val})
            this.val = ""
        }
    }
}
</script>
<style scoped>  
table { border-collapse: collapse; margin: 20px 0; width: 100%; } 
tr:nth-child(1) { background-color: #eee; text-align: center; } 
td { border: 1px solid gray; padding: 6px; } 
td:nth-child(1) { text-align: center; } 
input[type=text] { padding: 5px; margin-right: 5px; width: 300px; } 
button { padding: 0.3em 1.5em; } 
p { border: 1px solid black; padding: 30px; margin: 30px auto;
    width: 400px; background-color: rgb(255, 255, 206);}

</style>