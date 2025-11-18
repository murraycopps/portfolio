// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	namespace svelteHTML {
		interface HTMLAttributes<T> {
			'onoutsideclick'?: (event: CustomEvent) => void;
		}
	}
	// Add image module declarations
	declare module '*.JPEG' {
		const value: string;
		export default value;
	}
}

export {};
