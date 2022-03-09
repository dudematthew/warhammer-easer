<script>
    export default {
        mounted() {
            console.log(this.data);
        },
        props: ['data'],
        methods: {
            handleNameInput(e) {
                this.data.name = e.target.innerHTML.replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, '');
                console.log(this.data.name);
            }
        }
    }
</script>


<template>
    <article class="tile is-child notification is-primary">
        <!-- Main container -->
        <nav class="level">
            <!-- Left side -->
            <div class="level-left">
                <div class="level-item">
                    <p class="title is-half" contenteditable @input="handleNameInput">{{data.name}}</p>
                </div>
            </div>

            <!-- Right side -->
            <div class="level-right">
                <p class="level-item">
                    <div class="dropdown  is-right">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item is-danger">
                                    Usuń byt
                                </a>
                                <a href="#" class="dropdown-item">
                                    Modifiers
                                </a>
                                <a href="#" class="dropdown-item">
                                    Grid
                                </a>
                                <a href="#" class="dropdown-item">
                                    Form
                                </a>
                                <a href="#" class="dropdown-item">
                                    Elements
                                </a>
                                <a href="#" class="dropdown-item">
                                    Components
                                </a>
                                <a href="#" class="dropdown-item">
                                    Layout
                                </a>
                                <hr class="dropdown-divider">
                                <a href="#" class="dropdown-item">
                                    More
                                </a>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
        </nav>
    </article>
</template>