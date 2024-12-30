export default function switcher() {
    Alpine.store("darkMode", {
        init() {
            // check for active theme
            let htmlElement = document.documentElement;
            let theme = localStorage.getItem("theme");
            let htmlClass = htmlElement.classList;
            if (theme === "dark") {
                htmlElement.setAttribute("theme", "dark");
                htmlClass.add("dark");
                this.on = true;
                console.log("dark");
            } else {
                htmlElement.setAttribute("theme", "light");
                htmlClass.remove("dark");
                this.on = false;
                console.log("light");
            }
        },
        toggle() {
            this.on = !this.on;
            let htmlElement = document.documentElement;
            let htmlClass = htmlElement.classList;
            if (this.on) {
                localStorage.setItem("theme", "dark");
                htmlClass.add("dark");
                htmlElement.setAttribute("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
                htmlClass.remove("dark");
                htmlElement.setAttribute("theme", "light");
            }
        },
    });
}
