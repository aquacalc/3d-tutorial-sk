import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export const load = async () => {
	const client = createClient();

	const settings = await client.getSingle('settings');

  return {
    settings
  }
};
