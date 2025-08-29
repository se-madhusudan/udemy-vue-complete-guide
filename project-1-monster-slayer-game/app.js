function randomValue(max, min) {
    return Math.floor(Math.random() * (max - min) + min); //Formula to genrate random number in range Math.random() * (max - min) + min
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            result: null,
            logMessages: [],
        }
    },
    computed: {
        monsterHealthBar() {
            if(this.monsterHealth < 0){
                return { width: '0%' };
            } 
            return { width: this.monsterHealth + "%"};
        },
        playerHealthBar() {
            if(this.playerHealth < 0 ){
                return { width: '0%'};
            } 
            return { width: this.playerHealth + "%"};
        },
        specialAttackDisable() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) this.result = 'draw';
            else if(value <= 0) this.result = 'player';
        },
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) this.result = 'draw';
            else if(value <= 0) this.result = 'monster';
            // console.log('monster health: ', this.monsterHealth, '  |  ', 'player health: ', value);
        }
    },
    methods: {
        startGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.currentRound = 0;
            this.result = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = randomValue(10, 5);
            this.logMessage('player', 'attack', attackValue);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = randomValue(13, 7);
            this.logMessage('monster', 'attack', attackValue);
            this.playerHealth -= attackValue;
        },
        specialAttack() {
            this.currentRound++;
            const attackValue = randomValue(26, 15);
            this.logMessage('player', 'attack', attackValue);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = randomValue(30, 15);
            this.logMessage('player', 'heal', healValue);
            if(this.playerHealth + healValue > 100) this.playerHealth = 100;
            else this.playerHealth += healValue;
            this.attackPlayer();
        },
        surrender() {
            this.result = 'monster';
        },
        logMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionResult: value
            });
        }
    }
});

app.mount('#game')