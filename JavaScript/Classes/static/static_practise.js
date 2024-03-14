class Article {
    static publisher = 'Nikita Barandiy';

    constructor(name, date) {
        this.name = name;
        this.date = date;
    }


    static Compare(ArticleA, ArticleB) {
        return ArticleA.date - ArticleB.date;
    }


    static CreateTodays(name) {
        this.name = name;
        this.date = new Date();
    }
}

alert(Article.publisher);

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1)),
  ];
  

articles.sort(Article.Compare);

alert( articles[0].name );