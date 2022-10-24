<template>
    <div>
        <div class="d-flex flex-column text-center p-5">
            <h1>MEINE COACHING-METHODE</h1>
            <div class="row row-cols-3 justify-content-around align-items-center text-center">
                <div class="d-flex flex-column align-items-center">
                    <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985151-8DUMKRH0HIY33BY434O9/Star+1.png?format=300w"
                        alt="" height="auto" width="25%">
                    <h4>FOKUS</h4>
                    <p>Alles beginnt damit, dass man lernt, sich auf das zu konzentrieren, was man wirklich will.</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985161-BSUJW60W4P2L0CTX6FI7/Star+2.png?format=300w"
                        alt="" height="auto" width="25%">
                    <h4>REFLEKTIEREN</h4>
                    <p>Als Nächstes ergründest du, was dich vielleicht blockiert, und lernst, wie du diese Hindernisse
                        überwinden kannst.</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985170-PVBL1S1SLRGM7EV6HET2/Subtract.png?format=300w"
                        alt="" height="auto" width="25%">
                    <h4>VERFEINERN</h4>
                    <p>Der letzte Schritt? Wir lernen, wie wir das Gelernte kontinuierlich verfeinern können. Betrachte
                        dies
                        als deinen
                        Neuanfang.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h1>DEMNÄCHST STATTFINDENDER KURS</h1>
                <p class="">
                    SELBSTLIEBE
                    <br>
                    14.‑16. SEP.
                    <br>
                    VIRTUELL
                </p>
                <input type="button" class="btn btn-outline-danger text-uppercase p-3 item m-5" value="mehr erfahren">
            </div>
            <div class="portrait col-6">
                <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985180-OXY37BIRTQMB8M75BVLF/course.jpg?format=1000w"
                    alt="fluid" class="img-fluid img1" style="">
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
h1 {
    font-size: 5vw;
}

.figure h1,
p {
    color: white;
}

.figure {
    position: absolute;
    top: 30%;
    left: 20%;
}

.portrait {
    position: relative;
    overflow: hidden;
}

.portrait:hover img {
    transform: scale(1.1);
}
</style>