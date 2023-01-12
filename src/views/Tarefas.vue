<template>
    <div>
        <CompFormulario @aoSalvarTarefa="salvarTarefa" />
        <div class="tarefa">
            <Box v-if="listaEstaVazia">
                Você não está muito produtivo hoje.
            </Box>
            <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from '../components/Box.vue'
import CompFormulario from '../components/Formulario.vue'
import Tarefa from '../components/ListaTarefa.vue'
import ITarefa from '../interfaces/ITarefa'
export default defineComponent({
    name: 'App',
    components: {
        CompFormulario,
        Tarefa,
        Box,
    },
    data() {
        return {
            tarefas: [] as ITarefa[],
            modoEscuroAtivo: false
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        },
    }
});
</script>

<style>

</style>
