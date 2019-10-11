new Vue({
    el: '#app',
    data: {
        healthYou: 100,
        healthMonster: 100,
        battleStarted: false,
        battleHistory: [],
        hasHistory: false
    },
    methods: {
        attack: function() {
            var damage = Math.floor(Math.random() * 5) + 6;
            this.healthMonster -= damage;
            this.battleHistory.unshift({
                information: 'PLAYER HITS PLAYER FOR ' + damage,
                turn: 'player'
            })
            if ( !this.isWon() ) {
                this.monsterAttack();
            }
        },
        battleStart: function() {
            this.healthYou = 100;
            this.healthMonster = 100;
            this.battleHistory = [];
            this.hasHistory = false;
            this.battleStarted = true;
        },
        heal: function() {
            var heal = Math.floor(Math.random() * 5) + 6;
            this.healthYou += heal;
            this.healthYou > 100 ? this.healthYou = 100 : null;
            this.battleHistory.unshift({
                information: 'PLAYER HEALS HIMSELF FOR ' + heal,
                turn: 'player'
            })
            this.monsterAttack();
        },
        isWon: function() {
            if ( this.healthMonster <= 0 ) {
                this.healthMonster = 0;
                confirm("You win! New game?") ? this.battleStart() : this.battleStarted = false;
                return true;
            }
            return false;
        },
        monsterAttack: function() {
            var monsterAttack = Math.floor(Math.random() * 7) + 6;
            this.healthYou -= monsterAttack;
            this.hasHistory = true;
            this.battleHistory.unshift({
                information: 'MONSTER HITS PLAYER FOR ' + monsterAttack,
                turn: 'monster'
            })
            if ( this.healthYou <= 0 ) {
                this.healthYou = 0;
                confirm("You died! New game?") ? this.battleStart() : this.battleStarted = false;
            }
        },
        specialAttack: function() {
            var damage = Math.floor(Math.random() * 11) + 10;
            this.healthMonster -= damage;
            this.battleHistory.unshift({
                information: 'PLAYER HITS PLAYER FOR ' + damage,
                turn: 'player'
            })
            if ( !this.isWon() ) {
                this.monsterAttack();
            }
        }
    }
})