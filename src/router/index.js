import { createRouter, createWebHistory } from "vue-router";
// import Banner from "../views/Banner.vue";
import Hero from "../views/Hero.vue";
// import Newsletter from "../views/Newsletter.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		// {
		// 	path: "/banner",
		// 	component: Banner,
		// },
		{
			path: "/",
			component: Hero,
		},
		// {
		// 	path: "/newsletter",
		// 	component: Newsletter,
		// },
	],
});

export default router;
