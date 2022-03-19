<script>
    import Entity from './entity/entity.vue';

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
                        skills: [
                            {
                                name: 'Spostrzegawczość',
                                level: 0
                            },
                            {
                                name: 'Hazard',
                                level: 2
                            },
                            {
                                name: 'Hipnoza',
                                level: 1
                            },
                            {
                                name:  'Czytanie z Warg',
                                level: 0
                            },
                            {
                                name: 'Dowodzenie',
                                level: 2
                            },
                            {
                                name: 'Jeździectwo',
                                level: 1
                            }
                        ], // Skills
                        talents: ['Silny Cios'], // Zdolności
                        inventory: [
                            {
                                name: "Złoty Naszyjnik",
                                description: "Pamiątka po wizycie w Estalii. Zapewnia + 10 do inteligencji."
                            },
                            {
                                name: "Zestaw Wytrychów",
                                description: ""
                            },
                            {
                                name: "Racja Żywnościowa",
                                description: "Starczy na dwa dni."
                            },
                            {
                                name: "Butelka Wina",
                                description: "Słabej jakości lura."
                            }
                        ],
                        description: [
                            {
                                name: "Mieszkaniec lasu",
                                description: "Zwierzoludzie to stwory leśne. Niemal wszyscy są doświadczonymi łowcami i tropicielami. Otrzymują modyfikator +20 do testów skradania się oraz +10 do testów ukrywania się w lesie."
                            },
                            {
                                name: "Guuupi!",
                                description: ""
                            },
                            {
                                name: "Opancerzony korpus",
                                description: "Byko-centaury noszą pancerz tylko na górnej (krasnoludzkiej) części korpusu. Jęsli stosujesz zasady dotyczące opancerzenia złożonego, instnieje zaledwie 50% szans, że cios zadany w korpus trafi w zbroję. Bykocentaury nie mogą nosić pancerza na nogach."
                            }
                        ],
                        spells: [
                            {
                                name: "Błyskawica",
                                description: "Czarodziej ciska błyskawicą w dowolnego przeciwnika znajdującego się w odległości do 36 metrów. Jest to magiczny pocisk o Sile 5.",
                                ingredient: "kamerton (+2)",
                                castingTime: "akcja",
                                duration: "",
                                level: 10
                            },
                            {
                                name: "Mowa ptaków",
                                description: "Czarodziej zyskuje umiejętność rozumienia i przemawiania w języku ptaków. Oczywiście ptaki nie muszą rozmawiać z czarodziejem, ani odpowiadać na jego pytania (decyzja MG). Sprytne lub wyjątkowo inteligentne ptaki mogą nawet kłamać lub żądać przysługi w zamian za informację. Każdy z ptaków będzie oceniał czarodzieja po jego wyglądzie i sposobie zachowania, jednakże dzięki temu zaklęciu czarodziej zyskuje instynktowną wiedzę o zachowaniu ptaków. Na przykład, może się dowiedzieć dlaczego stado ptaków zachowuje się w określony sposób lub z jakiego powodu napotkane gniazdo zostało opuszczone.",
                                ingredient: "ptasi język (+1)",
                                castingTime: "akcja podwójna",
                                duration: "liczba minut równa wartości Magii czarodzieja",
                                level: 10
                            },
                            {
                                name: "Wypolerowanie",
                                description: "Czar umożliwia oczyszczenie i wypolerowanie dowolnego przedmiotu służącego do obserwacji - szyby okiennej, lunety, lustra itp. Młodzi adepci magii z Kolegium Niebios potajemnie używają tego zaklęcia do czyszczenia instrumentów używanych przez starszych astrologów do obserwacji nieba. Ponieważ wykorzystywanie magii do codziennych czynności jest zabronione, uczniowie rzucają to zaklęcie, a następnie lekko przecierają idealnie lśniącą powierzchnię brudną szmatą, aby zamaskować magiczny efekt zaklęcia.",
                                ingredient: "czysta szmatka (+1)",
                                castingTime: "akcja",
                                duration: "",
                                level: 4
                            },
                        ]
                    }
                ]
            }
        }
    }
</script>

<template>
    <li class="tab-content">
        <!--Queue Start-->
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
        <!--Queue End-->
    </li>
</template>