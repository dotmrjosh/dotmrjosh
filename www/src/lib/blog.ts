import type { Component } from "svelte";

export type PostMetadata = {
	title: string;
	description?: string;
};

export type PostModule = { default: Component; metadata: PostMetadata };
