import { createForm } from "./createForm.js";
import { el, setChildren } from "redom";
import { validateForm } from "./validateForm.js";

export default function paymentApp(app, titleText) {
    const form = createForm();
    setChildren(
        app,
        el(
            "div", { class: "container payment__container" },
            el("h2", { class: "payment__title" }, titleText),
            form.form
        )
    );
    validateForm(app);
}
