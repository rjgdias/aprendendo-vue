<template>
    <section>
        <router-link to="/projetos/novo" class="button">
            <span class="icon is-small">
                <font-awesome-icon icon="plus" />
            </span>
            <span>Novo Projeto</span>
        </router-link>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                    <td>
                        <router-link :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <font-awesome-icon icon="pencil-alt" />
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
                            <span class="icon is-small">
                                <font-awesome-icon icon="trash" />
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { EXCLUIR_PROJETO } from '@/store/tipo-mutacoes';
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Lista',
    methods: {
        excluir(id: string){
            this.store.commit(EXCLUIR_PROJETO, id)
        }
    },
    setup() {
        const store = useStore()
        return {
            projetos: computed(() => store.state.projetos),
            store
        }
    }
});
</script>