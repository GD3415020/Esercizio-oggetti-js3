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
            console.log(player.scores);
        })
        // let score = 0;
        // finalScore = this.players.scores.reduce((acc, score) => acc + score, score)
    },

    addPlayer: function (name) {
        let newP = { name: nome, scores: []};
        for (i = 0; i < 10; i++) {
                newP.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }
        this.players.push(newP);
        console.log(newP.scores);
        
    }
}

bowling.punteggio();
bowling.addPlayer(`Ciccio`);

