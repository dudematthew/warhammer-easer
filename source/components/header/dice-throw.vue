<script>
    export default {
        mounted () {
            this.addOutput(10, 3);
        },
        data () {
            return {
                output: "",
                d10Amount: 1,
                d100Amount: 1
            };
        },
        methods: {
            throwDice (dice, amount) {
                let result = Math.floor(Math.random() * max) + 1;

                for (let i = 0; i < amount; i++) {
                    this.addOutput(dice, result);
                }
            },
            addOutput (dice, result) {
                this.output += `🎲 [K${dice}] ` + result;
            },
            clearOutput () {
                this.output = "";
            }
        }
    };
</script>

<template>
    <a class="navbar-link dropdown-trigger">
        Rzut kością
    </a>

    <div class="navbar-dropdown">

        <label class="label">Kości</label>

        <div class="field has-addons">
            <div class="control has-icons-left">
                <input type="text" class="input has-text-white" value="K100" disabled>
                <div class="icon is-small is-left">
                    <i class="fas fa-dice"></i>
                </div>
            </div>
            <div class="control">
                <input type="text" class="input" value="1" placeholder="Ilość...">
            </div>
            <div class="control">
                <button class="button">Rzuć</button>
            </div>
        </div>

        <div class="field has-addons">
            <div class="control has-icons-left">
                <input type="text" class="input has-text-white" value="K10" disabled>
                <div class="icon is-small is-left">
                    <i class="fas fa-dice"></i>
                </div>
            </div>
            <div class="control">
                <input type="text" class="input" value="1" placeholder="Ilość...">
            </div>
            <div class="control">
                <button class="button">Rzuć</button>
            </div>
        </div>

        <div class="field has-addons">
            <div class="control has-icons-left">
                <input type="text" class="input" placeholder="KX">
                <div class="icon is-small is-left">
                    <i class="fas fa-dice"></i>
                </div>
            </div>
            <div class="control">
                <input type="text" class="input has-text-black" v-model="siema" value="1" placeholder="Ilość...">
            </div>
            <div class="control">
                <button class="button">Rzuć</button>
            </div>
        </div>

        <div class="field">
            <label class="label">Wynik</label>
            <div class="control">
                <textarea class="textarea" readonly></textarea>
            </div>
            <div class="control">
                <button class="button is-small is-fullwidth function-output-clear">wyczyść</button>
            </div>

        </div>
    </div>
</template>