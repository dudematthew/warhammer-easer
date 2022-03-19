<script>
    export default {
        props: ['data', 'icon'],
        data () {
            return {
                isCollapsed: false
            }
        }
    }
</script>

<template>
    <div class="box is-fullwidth m-1">
        <!-- Main container -->
        <nav class="level mb-0" style="white-space: wrap">
            <!-- Left side -->
            <div class="level-left">
                <div class="level-item m-0">
                    <span class="icon">
                        <i :class="this.icon"></i>
                    </span>
                </div>
                <div class="level-item" style="white-space: wrap">
                    <span class="has-text-weight-bold ml-1">{{data.name}}</span>
                </div>
            </div>

            <!-- Right side -->
            <div class="level-right">
                <p class="level-item" v-if="data.description !== ''">
                    <a class="link" @click="isCollapsed = !isCollapsed">
                        <i v-if="!isCollapsed" class="fa-solid fa-circle-chevron-down"></i>
                        <i v-else class="fa-solid fa-circle-chevron-up"></i>
                    </a>
                </p>
                <p class="level-item">
                    <button class="delete is-small has-background-danger"></button>
                </p>
            </div>
        </nav>
        <p v-if="data.description != '' && isCollapsed">
            {{data.description}}
        </p>
    </div>
</template>