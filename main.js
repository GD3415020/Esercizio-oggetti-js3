let bowling = {
    players: [
        { name: 'Giovanni', scores: [] },
        { name: 'Marco', scores: [] },
        { name: 'Luca', scores: [] },
        { name: 'Antonio', scores: [] },
        { name: 'Elena', scores: [] },
        { name: 'Lina', scores: [] },
    ],

    punteggio: function () {
        this.players.forEach(player => {
            for (i = 0; i < 10; i++) {
                player.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }
            console.log(player);
        });
    },

    addPlayer: function (nome) {
        let newP = { name: nome, scores: [] };
        for (i = 0; i < 10; i++) {
            newP.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
        }
        this.players.push(newP);
        this.players.forEach(player => {
            console.log(player);
        });
    },

    finalScore: function () {
        this.players.forEach(player => {
            let finalScore = player.scores.reduce((acc, score) => acc + score);
            player.tot = finalScore;
        })
        this.players.sort((a, b) => b.tot - a.tot);
        console.log(`${bowling.players.name}: punteggio ${player.tot}`);
    }
};

bowling.punteggio();
// bowling.addPlayer(`Ciccio`);
bowling.finalScore();

