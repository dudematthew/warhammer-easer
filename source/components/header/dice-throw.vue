<script>
    export default {
        data () {
            return {
                output: "",
                d10Amount: 1,
                d100Amount: 1,
                dXAmount: 1,
                dXValue: 20
            };
        },
        methods: {
            throwDice (dice, amount) {
                if (!Number.isInteger(dice) || dice < 2) {
                    this.output += `✋ Rzucaj kością większą od 1\n`;
                    return;
                }
                    
                let result = Math.floor(Math.random() * dice) + 1;

                if (amount > 1)
                    this.addDividerOutput(dice, amount);

                for (let i = 0; i < amount; i++) {
                    this.addDiceOutput(dice, result, amount > 1);
                }
            },
            addDiceOutput (dice, result, tabbed) {
                this.output += `${tabbed ? "   " : ""}🎲 [K${dice}] ${result}\n`;
                this.$refs.output.scrollTop = this.$refs.output.scrollHeight;
            },
            addDividerOutput (dice, amount) {
                this.output += `💠 Rzucono ${amount} x K${dice}:\n`
            },
            clearOutput () {
                this.output = "";
            }
        },
        watch: {
            d10Amount (val) {
                if (val < 1 && Number.isInteger(val))
                    this.d10Amount = 1;
                else if (!Number.isInteger(val))
                    this.d10Amount = parseInt(this.d10Amount);
            },
            d100Amount (val) {
                if (val < 1 && Number.isInteger(val))
                    this.d100Amount = 1;
                else if (!Number.isInteger(val))
                    this.d100Amount = parseInt(this.d100Amount);
            },
            dXAmount (val) {
                if (val < 1 && Number.isInteger(val))
                    this.dXAmount = 1;
                else if (!Number.isInteger(val))
                    this.dXAmount = parseInt(this.dXAmount);
            },
            dXValue (val) {
                if (val < 1 && Number.isInteger(val))
                    this.dXValue = 1;
                else if (!Number.isInteger(val))
                    this.dXValue = parseInt(this.dXValue);
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
                <input type="number" class="input" v-model="d100Amount" placeholder="Ilość...">
            </div>
            <div class="control">
                <button class="button" @click="throwDice(100, dXAmount)">Rzuć</button>
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
                <input type="number" class="input" v-model="d10Amount" placeholder="Ilość...">
            </div>
            <div class="control">
                <button class="button" @click="throwDice(10, dXAmount)">Rzuć</button>
            </div>
        </div>

        <div class="field has-addons">
            <div class="control has-icons-left">
                <input type="number" class="input" v-model="dXValue" placeholder="KX">
                <div class="icon is-small is-left">
                    <i class="fas fa-dice"></i>
                </div>
            </div>
            <div class="control">
                <input type="number" class="input has-text-black" v-model="dXAmount" placeholder="Ilość...">
            </div>
            <div class="control">
                <button class="button" @click="throwDice(dXValue, dXAmount)">Rzuć</button>
            </div>
        </div>

        <div class="field">
            <label class="label">Wynik</label>
            <div class="control">
                <textarea class="textarea" ref="output" v-model="output" readonly></textarea>
            </div>
            <div class="control">
                <button @click="clearOutput()" class="button is-small is-fullwidth function-output-clear">wyczyść</button>
            </div>

        </div>
    </div>
</template>