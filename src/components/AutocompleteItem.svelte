<script>
    export let itemLabel;
    export let selected;
</script>

<style>
    li.autocomplete-item {
        list-style: none;
        z-index: 99;
        left: 0;
        right: 0;
        top: 100%;
        padding: 10px;
        cursor: pointer;
        border-bottom: 1px solid lightgray;
        background-color: white;
    }

    li.autocomplete-item:hover, li.autocomplete-item:active, .autocomplete-active {
        background-color: #dc6d39 !important;
        color: white;
    }
</style>

<li class="autocomplete-item" class:autocomplete-active={selected} on:click>{@html itemLabel}</li>