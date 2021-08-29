import type { EndpointOutput } from '@sveltejs/kit'

const pages = [{ name: "opensource", url: "/pages/opensource"}, {name: "My curriculum vitae", url: "/pages/cv"}];

export async function get () :Promise<EndpointOutput<Array<{ name: string, url: string}>>>{
    return {
        body: pages
    }
}
