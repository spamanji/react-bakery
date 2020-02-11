// Dummy data for writing components before hooking to API
function Cake(id, name, imageUrl, yumFactor, ...comments) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.yumFactor = yumFactor;
    this.comments = comments;
}

const cakes = [
    new Cake(1, 'first cake', 'https://source.unsplash.com/yHQfZ9TuZn4/800x600', 3, 'great cake!', 'yummy cake!'),
    new Cake(2, 'second cake', 'https://source.unsplash.com/4rfVL3NNGrA/800x600', 2, 'ok cake!', 'not great!'),
    new Cake(3, 'third cake', 'https://source.unsplash.com/tW0Ix_Ajg6Y/800x600', 4, 'superb cake!'),
    new Cake(4, 'fourth cake', 'https://source.unsplash.com/idTwDKt2j2o/800x600', 5, 'best cake ever!'),
]

export default cakes;