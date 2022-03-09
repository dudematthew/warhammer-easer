<script>
import Entity from './entity.vue';

export default {
    mounted () {
        let thisss = this;
        setInterval(() => {
            console.log(this.entities[0].name);
        }, 5000);
    },
    components: {Entity},
    data () {
        return {
            entities: [
                {
                    name: "Hades"
                }
            ]
        }
    }
}

</script>

<template>
    <li class="tab-content">
        <!--Que Start-->
        <div class="tile is-parent has-background-white">
            <div class="tile is-child">
                <div class="tile is-parent">
                    <div class="tile is-child is-half">
                        <section class="hero is-white">
                            <div class="hero-body">
                                <div class="container">
                                    <h1 class="title">
                                        Kolejka
                                    </h1>
                                    <h2 class="subtitle">
                                        Zarządzaj wykreowanymi bytami
                                    </h2>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="tile is-child is-half">
                        <div class="tile is-parent is-size-3 is-vertical">
                            <div class="tile is-child">
                                <div class="tile is-parent">
                                    <div class="tile is-child">
                                        <p class="title">Opcje</p>
                                        <div class="buttons">
                                            <button class="button is-primary">
                                                <span class="icon">
                                                    <i class="fas fa-dice"></i>
                                                </span>
                                                <span>Losuj inicjatywę</span>
                                            </button>
                                            <button class="button is-danger">
                                                <span class="icon">
                                                    <i class="fas fa-trash"></i>
                                                </span>
                                                <span>Usuń wszystkie byty</span>
                                            </button>
                                            <button class="button is-success">
                                                <span class="icon">
                                                    <i class="fas fa-save"></i>
                                                </span>
                                                <span>Zapisz kolejkę</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tile is-child">
                                <div class="tile is-parent">
                                    <div class="tile is-child">
                                        <p class="title">Załaduj kolejkę</p>
                                        <div class="field has-addons has-text-weight-bold">
                                            <div class="control has-icons-left">
                                                <div class="file has-name">
                                                    <label class="file-label">
                                                        <input class="file-input" type="file" accept=".json"
                                                            name="resume">
                                                        <span class="file-cta">
                                                            <span class="file-icon">
                                                                <i class="fas fa-upload"></i>
                                                            </span>
                                                            <span class="file-label">
                                                                Załaduj plik...
                                                            </span>
                                                        </span>
                                                        <span class="file-name">
                                                            ...
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box is-invisible"></div>
        <div class="box has-background-dark">
            <div class="tile is-ancestor">
                <div class="tile is-vertical">
                    <div class="tile">
                        <div class="tile is-parent is-vertical" v-for="entity in entities">
                            <Entity :data="entity" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Que End-->
    </li>
</template>