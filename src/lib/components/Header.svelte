<script lang="ts">
	import { type Content } from "@prismicio/client";

	export let settings: Content.SettingsDocument;
</script>

<header>
	<nav>
		<div class="">
			<div class="">
				<a href="/" class="text-xl font-extrabold trackig-tighter text-slate-900">
					{settings.data.name}
				</a>
			</div>
		</div>
	</nav>
</header>
