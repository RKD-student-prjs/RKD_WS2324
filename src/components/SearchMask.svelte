<script>
    import {personenArray, themengebieteArray, faecherArray, _data, schlagwoerterArray} from "../data/data";
    import AutocompleteItem from './AutocompleteItem.svelte';

    export let searchTerm = '';

    let filteredExperts = [];
    let rawResultExperts = [];
    let experts = personenArray.concat(themengebieteArray, faecherArray, schlagwoerterArray)

    let searchInput;
    let inputValue = "";
    $: if (!inputValue) {
        filteredExperts = [];
        highlightedItemIndex = null;
    } else {
        // this is optional and would constantly update the results without submit press
        // filterExperts()
        // searchTerm = calculateSearchResultObject([...new Set(getExpertIds(searchResultTerms))])
    }

    const getAllSwForProf = (profId) => {
        let allSchlagworte = []

        for (let themengebietIndex = 0; themengebietIndex < _data.length; themengebietIndex++) {
            let currentFach = _data[themengebietIndex].Unterthemen
            for (let h = 0; h < currentFach.Professoren.length; h++) {
                if (currentFach.Professoren[h].Id === profId) {
                    for (let swIndex = 0; swIndex < currentFach.Professoren[h].Schlagworte.length; swIndex++) {
                        let currentSchlagwort = currentFach.Professoren[h].Schlagworte[swIndex]
                        allSchlagworte.push(currentSchlagwort)
                    }
                }
            }
        }

        return [...new Set(allSchlagworte)]
    }

    const getProfessorDetailsFromId = (searchId) => {
        let professorDetails = {}

        for (let themengebietIndex = 0; themengebietIndex < _data.length; themengebietIndex++) {

            let currentFach = _data[themengebietIndex].Unterthemen
            for (let profIndex = 0; profIndex < currentFach.Professoren.length; profIndex++) {
                if (currentFach.Professoren[profIndex].Id === searchId) {
                    professorDetails['name'] = currentFach.Professoren[profIndex].Name
                    professorDetails['links'] = currentFach.Professoren[profIndex].Links
                    professorDetails['schlagworte'] = getAllSwForProf(searchId)
                    professorDetails['Email'] = currentFach.Professoren[profIndex].Email
                    professorDetails['Kontaktseite'] = currentFach.Professoren[profIndex].Kontaktseite
                    return professorDetails
                }
            }

        }
        return professorDetails
    }

    const calculateSearchResultObject = (searchArray) => {
        let resultObjectArray = []
        for (let index = 0; index < searchArray.length; index++) {
            let profDetails = getProfessorDetailsFromId(searchArray[index])
            resultObjectArray.push(profDetails)
        }
        return resultObjectArray
    }

    const getPersonIdsFromThemengebiet = (searchedThemengebiet) => {

        let personIds = []

        for (let themengebietIndex = 0; themengebietIndex < _data.length; themengebietIndex++) {
            if (_data[themengebietIndex].Hauptthema === searchedThemengebiet) {
                let currentFach = _data[themengebietIndex].Unterthemen
                for (let h = 0; h < currentFach.Professoren.length; h++) {
                    let professorId = currentFach.Professoren[h].Id
                    personIds.push(professorId)
                }
            }
        }

        return personIds
    }

    const getPersonIdsFromFach = (searchedFach) => {
        let personIds = []

        for (let themengebietIndex = 0; themengebietIndex < _data.length; themengebietIndex++) {
            let currentFach = _data[themengebietIndex].Unterthemen
            if (_data[themengebietIndex].Unterthemen.Unterthema === searchedFach) {
                for (let h = 0; h < currentFach.Professoren.length; h++) {
                    let professorId = currentFach.Professoren[h].Id
                    personIds.push(professorId)
                }
            }
        }

        return personIds
    }

    const getPersonIdsFromPerson = (searchedPerson) => {
        let personIds = []

        for (let themengebietIndex = 0; themengebietIndex < _data.length; themengebietIndex++) {
            let currentFach = _data[themengebietIndex].Unterthemen
            for (let h = 0; h < currentFach.Professoren.length; h++) {
                if (currentFach.Professoren[h].Name === searchedPerson) {
                    let professorId = currentFach.Professoren[h].Id
                    personIds.push(professorId)
                }
            }
        }

        return personIds
    }

    const getPersonIdsFromSchlagwort = (searchedSchlagwort) => {
        let personIds = []

        for (let themengebietIndex = 0; themengebietIndex < _data.length; themengebietIndex++) {
            let currentFach = _data[themengebietIndex].Unterthemen
            for (let h = 0; h < currentFach.Professoren.length; h++) {
                for (let swIndex = 0; swIndex < currentFach.Professoren[h].Schlagworte.length; swIndex++) {
                    if (currentFach.Professoren[h].Schlagworte[swIndex] === searchedSchlagwort) {
                        let professorId = currentFach.Professoren[h].Id
                        personIds.push(professorId)
                    }
                }
            }
        }

        return personIds
    }

    const getExpertIds = (searchTermArray) => {
        let foundIds = []
        searchTermArray.forEach(searchTermItem => {
            if (personenArray.indexOf(searchTermItem) > -1) {
                foundIds = foundIds.concat(getPersonIdsFromPerson(searchTermItem))
            } else if (themengebieteArray.indexOf(searchTermItem) > -1) {
                foundIds = foundIds.concat(getPersonIdsFromThemengebiet(searchTermItem))
            } else if (faecherArray.indexOf(searchTermItem) > -1) {
                foundIds = foundIds.concat(getPersonIdsFromFach(searchTermItem))
            } else if (schlagwoerterArray.indexOf(searchTermItem) > -1) {
                foundIds = foundIds.concat(getPersonIdsFromSchlagwort(searchTermItem))
            }
        })
        return foundIds
    }

    const filterExperts = () => {
        let matchArr = []
        let exportArr = []
        if (inputValue) {
            experts.forEach(expert => {
                if (expert.toLowerCase().includes(inputValue.toLowerCase())) {
                    matchArr = [...matchArr, makeMatchingCharsBold(expert)];
                    exportArr = [...exportArr, expert];
                }
            });
        }
        filteredExperts = matchArr;
        rawResultExperts = exportArr;
        return rawResultExperts
    }

    function clearSearch() {
        highlightedItemIndex = null;
        inputValue = "";
        searchInput.focus();
    }

    const setInputAndSubmit = (expert) => {
        inputValue = removeBoldTags(expert)
        submitSearch()
    }

    const submitSearch = () => {
        if (inputValue) {
            let searchResultTerms = filterExperts()
            searchTerm = calculateSearchResultObject([...new Set(getExpertIds(searchResultTerms))])
            clearSearch();
        } else {
            alert("Keine Eingabe in der Suchmaske.")
        }
    }

    const makeMatchingCharsBold = (str) => {
        let re = new RegExp(inputValue, 'gi');
        let matched = str.match(re); // return type array
        let boldWrappedMatch = `<strong>${matched}</strong>`;
        return str.replaceAll(matched, boldWrappedMatch);
    }

    const removeBoldTags = (str) => {
        return str.replace(/<(.)*?>/g, "");
    }

    let highlightedItemIndex = null;

    const navigateWithArrowKeys = (event) => {
        if (event.key === "ArrowDown" && highlightedItemIndex <= filteredExperts.length - 1) {
            highlightedItemIndex === null ? highlightedItemIndex = 0 : highlightedItemIndex += 1
        } else if (event.key === "ArrowUp" && highlightedItemIndex !== null) {
            highlightedItemIndex === 0 ? highlightedItemIndex = filteredExperts.length - 1 : highlightedItemIndex -= 1
        } else if (event.key === "Enter") {
            if (highlightedItemIndex) {
                inputValue = removeBoldTags(filteredExperts[highlightedItemIndex]);
            }
        }
    }
</script>

<svelte:window on:keydown={navigateWithArrowKeys}/>

<form autocomplete="off" on:submit|preventDefault={submitSearch}>
    <div class="autocomplete">
        <input type="submit" value="">
        <input id="search-input"
               type="text"
               placeholder="Suche nach Experten oder Fachgebieten"
               bind:this={searchInput}
               bind:value={inputValue}
               on:input={filterExperts}>
    </div>
    {#if filteredExperts.length > 0}
        <ul id="autocomplete-items-list">
            {#each filteredExperts as expert, i}
                <AutocompleteItem itemLabel={expert} selected={i === highlightedItemIndex}
                                  on:click={() => {setInputAndSubmit(expert)}}/>
            {/each}
        </ul>
    {/if}
</form>


<style>
    form {
        width: 100%;
        position: relative;
    }

    div.autocomplete {
        position: relative;
        display: flex;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 10px;
        font-size: 16px;
        margin: 0;
    }

    input {
        padding: 0;
        margin: 0;
    }

    input:focus {
        outline: none;
    }

    input[type=text] {
        width: 100%;
        border: none;
        float: right;
        padding-left: 0.5em;
    }

    input[type=submit] {
        float: left;
        border: none;
        width: 20px;
        padding-inline: 1em;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 512 512' fill-rule='evenodd'%3E%3Cpath d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
    }

    #autocomplete-items-list {
        position: absolute;
        z-index: 99;
        padding: 0;
        margin: 0;
        margin-inline: 20px;
        width: calc(100% - 40px);
        border: 1px solid #ddd;
        background-color: #ddd;
    }
</style>