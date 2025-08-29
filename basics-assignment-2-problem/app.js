const app = Vue.createApp({
    data() {
        return {
            input: '',
            newInput: '',
            output: ''
        }
    },
    methods: {
        showAlert() {
            alert('Show Alert : Clicked!');
        },

        handleInput(evt) {
            this.input = evt.target.value;
        },

        handleNewInput(evt) {
            this.newInput = evt.target.value;
        },

        updateOutput() {
            this.output = this.newInput;
        }




    }
});

app.mount('#assignment');