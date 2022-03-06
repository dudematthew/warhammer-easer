<script>
export default {
    data () {
        return {
            d100Input: 1,
            selectedType: 1,
            output: "",
            drunkEffects: Array.from(require("../../data/drunkEffects.json"))
        };
    },
    methods: {
        async throwForResult () {
            let randomNumber = await randomizer.getRandomNumber(1, 100);
            
            if (typeof randomNumber == "undefined"){
                this.output += `✋ Wystąpił błąd w generowaniu losowej liczby\n`;
                return;
            }

            this.calculateResult(randomNumber);
        },
        calculateResult (d100Throw) {
            // Keep the throw between 1-100
            d100Throw = (d100Throw < 1) ? 1 : (d100Throw > 100) ? 100 : d100Throw;

            let effect;
            this.drunkEffects.forEach(drunkEffect => {
                if (d100Throw >= drunkEffect.from && d100Throw <= drunkEffect.to) {
                    effect = drunkEffect.effect;
                }
            });
            
            this.addDrunkEffectOutput(effect, d100Throw);
        },
        addDrunkEffectOutput (effect, d100Throw) {
            let emoji = (d100Throw == 1) ? "💎" : (d100Throw == 100) ? "💀" : "🤢";
            this.output += `🎲 [${d100Throw}] ${emoji} ${effect}\n`;
        },
        scrollOutputToBottom () {
            this.$nextTick(function () {
                this.$refs.output.scrollTop = this.$refs.output.scrollHeight - 20
                this.$refs.output.scrollTo({top: this.$refs.output.scrollHeight, behavior: 'smooth'});
            });
        },
        clearOutput () {
            this.output = "";
        }
    },
    watch: {
        d100Input (val) {
            if (val < 1 && Number.isInteger(val))
                this.d100Input = 1;
            else if (val > 100 && Number.isInteger(val))
                this.d100Input = 100;
            else if (!Number.isInteger(val))
                this.d100Input = parseInt(this.d100Input);
        },
        output (val) {
            this.scrollOutputToBottom();
            return val.trim();
        }
    }
};
</script>

<template>
    <a class="navbar-link dropdown-trigger">
        Efekt pijaństwa
    </a>

    <div class="navbar-dropdown">

        <div class="field">
            <label class="label">Rzut kością</label>
            <div class="control">
                <input type="number" class="normal input" v-model="d100Input" placeholder="Podaj wynik...">
            </div>
        </div>

        <div class="field">
            <div class="control">
                <button type="button" class="button" @click="calculateResult(d100Input)">Oblicz</button>
                <button type="button" class="button" @click="throwForResult()">Losuj</button>
            </div>
        </div>

        <div class="field">
            <label class="label">Wynik</label>
            <div class="control">
                <textarea class="textarea" style="height: 200px" ref="output" v-model="output" readonly></textarea>
            </div>
            <div class="control">
                <button @click="clearOutput()" class="button is-small is-fullwidth function-output-clear">wyczyść</button>
            </div>
        </div>
    </div>
</template>