// import { createRouter, createWebHistory } from "vue-router";
// // import Home from "../views/Home.vue";

// const routes = [
// 	// {
// 	// 	path: "/",
// 	// 	name: "home",
// 	// 	component: Home,
// 	// },
// 	{
// 		path: "/Arbeit",
// 		name: "arbeit",
// 		component: () => import("../views/Arbeit.vue"),
// 	},
// ];

// const router = createRouter({
// 	history: createWebHistory(import.meta.env.BASE_URL),
// 	routes,
// });

// export default router;

import { createRouter, createWebHistory } from "vue-router";
import Arbeit from "../views/Arbeit.vue";
import Arbeit from "../views/Banner.vue";
import Arbeit from "../views/Header.vue";
import Arbeit from "../views/Newsletter.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/arbeit",
			component: Arbeit,
		},
		{
			path: "/banner",
			component: Banner,
		},
		{
			path: "/header",
			component: Header,
		},
		{
			path: "/newsletter",
			component: Newsletter,
		},
		// {
		// 	path: "/arbeit",
		// 	component: () => import("../views/Arbeit.vue"),
		// },
	],
});

export default router;
