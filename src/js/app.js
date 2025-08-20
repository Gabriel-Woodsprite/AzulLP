const profileWrap = document.querySelector(".profileWrap");
const headerTitle = document.querySelector(".headerTitle");

profileWrap.addEventListener("mouseenter", () => {
	headerTitle.classList.add("hide");
});

profileWrap.addEventListener("mouseleave", () => {
	headerTitle.classList.remove("hide");
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
	if (window.scrollY > 150) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});

document.addEventListener("DOMContentLoaded", async () => {
	const icons = document.querySelectorAll(".icon");

	for (const icon of icons) {
		const src = icon.getAttribute("data-src");
		if (!src) continue;

		try {
			const response = await fetch(src);
			const svgText = await response.text();
			icon.innerHTML = svgText; // inject SVG inline
		} catch (e) {
			console.error(`Could not load ${src}`, e);
		}
	}
});

// document.addEventListener("DOMContentLoaded", () => {
// 	// Inline your SVGs once (like you already do) — keeping your existing loader is fine.

// 	// Add per-hover randomness:
// 	document.querySelectorAll(".card__content").forEach(card => {
// 		const icons = card.querySelectorAll(".floating-icons .icon");

// 		card.addEventListener("mouseenter", () => {
// 			// bounds for random placement
// 			const container = card.querySelector(".floating-icons");
// 			const cRect = container.getBoundingClientRect();
// 			const iconSize = 60; // keep in sync with CSS
// 			const pad = 12;

// 			icons.forEach(icon => {
// 				// Randomize animation parameters (duration, delay, amplitude, x drift, rotation)
// 				const dur = 6 + Math.random() * 10; // 6–16s
// 				const delay = Math.random() * 3; // 0–3s
// 				const dx = (Math.random() < 0.5 ? -1 : 1) * (10 + Math.random() * 30); // ±(10–40)px horizontal drift
// 				const amp = -20 - Math.random() * 60; // -20 to -80px vertical amplitude (upwards)
// 				const rot = 360 + Math.floor(Math.random() * 360); // 360–720deg per cycle

// 				icon.style.setProperty("--dur", `${dur}s`);
// 				icon.style.setProperty("--delay", `${delay}s`);
// 				icon.style.setProperty("--dx", `${dx}px`);
// 				icon.style.setProperty("--amp", `${amp}px`);
// 				icon.style.setProperty("--rot", `${rot}deg`);

// 				// Randomize starting position within the container (with padding)
// 				const maxX = cRect.width - iconSize - pad * 2;
// 				const maxY = cRect.height - iconSize - pad * 2;
// 				const x = pad + Math.random() * Math.max(0, maxX);
// 				const y = pad + Math.random() * Math.max(0, maxY);

// 				icon.style.left = `${x}px`;
// 				icon.style.top = `${y}px`;
// 			});
// 		});

// 		// Optional: clear inline vars on leave if you want a fresh set next time (not required)
// 		// card.addEventListener("mouseleave", () => {
// 		//   icons.forEach((icon) => {
// 		//     icon.style.removeProperty("--dur");
// 		//     icon.style.removeProperty("--delay");
// 		//     icon.style.removeProperty("--dx");
// 		//     icon.style.removeProperty("--amp");
// 		//     icon.style.removeProperty("--rot");
// 		//   });
// 		// });
// 	});
// });
