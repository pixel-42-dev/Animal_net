let express = require(`express`);
let app = express();
let port = 3000;
app.use(express.static('public'));

const hbs = require('hbs');
app.set('views', 'views');
app.set('view engine', 'hbs');

app.listen(port, function() {
    console.log('Сервер запущен!');
});

let users = [
    {username: 'Кот Задира', avatar: 'cat.png', status: "Привет, я - Кот Задира. Я - настоящий центр внимания в мире кошек! Я всегда настойчиво требую внимания и ласки, но только тогда, когда мне это удобно. Я умею играть со своими людьми и делать смешные шалости, но только когда я хочу. Я очень самостоятельный, но и зависимый, ведь я знаю, что мои люди не могут без меня. Я умный, грациозный и очень умею управлять своим окружением!", online: "В сети"},
    {username: 'Гордый Орёл', avatar: 'eagle.png', status: "Я - Гордый Орёл! Я символ свободы, силы и власти. Я обитаю в высоких горах и могу летать на большие расстояния. Я всегда готов защищать свою территорию и свою свободу. Моя власть и красота впечатляют всех, кто меня видит. Я один из самых гордых и мощных хищников в мире животных!", online: "В сети: 10 лет назад"},
    {username: 'Спокойный Слон', avatar: 'elephant.png', status: "Я - Спокойный Слон! Я символ мудрости и спокойствия в мире животных. Я очень уравновешенный и терпеливый, но могу быть очень сильным, если это необходимо. Я умею долго запоминать и анализировать информацию, что делает меня мудрым и разумным существом. Я обладаю огромной силой и могу перемещаться на большие расстояния, но предпочитаю медленную и спокойную жизнь. Я всегда готов помочь своим друзьям и защитить их в трудную минуту.", online: "В сети: вчера"},
    {username: 'Мудрая Сова', avatar: 'owl.png', status: "Приветствую, я - Мудрая Сова! Я символ мудрости и знаний в мире животных. Я очень умна и знаю много интересных вещей. Я умею летать на большие расстояния и ночью могу видеть в темноте, что делает меня очень уникальным и полезным созданием. Я часто пребываю в одиночестве, но всегда готова поделиться своей мудростью и знаниями со своими друзьями. Я - Мудрая Сова, и моя мудрость поможет вам найти решение любой проблемы!", online: "В сети: 2 часа назад"},
    {username: 'Обидчивая Рыба', avatar: 'puffer-fish.png', status: "Я - Обидчивая Рыба! Я очень чувствительная и эмоциональная. Я люблю, когда меня общаются и дарят внимание, но мне очень трудно простить обиду или предательство. Я обычно укрываюсь в своей пещере или прячусь от мирской суеты, когда мне плохо. Я не люблю изменения и предпочитаю стабильность в своей жизни. Я - Обидчивая Рыба, и моя чувствительность делает меня очень уязвимой, но и интересной личностью!", online: "В сети: 2 дня назад"},
    {username: 'Трудолюбивый Ленивец', avatar: 'sloth.png', status: "Я - Трудолюбивый Ленивец! Кажется, это противоречие, но я на самом деле очень трудолюбивый и ответственный. Я просто не люблю тратить энергию на вещи, которые мне не нравятся или которые не считаю важными. Я предпочитаю проводить большую часть своего времени в своей уютной ленивой обитель, но когда приходит время работать, я всегда готов к действию. Я медленный, но точный и всегда выполняю свои обязанности на 100%. Я - Трудолюбивый Ленивец, и я знаю, что труд приносит удовольствие, но я также знаю, когда мне нужно отдохнуть и расслабиться.", online: "В сети"},
    {username: 'Гремучая Змея', avatar: 'snake.png', status: "Привет, я - Гремучая Змея! Я символ опасности и силы в мире животных. Я очень ядовита и опасна для многих животных, поэтому являюсь одним из самых страшных хищников в своей экосистеме. Я очень быстра и проворна, что делает меня очень эффективным охотником. Но, несмотря на мой опасный образ, я всегда буду защищать свою территорию и свою семью. Я - Гремучая Змея, и моя сила и опасность позволяют мне быть главным игроком в мире природы.", online: "В сети: 5 дней назад"},
];

app.get(`/users`, function(req, res) {
    res.render(`index`, {
        avatar1: `cat.png`,
        name1: 'Кот Задира',
        avatar2: `eagle.png`,
        name2: 'Гордый Орёл',
        avatar3: `elephant.png`,
        name3: 'Спокойный Слон',
        avatar4: `owl.png`,
        name4: 'Мудрая Сова',
        avatar5: `puffer-fish.png`,
        name5: 'Обидчивая Рыба',
        avatar6: `sloth.png`,
        name6: 'Трудолюбивый Ленивец',
        avatar7: `snake.png`,
        name7: 'Гремучая Змея',
    });
})
app.get(`/user`, function(req, res) {
    let id = Number(req.query.id);
    res.render(`user`, {
        avatar: users[id].avatar,
        status: users[id].status,
        online: users[id].online
    });
})