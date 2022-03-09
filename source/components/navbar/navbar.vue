<script>
import DiceThrow from './dice-throw.vue';
import HitLocation from './hit-location.vue';
import DrunkEffect from './drunk-effect.vue';
import CriticalEffect from './critical-effect.vue';

export default {
    name: "navbar",
    components: {DiceThrow, HitLocation, DrunkEffect, CriticalEffect}
};

</script>

<template>
    <nav class="navbar is-size-5 has-text-black is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item navbar-logo" href="#">
                <img src="../../assets/img/logo.png" height="120" class="is-fullwidth">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">

                <!-- Dice throw start -->
                <div class="navbar-item dropdown has-text-white">
                    <DiceThrow />
                </div>
                <!-- Dice throw end -->

                <!-- Hit location start -->
                <div class="navbar-item dropdown has-text-white">
                    <HitLocation />
                </div>
                <!-- Hit location end -->

                <!-- Drunk effect start -->
                <div class="navbar-item dropdown has-text-white">
                    <DrunkEffect />
                </div>
                <!-- Drunk effect end -->

                <!-- Critical table start -->
                <div class="navbar-item dropdown has-text-white">
                    <CriticalEffect />
                </div>
                <!-- Critical table end -->

                <!-- Chaos mutation start -->
                <!-- <div class="navbar-item dropdown has-text-white">
                        <a class="navbar-link dropdown-trigger">
                            Mutacja Chaosu
                        </a>
    
                        <div class="navbar-dropdown">
    
                            <div class="field">
                                <label class="label">Rzut kością</label>
                                <div class="control">
                                    <input type="number" class="Normal input" placeholder="Podaj wynik...">
                                </div>
                            </div>
    
                            <div class="field">
                                <div class="control">
                                    <button type="button" class="button">Oblicz</button>
                                    <button type="button" class="button">Losuj</button>
                                </div>
                            </div>
    
                            <div class="field">
                                <label class="label">Wynik</label>
                                <div class="control">
                                    <textarea class="textarea" readonly></textarea>
                                </div>
                                <div class="control">
                                    <button class="button is-small is-fullwidth">wyczyść</button>
                                </div>
                            </div>
                        </div>
                    </div> -->
                <!-- Chaos mutation end -->
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>?</strong>
                        </a>
                        <a class="button is-danger">
                            <strong>?</strong>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    </nav>
</template>