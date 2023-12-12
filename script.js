const { createApp } = Vue;

createApp({
    data() {
        return {
            email: [],
    
        }
    },

    methods: {
        newEmail(){


            for (let i = 0; index <= 9; index ++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                (response) =>{
                console.log(response);
                this.email.push(response.data.response);

            });
        }
    }

},
    created() {
        this.newEmail();
    },
}).mount('#app');