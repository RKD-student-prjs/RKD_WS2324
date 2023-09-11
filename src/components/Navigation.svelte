<script lang="ts">

</script>

<div class="container">
    <nav>
        <a href="#"> Suche </a>
        <a href="#"> Themengebiete </a>
    </nav>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        padding: 1em;
        width: 70%;
        height: 100%;
        background-color: #FFFFFF;
        border-radius: 20px;
    }

    nav {
        padding-top: 4px;
        padding-bottom: 4px;
    }

    nav > a {
        float: left;
    }

    a {
        color: inherit;
        text-decoration: none;
        padding-inline: 1.5em;
    }

    a:hover {
        color: inherit;
        text-decoration:underline red 5px;
        text-underline-offset: 1em;
        cursor:pointer;
    }

    @media (min-width: 640px) {
        .container {
            max-width: none;
        }
    }
</style>