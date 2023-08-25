
<script>
import Heading from '$lib/Heading.svelte';
import Section from '$lib/Section.svelte';
import { i } from '@inlang/sdk-js';
</script>

<svelte:head>
	<title>{i("classes.title")} - Happy Island</title>
</svelte:head>

<Heading title={i("classes.title")} content={i("classes.description")} photo="/photos/classes/background.jpeg" />

<div class="container px-5 py-24 mx-auto">
	
	<Section
		title={i("classes.computer.title")}
		content={i("classes.computer.content")}
		photos={["/photos/classes/computer/10922657_780167282065932_5502308458738222358_o.jpg","/photos/classes/computer/10960014_775873125828681_2370854474465018182_o.jpg"]}
		thumbnails={["/photos/classes/computer/10922657_780167282065932_5502308458738222358_o-thumb.jpg","/photos/classes/computer/10960014_775873125828681_2370854474465018182_o-thumb.jpg"]}
	/>
	

	<Section
		title={i("classes.language.title")}
		content={i("classes.language.content")}
		photos={[]}
		thumbnails={[]}
	/>
	

	<Section
		title={i("classes.arts_crafts.title")}
		content={i("classes.arts_crafts.content")}
		photos={["/photos/classes/arts_crafts/10648532_775878405828153_1812554862237873243_o.jpg","/photos/classes/arts_crafts/1510815_775456349203692_1993103331962263471_n.jpg","/photos/classes/arts_crafts/278057332_5025039620911989_2212088930332645616_n.jpg","/photos/classes/arts_crafts/328673160_741298967712476_2672639681903643518_n.jpg","/photos/classes/arts_crafts/328682101_1352591398862193_4600978259946855159_n.jpg","/photos/classes/arts_crafts/328697742_656636376216584_1315663152102096446_n.jpg","/photos/classes/arts_crafts/328755520_6145524515500035_7217987931757088285_n.jpg","/photos/classes/arts_crafts/351338517_793822392453193_6784094788631107757_n.jpg","/photos/classes/arts_crafts/351344009_1436719970414854_2854506136712270561_n.jpg","/photos/classes/arts_crafts/351351067_2434078553432181_1211911244877608423_n.jpg","/photos/classes/arts_crafts/351370284_1566739147185682_6691775919170551493_n.jpg","/photos/classes/arts_crafts/351406696_628305295635890_101718103900138650_n.jpg","/photos/classes/arts_crafts/352183513_160118083713926_5952643584747905974_n.jpg","/photos/classes/arts_crafts/352201772_801401518017494_6905313134473626207_n.jpg","/photos/classes/arts_crafts/352367563_581809524091916_2452120127544515351_n.jpg"]}
		thumbnails={["/photos/classes/arts_crafts/10648532_775878405828153_1812554862237873243_o-thumb.jpg","/photos/classes/arts_crafts/1510815_775456349203692_1993103331962263471_n-thumb.jpg","/photos/classes/arts_crafts/278057332_5025039620911989_2212088930332645616_n-thumb.jpg","/photos/classes/arts_crafts/328673160_741298967712476_2672639681903643518_n-thumb.jpg","/photos/classes/arts_crafts/328682101_1352591398862193_4600978259946855159_n-thumb.jpg","/photos/classes/arts_crafts/328697742_656636376216584_1315663152102096446_n-thumb.jpg","/photos/classes/arts_crafts/328755520_6145524515500035_7217987931757088285_n-thumb.jpg","/photos/classes/arts_crafts/351338517_793822392453193_6784094788631107757_n-thumb.jpg","/photos/classes/arts_crafts/351344009_1436719970414854_2854506136712270561_n-thumb.jpg","/photos/classes/arts_crafts/351351067_2434078553432181_1211911244877608423_n-thumb.jpg","/photos/classes/arts_crafts/351370284_1566739147185682_6691775919170551493_n-thumb.jpg","/photos/classes/arts_crafts/351406696_628305295635890_101718103900138650_n-thumb.jpg","/photos/classes/arts_crafts/352183513_160118083713926_5952643584747905974_n-thumb.jpg","/photos/classes/arts_crafts/352201772_801401518017494_6905313134473626207_n-thumb.jpg","/photos/classes/arts_crafts/352367563_581809524091916_2452120127544515351_n-thumb.jpg"]}
	/>
	

	<Section
		title={i("classes.fitness.title")}
		content={i("classes.fitness.content")}
		photos={["/photos/classes/fitness/chair_1.jpeg","/photos/classes/fitness/chair_2.jpeg","/photos/classes/fitness/chair_3.jpeg","/photos/classes/fitness/chair_4.jpeg","/photos/classes/fitness/chair_5.jpeg","/photos/classes/fitness/chair_6.jpeg"]}
		thumbnails={["/photos/classes/fitness/chair_1-thumb.jpeg","/photos/classes/fitness/chair_2-thumb.jpeg","/photos/classes/fitness/chair_3-thumb.jpeg","/photos/classes/fitness/chair_4-thumb.jpeg","/photos/classes/fitness/chair_5-thumb.jpeg","/photos/classes/fitness/chair_6-thumb.jpeg"]}
	/>
	
</div>
