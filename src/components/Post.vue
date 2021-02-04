<template>
    <table class="table">
         <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Titulo</th>
            <th scope="col">body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" :key="post.id">
            <td>{{post.id}}</td>
            <td>{{post.titulo}}</td>
            <td>{{post.body}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name:'EjemploPost',
    data(){
        return{
            posts:[
                {
                    id:1, 
                    titulo:'Post 1',
                    body: 'nota del post1'
                },
                 {
                    id:2, 
                    titulo:'Post 2',
                    body: 'nota del post2'
                },
                 {
                    id:3, 
                    titulo:'Post 3',
                    body: 'nota del post3'
                }
            ]
        }
    }
}
</script>

<style>
    
</style>