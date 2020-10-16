// Jacob Shirley
// 10.16.20
Vue.component('book-item', {
    template: '<div class="book"><p>{{ title }}</p> <p>{{ cover }}</p> <p>By {{ author }}</p></div>'
    ,props: ['title', 'cover', 'author']
})

let app = new Vue({
    el: '#app',
    data: {
        showy: true,
        bookList: [
            {id: 0, title: 'A Guide to Colors', cover: '🌈', author: 'Roy G. Biv'},
        ],
        bookList2: [
            {id: 1, title: 'Judging the Rarity of Crystals', cover: '💎', author: 'Jem Stone'}
        ]
    },
    methods: {
        toggleBook: function() {
            if(this.showy == true) {
                this.showy = false;
            } else if(this.showy == false) {
                this.showy = true;
            }
        }
    }
})