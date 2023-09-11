<script lang="ts">
	import Router from 'svelte-spa-router'

	import Main from './routes/main.svelte'

	const routes = {
		// Exact path
		'/': Main,

		// Using named parameters, with last being optional
		//'/author/:first/:last?': Author,

		// Wildcard parameter
		//'/book/*': Book,

		// Catch-all
		// This is optional, but if present it must be the last
		//'*': NotFound,
	}
</script>

<svelte:head>
	<title>TH Köln Recommender System</title>
	<!-- meta -->
	<!-- general -->
	<meta name="description" content="Expertensuche und Empfehlung auf Basis von Fach- und Themengebieten an der TH Köln.">
	<meta name=”robots” content="index, follow">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<!-- Google -->
	<meta name="google-site-verification" content="TODO: site verification key here"> <!-- todo -->
	<!-- OGP (Facebook, Xing, LinkedIn, ...) -->
	<meta property="og:title" content="TH Köln Recommender System: Expertensuche an der TH Köln" />
	<meta property="og:image" content="TODO_IMAGE_URL" /> <!-- todo min 600x314, ratio 1,91:1 -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="TODO_URL_OF_THIS_WEBSITE" /> <!-- todo -->
	<meta property="og:site_name" content="TH Köln" />
	<meta property=“og:description“ content="Expertensuche und Empfehlung auf Basis von Fach- und Themengebieten an der TH Köln." />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" /> <!-- summary or summary_large_image is recommended for websites -->
	<meta name="twitter:title" content="TH Köln Recommender System: Expertensuche an der TH Köln" />
	<meta name="twitter:description" content="Expertensuche und Empfehlung auf Basis von Fach- und Themengebieten an der TH Köln." />
	<meta name="twitter:image" content="TODO_IMAGE_URL" /> <!-- todo recommended for summary_large_image: 800x419 or 1600x838 (ratio: 1,91:1) -->
	<meta name="twitter:site" content="@th_koeln" />
</svelte:head>

<body>
	<Router {routes}/>
</body>

<style>
	body {
		position: absolute;
    	top: 0; 
		right: 0; 
		bottom: 0; 
		left: 0;
		background-color: #E5E5E5;
		margin: 0;
		padding: 0;
	}


	@media (min-width: 640px) {

	}
</style>
