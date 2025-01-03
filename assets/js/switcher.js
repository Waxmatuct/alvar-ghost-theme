export default function switcher() {
    Alpine.store("darkMode", {
        init() {
            let htmlElement = document.documentElement;
            let theme = localStorage.getItem("theme");
            let htmlClass = htmlElement.classList;
            if (
                theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                htmlClass.add("dark");
                this.on = true;
            } else {
                htmlClass.remove("dark");
                this.on = false;
            }
        },
        toggle() {
            this.on = !this.on;
            let htmlElement = document.documentElement;
            let htmlClass = htmlElement.classList;
            if (this.on) {
                localStorage.setItem("theme", "dark");
                htmlClass.add("dark");
            } else {
                localStorage.setItem("theme", "light");
                htmlClass.remove("dark");
            }
        },
    });
}
