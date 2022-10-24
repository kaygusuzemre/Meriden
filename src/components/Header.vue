<template>
    <div class="d-flex flex-column">
        <!-- eslint-disable-next-line vue/max-attributes-per-line -->
        <div class="header d-flex justify-content-between align-items-center pt-5 pb-4">
            <h4 class="">MERIDEN LIFE COACHING
            </h4>
            <div class="d-flex align-items-center">
                <div class="item">
                    <a class="menu">
                        Menü
                    </a>
                    <ul class="dd-menu">
                        <li>
                            <a href="#" class="">Kurse</a>
                        </li>
                        <li>
                            <a href="#" class="">Gemeinsam arbeiten</a>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <a href="">Einloggen</a>
                </div>
                <input type="button" class="btn btn-outline-danger text-uppercase p-3 item" value="kostenlose beratung">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
ul {
    list-style-type: none;
}

.item {
    padding-right: 10px;
}

.btn {
    background: linear-gradient(hsl(30.967741935483897,
                79.48717948717947%,
                92.3529411764706%), hsl(30.967741935483897,
                79.48717948717947%,
                92.3529411764706%) 50%, var(--fc) 50%, var(--fc));
    color: var(--fc);
    background-size: 100% 200%;
    transition: background 0.2s;
    border: solid 2px var(--fc);
    border-radius: 50px;
    color: var(--fc);
    font-size: 12px;
}

.btn:hover {
    background-position: 100% 100%;
    background-color: var(--fc);
    color: #e3d7ca;
    transition: 0.2s;
}

.dd-menu {
    display: none;
}

.menu:hover {
    .dd-menu {}
}
</style>