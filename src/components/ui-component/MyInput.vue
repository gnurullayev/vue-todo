<template>
    <input 
    class="form-control"
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)"
    required 
    >
</template>

<script>
    export default {
        name:"MyInput",
        props:{
            modelValue: String,
        },
        emits: ["update:modelValue"],
    }
</script>

<style>

</style>