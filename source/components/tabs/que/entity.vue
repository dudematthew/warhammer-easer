<script>
    export default {
        props: ['data'],
        mounted () {
            this.setRandomInitiative();
        },
        data() {
            return {
                isExpaned: false,
                isDead: false
            }
        },
        methods: {
            handleNameInput(e) {
                this.data.name = e.target.innerHTML.replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, '');
                console.log(this.data.name);
            },
            async setRandomInitiative() {
                this.data.stats.initiative = this.data.stats.ag + parseInt(await randomizer.getRandomNumber(1, 10));
            }
        }
    }
</script>


<template>
    <div class="tile box is-parent notification is-white is-vertical" :style="{'border': '2px solid' + data.color}">
        <div class="tile is-child ">
            <nav class="level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                        <p class="title is-half" contenteditable @input="handleNameInput">{{data.name}}</p>
                    </div>
                </div>

                <!-- Right side -->
                <div class="level-right">
                    <p class="level-item" v-if="!isDead">
                        <button class="button" @click="isExpaned = !isExpaned">
                            <span class="icon is-small">
                                <i v-if="isExpaned" class="fa-solid fa-up-right-and-down-left-from-center"></i>
                                <i v-else class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            </span>
                        </button>
                    </p>
                    <p class="level-item">
                        <button class="button" :class="{'is-black': isDead}" @click="isDead = !isDead">
                            <span class="icon is-small">
                                <i class="fas fa-skull"></i>
                            </span>
                        </button>
                    </p>
                    <p class="level-item" v-if="!isDead">
                        <button class="button is-danger">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </p>
                    <p class="level-item" v-if="!isDead" >
                        <div class="dropdown is-right">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                    <span class="icon is-small">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                                <div class="dropdown-content p-2">
                                    <p>
                                        <button class="button is-success is-fullwidth">
                                            <span class="icon is-small">
                                                <i class="fas fa-save"></i>
                                            </span>
                                            <span>Zapisz byt</span>
                                        </button>
                                    </p>
                                    <p>
                                        <button class="button is-fullwidth">
                                            <span class="icon is-small">
                                                <i class="fa-solid fa-paint-roller"></i>
                                            </span>
                                            <span>Zmień kolor</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </p>
                </div>
            </nav>
        </div>
        <div class="tile is-child" v-if="!isDead">
            <div class="tile is-parent is-vertical p-0">
                <div class="box tile has-background-dark is-child p-3 is-horizontal">
                    <div class="columns">
                        <div class="column">
                            <p class="control has-icons-left">
                                <input class="input" type="number" v-model="data.stats.ws" placeholder="WW">
                                <span class="icon is-left has-text-dark">
                                    <i class="fa-solid fa-hand-back-fist"></i>
                                </span>
                            </p>
                        </div>
                        <div class="column">
                            <p class="control has-icons-left">
                                <input class="input" type="number" v-model="data.stats.bs" placeholder="US">
                                <span class="icon is-left has-text-dark">
                                    <i class="fa-solid fa-eye"></i>
                                </span>
                            </p>
                        </div>
                        <div class="column">
                            <p class="control has-icons-left">
                                <input class="input" type="number" v-model="data.stats.s" placeholder="K">
                                <span class="icon is-left has-text-dark">
                                    <i class="fa-solid fa-dumbbell"></i>
                                </span>
                            </p>
                        </div>
                        <div class="column">
                            <p class="control has-icons-left">
                                <input class="input" type="number" v-model="data.stats.t" placeholder="Odp">
                                <span class="icon is-left has-text-dark">
                                    <i class="fa-solid fa-shield"></i>
                                </span>
                            </p>
                        </div>
                        <div class="column">
                            <p class="control has-icons-left">
                                <input class="input" type="number" v-model="data.stats.ag" placeholder="Zr">
                                <span class="icon is-left has-text-dark">
                                    <i class="fa-solid fa-person-running"></i>
                                </span>
                            </p>
                        </div>
                        <div class="column">
                            <p class="control has-icons-left">
                                <input class="input" type="number" v-model="data.stats.int" placeholder="Int">
                                <span class="icon is-left has-text-dark">
                                    <i class="fa-solid fa-brain"></i>
                                </span>
                            </p>
                        </div>
                        <div class="column">
                            <p class="control has-icons-left">
                                <input class="input" type="number" v-model="data.stats.wp" placeholder="SW">
                                <span class="icon is-left has-text-dark">
                                    <i class="fa-solid fa-face-meh"></i>
                                </span>
                            </p>
                        </div>
                        <div class="column">
                            <p class="control has-icons-left">
                                <input class="input" type="number" v-model="data.stats.fel" placeholder="Ogd">
                                <span class="icon is-left has-text-dark">
                                    <i class="fa-solid fa-comment-dots"></i>
                                </span>
                            </p>
                        </div>
                        <div class="column is-2">
                            <p class="control has-icons-left">
                                <input class="input is-primary" type="number" v-model="data.stats.initiative" placeholder="Inicjatywa">
                                <span class="icon is-left has-text-dark">
                                    <i class="fa-solid fa-arrow-down-short-wide"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tile is-child" v-if="!isDead">
            <div class="tile is-parent box has-background-dark">
                <div class="tile is-child is-6">
                    <div class="field is-grouped">
                        <p class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-fire-flame-curved"></i>
                                </span>
                                <span>Atak</span>
                            </button>
                        </p>
                        <p class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-person-running"></i>
                                </span>
                                <span>Unik</span>
                            </button>
                        </p>
                        <p class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-user-shield"></i>
                                </span>
                                <span>Parowanie</span>
                            </button>
                        </p>
                        <p class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-crosshairs"></i>
                                </span>
                                <span>Strzał</span>
                            </button>
                        </p>
                        <p class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-droplet"></i>
                                </span>
                                <span>Zrań</span>
                            </button>
                        </p>
                    </div>
                </div>
                <div class="tile is-child is-6">
                    <div class="field is-grouped">
                        <div class="control has-icons-left">
                            <div class="select">
                                <select>
                                    <option selected>Miecz</option>
                                    <option>Topór</option>
                                    <option>Łuk</option>
                                </select>
                            </div>
                            <div class="icon is-small is-left has-text-black">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>