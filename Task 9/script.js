/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */


class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
    }
  
    wasExpensive() {
      return this.budget > 100000000;
    }
  }

const laLaLand = new Movie('La La Land', 'Damien Chazelle', 30000000);
console.log(laLaLand.wasExpensive()); // false

const avengersEndgame = new Movie('Avengers: Endgame', 'Anthony and Joe Russo', 356000000);
console.log(avengersEndgame.wasExpensive()); // true
