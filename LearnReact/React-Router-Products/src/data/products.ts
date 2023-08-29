interface Game {
  id: number;
  name: string;
  description: string;
  score: number;
  price: number;
  imageUrl: string;
}

export const Products: Game[] = [
  {
    id: 1,
    name: "The Last of Us",
    description: "Super cool, plant monsters and shooting, spooky fun times",
    score: 9,
    price: 39.99,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg",
  },
  {
    id: 2,
    name: "Elden Ring",
    description:
      "Hard as hell, have patience, must love souls games and be good or else will rage",
    score: 10,
    price: 69.99,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Elden_Ring_Box_art.jpg/220px-Elden_Ring_Box_art.jpg",
  },
  {
    id: 3,
    name: "Resident Evil 4 Remake",
    description: "Good graphics in remake, must play if have not yet played.",
    score: 8,
    price: 59.99,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Resident_Evil_4_remake_cover_art.jpg/220px-Resident_Evil_4_remake_cover_art.jpg",
  },
  {
    id: 4,
    name: "Hogwarts Legacy",
    description:
      "All hype no substance. Only potter fanboys and girls will enjoy it",
    score: 6,
    price: 29.99,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Hogwarts-Legacy-cover.jpg/220px-Hogwarts-Legacy-cover.jpg",
  },
  {
    id: 5,
    name: "Super Mario Odyssey",
    description: "Cute, fun, coop is worth it, cool hat thing is alive",
    score: 7,
    price: 49.99,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg",
  },
];
