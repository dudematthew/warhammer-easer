<script>
    export default {
        data() {
            return {
                d100Input: 1,
                selectedHitLocation: 1,
                selectedCriticalValue: 1,
                output: "",
                hitLocationLoading: false,
                hitLocationThrowing: false,
                hitLocationChanging: false,
                hitLocations: [
                    {id: 1, name: "Głowa"},
                    {id: 2, name: "Korpus"},
                    {id: 3, name: "Ręka"},
                    {id: 4, name: "Noga"},
                ],
                hitMatrix: Array.from(require("../../data/hitMatrix.json")),
                effectMatrix: Array.from(require("../../data/effectMatrix.json"))
            };
        },
        methods: {
            async throwHitLocation() {
                this.hitLocationLoading = this.hitLocationThrowing = true;

                setTimeout(() => {
                    this.hitLocationThrowing = false;
                }, 400);

                this.selectedHitLocation = await randomizer.getRandomNumber(1, 4);

                this.hitLocationLoading = false;
                this.hitLocationChanging = true;
                setTimeout(() => {
                    this.hitLocationChanging = false;
                }, 400);
            },
            async throwForResult() {
                let randomNumber = await randomizer.getRandomNumber(1, 100);
                if (typeof randomNumber == "undefined") {
                    this.output += `✋ Wystąpił błąd w generowaniu losowej liczby\n`;
                    return;
                }
                this.calculateResult(randomNumber);
            },
            calculateResult(d100Throw) {
                // Keep the throw between 1-100
                d100Throw = (d100Throw < 1) ? 1 : (d100Throw > 100) ? 100 : d100Throw;

                // Get hit value
                let hitValue;
                this.hitMatrix.forEach((hitValuesRow) => {
                    if (d100Throw >= hitValuesRow.from && d100Throw <= hitValuesRow.to) {
                        hitValue = hitValuesRow.values[parseInt(this.selectedCriticalValue) - 1];
                    }
                });

                let effect = this.effectMatrix[parseInt(this.selectedHitLocation) - 1][parseInt(hitValue) - 1];
                if (typeof effect == "undefined")
                    console.error(`Undefined effect: ${parseInt(this.selectedHitLocation) - 1}, ${parseInt(hitValue) - 1}`);


                this.addHitLocationOutput(effect, d100Throw, parseInt(this.selectedHitLocation)); 
            },
            addHitLocationOutput(effect, d100Throw, selectedHitLocation) {
                // głowa korpus ręka noga 
                let hitLocationName;
                this.hitLocations.forEach(hitLocation => {
                    if (hitLocation.id == selectedHitLocation)
                        hitLocationName = hitLocation.name;
                });

                let hitEmoji;
                switch (selectedHitLocation) {
                    case 1:
                        hitEmoji = "🤕";
                        break;
                    case 2:
                        hitEmoji = "🙍‍♂️";
                        break;
                    case 3:
                        hitEmoji = "💪"
                        break;
                    case 4:
                        hitEmoji = "🦵";
                        break;
                    default:
                        console.error(`Hit location is not valid (${selectedHitLocation})`);
                }
                
                this.output += `🎲 [${d100Throw}] [+${this.selectedCriticalValue}] ${hitEmoji} ${hitLocationName} \n`;
                this.output += `${effect}\n`;
            },
            scrollOutputToBottom() {
                this.$nextTick(function () {
                    this.$refs.output.scrollTop = this.$refs.output.scrollHeight - 20
                    this.$refs.output.scrollTo({
                        top: this.$refs.output.scrollHeight,
                        behavior: 'smooth'
                    });
                });
            },
            clearOutput() {
                this.output = "";
            }
        },
        watch: {
            d100Input(val) {
                if (val < 1 && Number.isInteger(val))
                    this.d100Input = 1;
                else if (val > 100 && Number.isInteger(val))
                    this.d100Input = 100;
                else if (!Number.isInteger(val))
                    this.d100Input = parseInt(this.d100Input);
            },
            output(val) {
                this.scrollOutputToBottom();
                return val.trim();
            }
        }
    };
</script>

<template>
    <a class="navbar-link dropdown-trigger">
        Tabelka krytyczna
    </a>

    <div class="navbar-dropdown">

        <div class="field">
            <label class="label">Lokacja trafienia</label>
            <div class="control">

                <button type="button" title="Losuj" @click="throwHitLocation()" value="select-hit-location-place"
                    class="button function-random-select">
                    <span class="icon is-mediushake">
                        <i v-bind:class="{'fas fa-dice': !hitLocationLoading, 'fa fa-spinner': hitLocationLoading, 'shake': hitLocationThrowing}"></i>
                    </span>
                </button>
                <div class="select">
                    <select v-model="selectedHitLocation" v-bind:class="{'has-text-link': hitLocationChanging}">
                        <option v-for="hitLocation in hitLocations" v-bind:value="hitLocation.id">
                            {{hitLocation.name}}
                        </option>
                    </select>
                </div>

            </div>
        </div>

        <div class="field">
            <label class="label">Wartość</label>
            <div class="select">
                <select v-model="selectedCriticalValue">
                    <option value="1">+1</option>
                    <option value="2">+2</option>
                    <option value="3">+3</option>
                    <option value="4">+4</option>
                    <option value="5">+5</option>
                    <option value="6">+6</option>
                    <option value="7">+7</option>
                    <option value="8">+8</option>
                    <option value="9">+9</option>
                    <option value="10">+10</option>
                </select>
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
            <div class="control">
                <textarea class="textarea" ref="output" v-model="output" readonly></textarea>
                <div class="control">
                    <button @click="clearOutput()"
                        class="button is-small is-fullwidth function-output-clear">wyczyść</button>
                </div>
            </div>
        </div>
    </div>
</template>