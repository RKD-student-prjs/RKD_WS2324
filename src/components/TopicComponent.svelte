<script>

//imports
let arrow_down = "./images/arrow_down.png";
let arrow_up = "./images/arrow_up.png";

export let data;

//variables needed for open and close
let themengebiet_open = false
let fach_list = []
let prof_list = []

//function to open "themengebiete"
function onClickThemen () {
    themengebiet_open = !themengebiet_open
    console.log(data)
    console.log(fach_list)
}

//function to open "fach"
function onClickFach(fach) {

    if (fach_list.includes(fach)) {
        var index = fach_list.indexOf(fach)
        fach_list.splice(index, 1);
    } else if (!fach_list.includes(fach)) {
        fach_list.push(fach)
    }
    
    fach_list = fach_list
}

//function to open "prof"
function onClickProf (prof) {

    if (prof_list.includes(prof)) {
        var index = prof_list.indexOf(prof)
        prof_list.splice(index, 1);
    } else if (!prof_list.includes(prof)) {
        prof_list.push(prof)
    }
    
    prof_list = prof_list

}

</script>

    <div 
    class="topLevelContainer"
    >
        <div class="topLevelTopic">
            <p class="type_title">
                {data["Hauptthema"]}
            </p>
            <button 
            class="image_container"
            on:click={onClickThemen}
            >
                <img 
                src={!themengebiet_open? arrow_down:arrow_up} 
                alt="arrow_down" class="image" />
            </button>
        </div>
        {#if data["Unterthemen"] && themengebiet_open}
            <div class="secondLevelContainer">
                <div class="topLevelTopic">
                    <p class="fachTitle">
                        {data["Unterthemen"]["Unterthema"]}
                    </p>
                    <button 
                    class="image_container"
                    on:click={() => onClickFach(data["Unterthemen"]["Unterthema"])}
                    >
                        <img 
                        src={!fach_list.includes(data["Unterthemen"]["Unterthema"])? arrow_down:arrow_up} 
                        alt="arrow_down" class="image" />
                    </button>
                </div>
                {#if data["Unterthemen"]["Professoren"] && fach_list.includes(data["Unterthemen"]["Unterthema"])}
                    {#each data["Unterthemen"]["Professoren"] as prof}
                        <div class="thirdLevelContainer">
                            <div class="topLevelTopic">
                                <p class="type_title">
                                    {prof["Name"]}
                                </p>
                                <button 
                                class="image_container"
                                on:click={onClickProf(prof["Name"]+data["Unterthemen"]["Unterthema"])}
                                >
                                    <img 
                                    src={!prof_list.includes(prof["Name"]+data["Unterthemen"]["Unterthema"])? arrow_down:arrow_up} 
                                    alt="arrow_down" class="image" />
                                </button>
                            </div>
                            {#if prof_list.includes(prof["Name"]+data["Unterthemen"]["Unterthema"])}
                            <div class="infoContainer">
                                <h3 style="text-align:left;">
                                    Email:
                                </h3>
                                <p style="text-align: left; margin: 10px;">
                                    {prof["Email"]}
                                </p>
                                <h3 style="text-align:left;">
                                    Personenseite:
                                </h3>
                                <li style="text-align: left; margin: 10px;">
                                    <a href={prof["Kontaktseite"]}>
                                        {prof["Kontaktseite"]}
                                    </a>
                                </li>
                                <h3 style="text-align:left;">
                                    Relevante Links:
                                </h3>
                                <ul style="overflow-x:auto">
                                    {#each prof["Links"] as link}
                                    <li style="text-align: left; margin: 10px;">
                                        <a href={link}>
                                            {link}
                                        </a>
                                    </li>
                                    {/each}
                                </ul>
                                <h3 style="text-align:left;">
                                    Schlagworte:
                                </h3>
                                <ul style="overflow-x:auto">
                                    {#each prof["Schlagworte"] as wort}
                                    <li style="text-align: left; margin: 10px;">
                                        <p>
                                            {wort}
                                        <p>
                                    </li>
                                    {/each}
                                </ul>
                            </div>
                            {/if}
                        </div>
                    {/each}
                {/if}
            </div>
        {/if}
    </div>

<style>

	.topLevelContainer {
		width: 100%;
		display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 10px;
        background-color: #F8F8F8;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: border-box;    /* Firefox, other Gecko */
		box-sizing: border-box;         /* Opera/IE 8+ */
	}

    .secondLevelContainer {
		width: 100%;
		display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 10px;
        background-color: #E7E7E7;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: border-box;    /* Firefox, other Gecko */
		box-sizing: border-box;         /* Opera/IE 8+ */
	}

    .thirdLevelContainer {
		width: 100%;
		display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 10px;
        background-color: #C3C3C3;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: border-box;    /* Firefox, other Gecko */
		box-sizing: border-box;         /* Opera/IE 8+ */
	}

    .topLevelTopic {
        width: 100%;
        height:100%;
		display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .fachTitle {
        width: 80%;
        text-align: left;
        overflow-x: auto;
        font-size: 20px;
    }

    .infoContainer {
        width: 100%;
		display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .image_container {
        max-width: 45px;
        height: 45px;
        border: none;
        background-color: transparent;
        margin: 0;
    }

    .image {
        width: 100%;
    }

    .type_title{
        font-size: 20px;
    }


	@media (min-width: 640px) {
		.container {
			max-width: none;
		}
	}
</style>