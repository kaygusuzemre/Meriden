<template>
    <div class="pt-5">
        <div class="row row-cols-5" style="">
            <div class="col m-0 p-0">
                <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985234-Q8U431WMAPYKEQW98PNK/Group+25%402x.jpg"
                    alt="" class="img-fluid">
            </div>
            <div class="col m-0 p-0">
                <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985274-XC3JBXS85N3LEZS3EWQX/girls.jpg"
                    alt="" class="img-fluid" style="">
            </div>
            <div class="col m-0 p-0">
                <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985249-6QGGHCTCUKCT2SVI255X/Group+26%402x.jpg"
                    alt="" class="img-fluid">
            </div>
            <div class="col m-0 p-0">
                <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985292-LX9KLHL49DDD13MXJYA6/image+184.jpg"
                    alt="" class="img-fluid">
            </div>
            <div class="col m-0 p-0">
                <img src="https://images.squarespace-cdn.com/content/v1/618554f06b8283365679ba7a/1636127985219-Z8979G097HS7UMC843VB/Group+27%402x.jpg"
                    alt="" class="img-fluid">
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <h1 class="text-uppercase">Newsletter</h1>
                <p>Melde dich für Coaching-Tipps, Events und vieles mehr an.</p>
            </div>
            <div class="col-8 d-flex">
                <input type="text" class="form-control" placeholder="Vorname">
                <input type="text" class="form-control" placeholder="Nachname">
                <input type="text" class="form-control" placeholder="E-Mail Adresse">
                <input type="button" class="btn btn-outline text-uppercase ps-4 pe-4 p-3" value="registrieren">
            </div>
        </div>
        <hr style="">
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
    font-size: 12px;
}

.btn:hover {
    background-position: 100% 100%;
    background-color: var(--fc);
    color: #e3d7ca;
    transition: 0.2s;
}

img {}
</style>