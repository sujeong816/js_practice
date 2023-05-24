<template>
    <h1>ExamThree</h1>
    <div>
        <select v-model="color">
            <option>yellow</option>
            <option>green</option>
            <option>blue</option>
            <option>red</option>
        </select> 
    </div>
    <div class="box" v-bind:class="color">
        ExamThreeChild
    </div>
</template> 

<script>
export default {
    name: 'ExamThree',
    data() {
        return { color: "yellow" };
    }
} 
</script> 
<style scoped> 
div.box {
     display: inline-block;
     padding: 20px;
     width: 400px;
     border: 1px solid gray;
 }

 select {
     padding: 5px;
     font-size: 15pt;
     width: 150px;
     margin: 10px;
     margin-bottom: 20px;
 }

 .yellow {
     background-color: #ffa;
 }

 .green {
     background-color: #bfb;
 }

 .blue {
     background-color: #bbf;
 }

 .red {
     background-color: #fbb;
 }</style>