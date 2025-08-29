const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    computed: {
        computedNum() {
            if(this.result < 37) {
                return 'Not there yet';
            } else if(this.result == 37) {
                return this.result;
            } else {
                return 'Too much!';
            }
        }
    },

    methods: {
        number(n) {
            this.result += n;
        }
    },

    watch: {
        computedNum() {
            console.log("Watcher triggered, resetting in 1 second");
            const that = this;
            setTimeout(() => {
                that.result = 0;
            }, 5000);
        }
    }
});

app.mount('#assignment')