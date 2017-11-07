Vue.filter('uppercase', (value) => value.toUpperCase());
new Vue ({
  el: 'main',
  data: {
    texto : 'hola mundo',
    nombre: 'Diego Carciente',
    nota: 9,
    peliculas: ['pelicula 1', 'pelicula 2', 'pelicula 3'],
    frutas: [
      {name: 'pera', size: '10', price: 99 },
      {name: 'manzana', size: '15', price: 999 },
      {name: 'cambur', size: '34', price: 88 },
      {name: 'sandia', size: '34', price: 88 },
      {name: 'melon', size: '34', price: 88 },
    ],
    superfruta : {name: 'mandarina', size: '34', price: 88 },
    new_movie: null,
    find_word: null,
       
  },
  methods:{
    addMovie(){
      this.peliculas.unshift(this.new_movie);
      this.new_movie = null;
    },
    deleteMovie(index){
      this.peliculas.splice(index, 1)
    }
  },
  computed: {
    concatenate(){
      return this.texto + '->' + this.nombre;
    },
    orderBy(){
      return this.peliculas.sort();
    },
    filterFrutas(){      
      return this.frutas.filter((fruta) => {
        return fruta.name.includes(this.find_word);
      });
    }
  }
});

const Vue2 = new Vue({
  el: '#vue2',
  data: {
    texto : 'hola mundo 2',       
  },
}) 

const Vue3 = new Vue({
  el: '#vue3',
  data: {
    texto : 'hola mundo 3',       
  },
}) 