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
    ],
    superfruta : {name: 'mandarina', size: '34', price: 88 },
    new_movie: null,    
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
    }
  }
});