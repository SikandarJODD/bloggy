import { writable } from 'svelte/store';

import r1 from "$lib/Concepts/r1.jpg";
import r2 from "$lib/Concepts/r2.jpeg";

export const blogCardData = writable([
    {
        title: "Svelte Store",
        imgSrc:
            "https://img.freepik.com/free-vector/update-concept-illustration_114360-2799.jpg?w=740&t=st=1684618746~exp=1684619346~hmac=a986b070ac00239edddd977fb8f1d6be5d6ee52fdee64b64504ca47af7ddf7a2",
        blogLink: "/blogs/svelte-store",
    },
    {
        title: "Svelte Components",
        imgSrc:
            "https://img.freepik.com/free-vector/hand-holding-pen-concept-illustration_114360-8430.jpg?t=st=1684619641~exp=1684620241~hmac=4788ab3b76770a43cdf7837e45cab3caee92da8717ea8fda284787e207eb6bd9",
        blogLink: "/blogs/svelte-components",
    },
    {
        title: "Reactive Declarations",
        imgSrc: r2,
        blogLink: "/blogs/reactive-declarations",
    },

])