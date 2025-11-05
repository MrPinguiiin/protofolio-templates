<script lang="ts">
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import Badge from '../ui/badge/badge.svelte';

	let {
		href,
		title,
		description,
		dates,
		tags,
		link,
		image,
		video,
		links
	}: {
		href: string;
		title: string;
		description: string;
		dates: string;
		tags: readonly string[];
		link?: string;
		image: string;
		video: string;
		links: { icon: any; type: string; href: string }[];
	} = $props();

	let _class = $state('');
	let videoRef = $state<HTMLVideoElement | undefined>(undefined);
	let shouldLoadVideo = $state(false);

	onMount(() => {
		if (video && videoRef) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting && videoRef) {
							shouldLoadVideo = true;
							observer.disconnect();
						}
					});
				},
				{ rootMargin: '50px' }
			);

			if (videoRef) {
				observer.observe(videoRef);
			}
			return () => observer.disconnect();
		}
	});
</script>

<!-- Card -->
<div
	class="flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground transition-all duration-300 ease-out hover:shadow-lg"
>
	<a href={href || '#'} class="block cursor-pointer">
		{#if video}
			<video
				bind:this={videoRef}
				class="pointer-events-none mx-auto h-40 w-full object-cover object-top"
				src={shouldLoadVideo ? video : ''}
				autoplay
				loop
				muted
				preload={shouldLoadVideo ? 'auto' : 'none'}
				playsinline
			></video>
		{:else}
			<img class="h-40 w-full overflow-hidden object-cover object-top" src={image} alt={title} />
		{/if}
	</a>
	<!-- Card Header -->
	<div class="flex flex-col px-2">
		<div class="space-y-1">
			<!-- Card Title -->
			<div class="mt-1 text-base">{title}</div>
			<time class="font-sans text-xs">{dates}</time>
			<div class="hidden font-sans text-xs underline print:visible">
				{link?.replace('https://', '').replace('www.', '').replace('/', '')}
			</div>
			<div
				class="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert"
			>
				{@html marked(description)}
			</div>
		</div>
	</div>
	<!-- Card Content -->
	<div class="mt-auto flex flex-col text-pretty px-2 font-sans text-sm text-muted-foreground">
		{#if tags && tags.length > 0}
			<div class="mt-2 flex flex-wrap gap-1">
				{#each tags as tag}
					<Badge class="rounded-[4px] px-1 py-0 text-[10px]" variant="secondary">
						{tag}
					</Badge>
				{/each}
			</div>
		{/if}
	</div>
	<!-- Card Footer -->
	<div class="flex items-center px-2 pb-2 pt-2">
		{#if links && links.length > 0}
			<div class="flex flex-row flex-wrap items-start gap-1">
				{#each links as link}
				{@const Icon = link.icon}
						<a href={link?.href} target="_blank">
							<Badge class="flex items-center justify-center gap-1 px-2 py-1 text-[10px]">
								<Icon class="mb-px size-3" strokeWidth={1.6} />
								{link.type}
							</Badge>
						</a>
					{/each}
			</div>
		{/if}
	</div>
</div>