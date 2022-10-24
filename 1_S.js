// Single Responsibility Principle

// This class responsible only for create and update news
class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }


    updateNews(text) {
        this.text = text
        this.modified = true
    }
}

// This class responsible only for format news and can be extended
class NewsFormatter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
            <div class='news'>
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    //can add another method for formatting
    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>
        `
    }
}

const formatter = new NewsFormatter(new News('Ukraine forces', 'Win the war with russia'))
// const news = new News('Ukraine forces', 'Win the war with russia');

// console.log(news.toJSON())
console.log(formatter.html())
console.log(formatter.json())
console.log(formatter.xml())