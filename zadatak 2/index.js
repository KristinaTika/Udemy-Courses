(function () {

    var listOfPlayers = [];
    // var names = ["Pera", "Mika", "Laza", "Zika", "Slika"];
    
    for (var i = 0; i <= 4; i++) {
        listOfPlayers.push(new Player());
    }
    
    // console.log(listOfPlayers);

    function Player() {
        var name = Math.floor(Math.random() * listOfPlayers.length);
        this.name = name;
        this.health = 10;
        this.rechargeTime = (1000 * this.health / 100);
        this.damage = this.health / 100;
        this.criticalChance = parseFloat((10 - this.health / 10));
    }

    Player.prototype.attack = function (opponent) {
        opponent.health = opponent.health - this.damage;
        console.log("Player " + this.name + " is attacking the player " + opponent.name + "\n" + "\t" + "Remaining health of the player " + opponent.name + " is: " + opponent.health + "%");
    }

    Player.prototype.doubleDamage = function () {
        if (this.criticalChance >= Math.floor(Math.random() * (100 - 1) + 1)) {
            this.damage = this.damage * 2;
            console.log("Player " + this.name + " is causing double damage to the opponent");
        }
    }

    Player.prototype.rechargeHealth = function () {

    }

    var randomPlayer = Math.floor(Math.random() * listOfPlayers.length);
    var randomPlayer2 = Math.floor(Math.random() * listOfPlayers.length);

    if (listOfPlayers.length >= 2) {
        attackTime();
    } else {
        console.log("Game over! There are no more players to fight!")
    }

    function attackTime() {

        var p1 = listOfPlayers[randomPlayer];
        var p2 = listOfPlayers[randomPlayer2];

        if (p1.health > 0) {
            var fight = setInterval(attackOpponent, 100);
            function attackOpponent() {
                p1.attack(p2);
                p1.doubleDamage();

                if (p2.health <= 0) {
                    console.log("Player " + p2.name + " is dead!");
                    listOfPlayers.pop(p2);
                    console.log(listOfPlayers.length);
                    
                    clearInterval(fight);
                }
            }
        }
    }

    function stopAttack(fight) {
        clearInterval(fight);
    }

})();

