<script>
    import CreateEntity from './create-entity/create-entity.vue'
    import Queue from './queue/queue.vue'
    import Settings from './settings.vue'

    export default {
        name: "Tabs",
        components: {CreateEntity, Queue, Settings}
    };
</script>

<template>
    <div class="tabs-with-content tabs-wrapper">
        <div class="tabs is-centered mb-0 mt-5 is-toggle is-medium hasbackinfo">
            <ul>
                <li class="has-text-white is-active">
                    <a class="has-text-white">
                        <span class="icon is-small"><i class="fas fa-plus" aria-hidden="true"></i></span>
                        <span>Tworzenie bytu</span>
                    </a>
                </li>
                <li>
                    <a class="has-text-white">
                        <span class="icon is-small"><i class="fas fa-stream" aria-hidden="true"></i></span>
                        <span>Kolejka</span>
                    </a>
                </li>
                <li>
                    <a class="has-text-white">
                        <span class="icon is-small"><i class="fas fa-cogs" aria-hidden="true"></i></span>
                        <span>Ustawienia</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="tabs-content mt-0">
            <!-- entity creator start -->
            <ul>
                <CreateEntity />
                <Queue />
                <Settings />
            </ul>
        </div>
    </div>
</template>