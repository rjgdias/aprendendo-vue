<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="" />
        </h1>
        <button class="button" @click="alterarTema">
            {{ textoBotao }}
        </button>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <font-awesome-icon icon="tasks" />
                        Tarefas
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="link">
                        <font-awesome-icon icon="diagram-project" />
                        Projetos
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data() {
        return {
            modoEscuroAtivo: false
        }
    },
    computed: {
        textoBotao() {
            if (this.modoEscuroAtivo) {
                return 'Desativar modo escuro'
            }
            return 'Ativar modo escuro'
        }
    },
    methods: {
        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
        }
    }
})
</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}
.link{
    color:#fff;
}
.panel li{
    margin:8px 0;
}
.link:hover{
    color:#FAF0CA
}
.link.router-link-active{
    color:#FAF0CA
}
@media only screen and (max-wdith: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>