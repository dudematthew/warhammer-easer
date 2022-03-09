<template>
    <li class="tab-content">
        <!--Settings Start-->
        <div class="tile is-parent has-background-white">
            <div class="tile is-child">
                <div class="tile is-parent">
                    <div class="tile is-child is-half">
                        <section class="hero is-white">
                            <div class="hero-body">
                                <div class="container">
                                    <h1 class="title">
                                        Ustawienia
                                    </h1>
                                    <h2 class="subtitle">
                                        Zarządzaj aplikacją i jej zachowaniem
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
                                        <p class="title">Opcje</p>
                                        <div class="buttons">
                                            <button class="button is-success">
                                                <span class="icon">
                                                    <i class="fas fa-save"></i>
                                                </span>
                                                <span>Zapisz Ustawienia</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tile is-child">
                                <div class="tile is-parent">
                                    <div class="tile is-child">
                                        <p class="title">Wczytaj ustawienia</p>
                                        <div class="field has-addons has-text-weight-bold">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Settings End-->
    </li>
</template>