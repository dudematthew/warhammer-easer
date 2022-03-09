<script>
    export default {
        name: "CreateEntity",
    };
</script>

<template>
    <li class="tab-content is-active">
        <div class="tile is-parent has-background-white">
            <div class="tile is-child">
                <div class="tile is-parent">
                    <div class="tile is-child is-half">
                        <section class="hero is-white">
                            <div class="hero-body">
                                <div class="container">
                                    <h1 class="title">
                                        Tworzenie bytu
                                    </h1>
                                    <h2 class="subtitle">
                                        Stwórz postać, która będzie uczestniczyć w sesji
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
                                            <button class="button is-info modal-button"
                                                data-target="modal-library-settings">
                                                <span class="icon">
                                                    <i class="fas fa-book-open"></i>
                                                </span>
                                                <span>Biblioteki Postaci</span>
                                            </button>
                                            <button class="button is-info modal-button"
                                                data-target="modal-stats-randomizer">
                                                <span class="icon">
                                                    <i class="fas fa-dice-d20"></i>
                                                </span>
                                                <span>Losowanie statystyk</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tile is-child">
                                <div class="tile is-parent">
                                    <div class="tile is-child">
                                        <p class="title">Zapisz</p>
                                        <div class="field has-addons">
                                            <div class="control has-icons-left">
                                                <input type="text" class="input has-text-white" value="Brak bibliotek"
                                                    disabled>
                                                <div class="icon is-small is-left">
                                                    <i class="fas fa-list"></i>
                                                </div>
                                            </div>
                                            <div class="control has-icons-left is-hidden">
                                                <div class="select">
                                                    <select>
                                                        <option disabled selected>Wybierz bibliotekę
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="icon is-small is-left">
                                                    <i class="fas fa-list"></i>
                                                </div>
                                            </div>
                                            <div class="control has-icons-left is-hidden">
                                                <div class="select">
                                                    <select>
                                                        <option disabled selected>Wybierz schemat</option>
                                                    </select>
                                                </div>
                                                <div class="icon is-small is-left">
                                                    <i class="fas fa-list"></i>
                                                </div>
                                            </div>
                                            <p class="control">
                                                <button class="button is-info" disabled>Zastosuj</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tile is-child">
                                <div class="tile is-parent">
                                    <div class="tile is-child">
                                        <p class="title">Załaduj</p>
                                        <div class="field has-addons">
                                            <div class="control has-icons-left">
                                                <div class="select">
                                                    <select>
                                                        <option selected>Warhammer 2ed</option>
                                                    </select>
                                                </div>
                                                <div class="icon is-small is-left">
                                                    <i class="fas fa-list"></i>
                                                </div>
                                            </div>
                                            <div class="control has-icons-left">
                                                <div class="select">
                                                    <select>
                                                        <option disabled selected>Wybierz schemat</option>
                                                        <option>Zombie</option>
                                                        <option>Skaven</option>
                                                    </select>
                                                </div>
                                                <div class="icon is-small is-left">
                                                    <i class="fas fa-list"></i>
                                                </div>
                                            </div>
                                            <p class="control">
                                                <button class="button is-info">Zastosuj</button>
                                            </p>
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
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-9">
                    <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-primary">
                                <p class="title is-half">Opis i nazwa</p>
                                <input type="text" class="input is-large has-text-weight-bold" placeholder="Nazwa...">
                                <textarea
                                    class="content is-fullwidth box has-text-black box description-input is-size-6"
                                    style="width: 100%" placeholder="Opis..."></textarea>
                            </article>
                            <article class="tile is-child notification is-primary">
                                <p class="title is-half">Parametry</p>
                                <div class="tile is-parent">
                                    <div class="tile is-horizontal">
                                        <div class="control has-icons-left">
                                            <input type="text" class="input" placeholder="Rasa...">
                                            <div class="icon is-small is-left" style="color: black;">
                                                <i class="fas fa-fingerprint"></i>
                                            </div>
                                        </div>
                                        <!-- <button
                                                            class="button button-checkbox button-checkbox-info has-icons-left"
                                                            onclick="ToggleShowHaurioData(this);">
                                                            <span class="icon">
                                                                <i class="fas fa-hospital-symbol"></i>
                                                            </span>
                                                            <span>Posiada Haurio</span>
                                                        </button> -->
                                        <div class="control has-icons-left">
                                            <input type="color" class="input" value="#e66465">
                                            <div class="icon is-small is-left">
                                                <i class="fas fa-fill-drip"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="tile is-child notification is-warning">
                                <p class="title">Cechy główne</p>
                                <table class="table is-striped is-narrow is-fullwidth is-size-5 box">
                                    <thead>
                                        <tr>
                                            <th class="attribute-name">WW</th>
                                            <th class="attribute-name">US</th>
                                            <th class="attribute-name">K</th>
                                            <th class="attribute-name">Odp</th>
                                            <th class="attribute-name">Zr</th>
                                            <th class="attribute-name">Int</th>
                                            <th class="attribute-name">SW</th>
                                            <th class="attribute-name">Ogd</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </article>
                        </div>
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-info">
                                <div class="level">
                                    <div class="level-left">
                                        <div class="level-item">
                                            <p class="title">Pancerz</p>
                                        </div>
                                    </div>
                                    <div class="level-right">
                                        <div class="level-item">
                                            <button class="button is-success">
                                                <span class="icon is-small">
                                                    <i class="fas fa-plus"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <table class="table is-striped is-narrow is-fullwidth box">
                                    <thead>
                                        <tr>
                                            <th class="attribute-name">Głowa</th>
                                            <th class="attribute-name">Korpus</th>
                                            <th class="attribute-name">L.&nbsp;Ręka</th>
                                            <th class="attribute-name">P.&nbsp;Ręka</th>
                                            <th class="attribute-name">L.&nbsp;Noga</th>
                                            <th class="attribute-name">P.&nbsp;Noga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5" value="0">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5" value="0">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5" value="0">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5" value="0">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5" value="0">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5" value="0">
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="level">
                                    <div class="level-left">
                                        <div class="level-item">
                                            <p class="title">Broń</p>
                                        </div>
                                    </div>
                                    <div class="level-right">
                                        <div class="level-item">
                                            <button class="button is-success">
                                                <span class="icon is-small">
                                                    <i class="fas fa-plus"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <table class="table table is-striped is-narrow is-fullwidth box">
                                    <thead>
                                        <tr>
                                            <th class="attribute-name">Nazwa</th>
                                            <th class="attribute-name">Siła</th>
                                            <th class="attribute-name">Cechy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="is-marginless is-paddingless">
                                                <input type="text" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <textarea type="textarea" class="attribute-number is-size-5"></textarea>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </article>
                            <article class="tile is-child notification is-warning">
                                <p class="title">Cechy drugorzędne</p>
                                <table class="table is-striped is-narrow is-fullwidth is-size-5 box">
                                    <thead>
                                        <tr>
                                            <th class="attribute-name">A</th>
                                            <th class="attribute-name">Żyw</th>
                                            <th class="attribute-name">S</th>
                                            <th class="attribute-name">Wt</th>
                                            <th class="attribute-name">Sz</th>
                                            <th class="attribute-name">Mag</th>
                                            <th class="attribute-name">PO</th>
                                            <th class="attribute-name">PP</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5" disabled>
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5" disabled>
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                            <th class="is-marginless is-paddingless">
                                                <input type="number" class="attribute-number is-size-5">
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-success">
                        <div class="tile is-parent is-vertical">
                            <div class="tile is-child">
                                <div class="content">
                                    <div class="level">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <p class="title">Umiejętności</p>
                                            </div>
                                        </div>
                                        <div class="level-right">
                                            <div class="level-item">
                                                <button class="button is-info">
                                                    <span class="icon is-small">
                                                        <i class="fas fa-plus"></i>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <select multiple placeholder="Wybierz umiejętności">
                                        <option value="1">Hazard</option>
                                        <option value="2">Hipnoza</option>
                                        <option value="3">Czytanie z Warg</option>
                                        <option value="4">Dowodzenie</option>
                                        <option value="5">Jeździectwo</option>
                                    </select>
                                </div>

                            </div>
                            <div class="tile is-child">
                                <div class="content">
                                    <div class="level">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <p class="title">Zdolności</p>
                                            </div>
                                        </div>
                                        <div class="level-right">
                                            <div class="level-item">
                                                <button class="button is-info">
                                                    <span class="icon is-small">
                                                        <i class="fas fa-plus"></i>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <select multiple placeholder="Wybierz zdolności">
                                        <option value="1">Hazard</option>
                                        <option value="2">Hipnoza</option>
                                        <option value="3">Czytanie z Warg</option>
                                        <option value="4">Dowodzenie</option>
                                        <option value="5">Jeździectwo</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="tile is-child notification" style="background-color: #4ECDC4;">
                        <div class="content">
                            <p class="title">Ekwipunek</p>
                            <textarea class="textarea"></textarea>
                        </div>
                    </article>
                </div>
            </div>
            <div class="tile is-parent is-horizontal">
                <div class="tile is-child">
                    <button class="button is-large is-fullwidth is-success is-hoverable">
                        <span class="icon is-large">
                            <i class="fas fa-plus"></i>
                        </span>
                        <span>Dodaj do kolejki</span>
                    </button>
                </div>
            </div>
        </div>
        <!-- Entity creator end -->
    </li>
</template>