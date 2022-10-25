<template>
    <div>
        <div class="d-flex flex-column text-center p-5">
            <h1>MEINE COACHING-METHODE</h1>
            <div class="row p-5">
                <div class="col-4">
                    <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985151-8DUMKRH0HIY33BY434O9/Star+1.png"
                        alt="" height="auto" width="25%" class="mb-3">
                    <h4 class="mb-3">FOKUS</h4>
                    <p>Alles beginnt damit, dass man lernt, sich auf das zu konzentrieren, was man wirklich will.</p>
                </div>
                <div class="col-4">
                    <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985161-BSUJW60W4P2L0CTX6FI7/Star+2.png"
                        alt="" height="auto" width="25%" class="mb-3">
                    <h4 class="mb-3">REFLEKTIEREN</h4>
                    <p>Als Nächstes ergründest du, was dich vielleicht blockiert, und lernst, wie du diese Hindernisse
                        überwinden kannst.</p>
                </div>
                <div class="col-4">
                    <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985170-PVBL1S1SLRGM7EV6HET2/Subtract.png"
                        alt="" height="auto" width="25%" class="mb-3">
                    <h4 class="mb-3">VERFEINERN</h4>
                    <p>Der letzte Schritt? Wir lernen, wie wir das Gelernte kontinuierlich verfeinern können. Betrachte
                        dies
                        als deinen
                        Neuanfang.</p>
                </div>
            </div>
        </div>
        <div class="row row-cols-2">
            <div class="col-6 d-flex flex-column justify-content-between item align-items-center text-center">
                <h1>DEMNÄCHST STATTFINDENDER KURS</h1>
                <h4 class="">
                    SELBSTLIEBE
                    <br>
                    14.‑16. SEP.
                    <br>
                    VIRTUELL
                </h4>
                <div class=""></div>
                <input type="button" class="btn btn-outline text-uppercase ps-4 pe-4 p-3" value="mehr erfahren">
            </div>
            <div class="portrait col-6">
                <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985180-OXY37BIRTQMB8M75BVLF/course.jpg"
                    alt="fluid" class="img-fluid" style="">
                <div class="figure">
                    <h1 class="pb-5">SELBSTLIEBE</h1>
                    <p class="" style="width:20vw">EIN 3-TÄGIGER WORKSHOP, BEI DEM DU LERNST,
                        <br>
                        <br>
                        MEHR LIEBE FÜR DICH SELBST ZU EMPFINDEN
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
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

h1 {
    font-size: 5vw;
}

.figure p,
.figure h1 {
    color: white;
}

.figure p {
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
}

.figure h1 {
    position: absolute;
    top: 15%;
    left: 15%;
    overflow: hidden;
}

.portrait {
    position: relative;
    overflow: hidden;
}

.portrait:hover img {
    transform: scale(1.2);
    overflow: hidden;
}
</style>