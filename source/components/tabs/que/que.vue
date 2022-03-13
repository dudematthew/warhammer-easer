<script>
    import Entity from './entity.vue';

    export default {
        components: {
            Entity
        },
        data() {
            return {
                entities: [
                    {
                        name: "Hades",
                        race: "Elf",
                        description: "",
                        equipment: "",
                        color: "#eb4034",
                        stats: {
                            ws: 10, // Weapon Skill
                            bs: 10, // Ballistic Skill
                            s: 10, // Strength
                            t: 10, // Toughness
                            ag: 10, // Agility
                            int: 10, // Inteligence
                            wp: 10, // Will Power
                            fel: 10, // Fellowship
                            a: 1, // Attacks
                            w: 12, // Wounds
                            m: 5, // Movement
                            mag: 0, // Magic
                            ip: 0, // Instanity Points
                            fp: 1 // Fate Points
                        },
                        skills: ['Spostrzegawczość'],
                        abilities: ['Hazard', 'Hipnoza', 'Czytanie z Warg', 'Dowodzenie', 'Jeździectwo']
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
                                        <p class="title">Załaduj kolejkę</p>
                                        <div class="field has-addons has-text-weight-bold mr-2">
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
                                        <div class="field">
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
            <div class="tile is-ancestor is-vertical">
                <div class="tile is-vertical mb-5" v-for="entity in entities">
                    <Entity :data="entity" />
                </div>
            </div>
        </div>
        <div class="box is-invisible"></div>
        <!--Que End-->
    </li>
</template>