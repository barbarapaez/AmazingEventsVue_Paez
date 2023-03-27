//desestructuración de una variable
const { createApp } = Vue

    createApp({
        data() {
        return {
            message: 'Hello Vue!'
        }
        }
    }).mount('#app')