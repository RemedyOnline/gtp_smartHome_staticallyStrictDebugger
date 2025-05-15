import "@testing-library/jest-dom";
import Light from "../basicSettings";
import AdvanceSettings from "../advanceSettings";
function setupDOM() {
    document.body.innerHTML = `
    <button class="entry_point"></button>
    <main></main>
    <div class="application_container"></div>
    <div class="advanced_features_container"></div>
    <nav></nav>
    <div class="loader-container"></div>
  `;
}
describe("main.ts DOM event handlers", () => {
    let lightController;
    let advancedSettings;
    beforeEach(() => {
        setupDOM();
        lightController = new Light();
        advancedSettings = new AdvanceSettings();
    });
    it("should hide homepage and show loader on homepageButton click", () => {
        const homepageButton = document.querySelector(".entry_point");
        const homepage = document.querySelector("main");
        const loader = document.querySelector(".loader-container");
        jest.spyOn(lightController, "addHidden");
        jest.spyOn(lightController, "removeHidden");
        homepageButton.dispatchEvent(new Event("click"));
        expect(lightController.addHidden).toHaveBeenCalledWith(homepage);
        expect(lightController.removeHidden).toHaveBeenCalledWith(loader);
    });
    it("should toggle light switch on mainRoomsContainer click", () => {
        const mainRoomsContainer = document.querySelector(".application_container");
        const lightSwitch = document.createElement("div");
        lightSwitch.className = "light-switch basic_settings_buttons";
        mainRoomsContainer.appendChild(lightSwitch);
        jest.spyOn(lightController, "toggleLightSwitch");
        mainRoomsContainer.dispatchEvent(new Event("click", { bubbles: true }));
    });
});
