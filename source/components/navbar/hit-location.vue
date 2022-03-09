<script>
export default {
    data () {
        return {
            d100Input: 1,
            selectedType: 1,
            output: "",
            entityTypes: Array.from(require("../../data/hitLocations.json"))
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

            let entityType = this.entityTypes[this.selectedType - 1];

            let effect;
            entityType.values.forEach(hitLocation => {
                if (d100Throw >= hitLocation.from && d100Throw <= hitLocation.to) {
                    effect = hitLocation.effect;
                }
            });
            
            this.addHitLocationOutput(effect, d100Throw, entityType.name);
        },
        addHitLocationOutput (location, d100Throw, entityName) {
            this.output += `🎯 ${entityName}\n`;
            this.output += `   🎲 [${d100Throw}] 🩸 ${location}\n`;
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
        Lokacja trafienia
    </a>

    <div class="navbar-dropdown">

        <div class="field">

            <label class="label">Typ istoty</label>
            <div class="control">
                <div class="select">
                    <select v-model="selectedType">
                        <option v-for="entityType in entityTypes" v-bind:selected="id == 1" v-bind:value="entityType.id">
                            {{entityType.name}}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label">Rzut kością</label>
            <div class="control">
                <input type="number" class="Normal input" v-model="d100Input" placeholder="Podaj wynik...">
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
            <textarea class="textarea" ref="output" v-model="output" readonly></textarea>
            <div class="control">
                <button @click="clearOutput()" class="button is-small is-fullwidth function-output-clear">wyczyść</button>
            </div>

        </div>
    </div>
</template>