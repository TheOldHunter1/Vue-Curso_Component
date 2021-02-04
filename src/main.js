import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// componentes

/* 
var componente2 = Vue.extend({
    template: '<h3>{{subtitulo}}</h3>',
    data() {
        return {
            subtitulo: 'Listado de Frameworks JS'
        }
    }
})
var componente3 = Vue.extend({
    template: '<div><ul><framework v-for="fra in frameworks" :key="fra.id"> {{fra.titulo}}</framework><ul></div>',
    data() {
        return {
            frameworks: [{
                    id: 1,
                    titulo: 'VueJS'
                },
                {
                    id: 2,
                    titulo: 'Angular'
                },
                {
                    id: 3,
                    titulo: 'React'
                }
            ]
        }
    }
})

Vue.component('componente-saludo', {
    template: "<h1>{{titulo}}<h1>",
    data() {
        return {
            titulo: 'Hola - Introduccíon a componentes'
        }
    },
    method: {
        display() {
            console.log('Hola');
        }
    }
});


Vue.component('componente-titulo', componente2);
Vue.component('componente-lista', componente3);

Vue.component('framework', {
    template: '<li><slot></slot></li>'
});
 */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})