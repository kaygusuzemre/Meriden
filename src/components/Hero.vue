<template>
    <div class="col">
        <div class="row-8 row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 pl-3">
            <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985112-PFMB5YC7KTBTMJM67FM3/image-asset.jpeg?format=1000w"
                alt="" class="item">
            <div class="d-flex flex-column justify-content-between item align-items-center text-center">
                <h1 class="header-2">MERIDEN COACHING</h1>
                <div class="pb-4">
                    <p class="pb-4">
                        BEZIEHUNGEN
                        <br>
                        FAMILIE
                        <br>
                        ARBEIT
                        <br>
                        LEBEN
                    </p>
                </div>
                <div></div>
                <input type="button" class="btn btn-outline-danger text-uppercase ps-4 pe-4 p-3"
                    value="gemeinsame arbeit">
            </div>
        </div>
        <div class="row-4 bg-light d-flex flex-column align-items-center text-center mt-5">
            <div class="cardInfo p-5">
                <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985135-WSJLOEP8G5HU93BZWJPC/Star%402x.png?format=300w"
                    alt="" width="15%" height="auto">
                <h2 class="">Zuhören ist die Grundlage meines Coaching-Ansatzes. Ich unterstütze dich dabei,
                    wie du
                    deine Ängste
                    überwinden und genau
                    das Leben leben kannst, das du dir wünschst.</h2>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cardInfo {
    max-width: 75%
}

p {
    font-size: 2vw;
}

h1 {
    font-size: 7vw;
}

h2 {
    font-size: 2.3vw;
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
}

.btn:hover {
    background-position: 100% 100%;
    background-color: var(--fc);
    color: #e3d7ca;
    transition: 0.2s;
}
</style>