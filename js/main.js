Vue.component('articulos',{
  template :`
    
    <div class="master-articulos">
      <h3>Componente -> {{ titulo }} </h3>
      <p>Listado por ajax</p>
      <ol>
        <li v-for="(post, index) in posts" v-if="index <= 9">
          {{ post.userId }} - {{ post.title}}
        </li>
      </ol>
    </div>
  `,
  mounted(){    
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {        
        this.posts = response.data;              
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data(){
    return {
      titulo: 'articulos',
      posts:  null,
    }
  }

});

Vue.component('frutas',{
  template :`
    <h3>Componente de frutas</h3>
  `,

});

Vue.filter('uppercase', (value) => value.toUpperCase());

new Vue ({
  el: 'main',
  mounted(){

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {        
        this.posts = response.data;              
      })
      .catch((error) => {
        console.log(error);
      });

  },
  data: {
    texto : 'hola mundo',
    nombre: 'Diego Carciente',
    nota: 9,
    posts: null,
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
    cursor: null,       
  },
  methods:{
    addMovie(){
      this.peliculas.unshift(this.new_movie);
      this.new_movie = null;
    },
    deleteMovie(index){
      this.peliculas.splice(index, 1)
    },
    selection(index){
      this.cursor = index;
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