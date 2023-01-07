import { getPostById } from '$lib/server/controller/post.js';

/** @type {import('./$types').PageServerLoad} */
export const load = ({params}) => {
  return getPostById(params.slug);
};


