<script lang="ts">
    import SearchMask from "./SearchMask.svelte";
    import SearchResult from "./SearchResult.svelte";

    let searchFor = ''
    </script>
    
    <div class="container">
        <span>Willkommen zur</span>
        <h1>Expertinnen - und Expertensuche</h1>
        <p>
            Mit diesem Tool können Sie unter den Lehrenden der TH Köln nach Experten in ihrem jeweiligen Fachgebiet suchen.
Durch Eingabe eines Forschungs-/Lehrgebietes in die Suchmaske erhalten Sie eine Liste der Experten für das gesuchte Fachgebiet mit Angaben zu Lehre, Forschung und Themengebiet.
        </p>
        <SearchMask bind:searchTerm={searchFor}/>
        <div style="display:flex; flex-direction:column; width:100%;margin-top: 10px;">
            {#if searchFor}
            {#each searchFor as expertId}
                <SearchResult professorDetails={expertId} />
            {/each}
        {/if}
        </div>
    </div>
    
    
    <style>
        .container {
            padding: 2.5em;
            padding-top: 3em;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 70%;
            background-color: #FFFFFF;
            border-radius: 20px;
            -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
            -moz-box-sizing: border-box;    /* Firefox, other Gecko */
            box-sizing: border-box;         /* Opera/IE 8+ */
    
        }
    
        span, h1 {
            align-self: flex-start;
            margin: 0;
            padding-bottom: 0;
        }
    
        span {
            font-size: small;
            padding-bottom: 0.25em;
        }
    
        p {
            padding-top: 1em;
            padding-bottom: 1em;
        }
    
    
        @media only screen and (max-width: 992px) {
		.container {
			width: 100%;
		}
	}
    </style>
    