<script>
	import * as prismicH from '@prismicio/helpers';
	import { SliceZone } from '@prismicio/svelte';
	import { dev } from '$app/environment';
	import pico from '@picocss/pico';
	import SubHeading from '../lib/slices/SubHeading.svelte';

	const components = {
		sub_heading: SubHeading
	};

	export let data;
	console.log(data);
</script>

<main>
	<!-- {@html prismicH.asHTML(data)} -->
	{data.body.document.slugs}
	<pre>
		<!-- {JSON.stringify(document, null, 8)} -->
	</pre>

	<SliceZone slices={data.body.document.data.body} {components} dev />
</main>
