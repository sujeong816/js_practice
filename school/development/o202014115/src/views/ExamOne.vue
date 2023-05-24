<template>
 <div class="one">
    <h1>ExamOne</h1> 
    
    <p>202014115</p>
    <p>김수정</p>
    <p>{{ time }}</p>
</div> 
</template> 

<script> 
import moment from "moment"
export default { 
    name: "ExamOne", 
    data() {
        return { time: null };
    }, mounted() {
        let callback = () => this.time = moment().format("HH:mm:ss"); 
        callback(); 
        setInterval(callback, 1000); 
    }
} 
</script> 
