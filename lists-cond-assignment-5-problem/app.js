const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            userTask: '',
            showList: true,
            actionText: '',
        }
    },
    computed: {
        buttonDisability() {
            if(this.tasks <= 0) this.actionText = 'Show/Hide'
            else this.actionText = 'Hide';
            return this.tasks.length <= 0;
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.userTask);
            this.userTask = '';
        },

        toggleList() {
            this.showList = !this.showList;
            if(this.showList) this.actionText = 'Hide'
            else this.actionText = 'Show'
        }
    }
});

app.mount('#assignment');