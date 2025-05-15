"use strict";
const homepageButton = document.querySelector(".entry_point");
const homepage = document.querySelector("main");
const mainRoomsContainer = document.querySelector(".application_container");
const advanceFeaturesContainer = document.querySelector(
	".advanced_features_container"
);
const nav = document.querySelector("nav");
const loader = document.querySelector(".loader-container");
import Light from "./basicSettings.js";
import AdvanceSettings from "./advanceSettings.js";
const lightController = new Light();
const advancedSettings = new AdvanceSettings();
let selectedComponent;
let isWifiActive = true;
homepageButton.addEventListener("click", function (e) {
	lightController.addHidden(homepage);
	lightController.removeHidden(loader);
	setTimeout(() => {
		lightController.removeHidden(mainRoomsContainer);
		lightController.removeHidden(nav);
	}, 1000);
});
mainRoomsContainer.addEventListener("click", (e) => {
	var _a;
	const selectedElement = e.target;
	if (
		selectedElement === null || selectedElement === void 0
			? void 0
			: selectedElement.closest(".light-switch")
	) {
		const lightSwitch =
			(_a =
				selectedElement === null || selectedElement === void 0
					? void 0
					: selectedElement.closest(".basic_settings_buttons")) === null ||
			_a === void 0
				? void 0
				: _a.firstElementChild;
		lightController.toggleLightSwitch(lightSwitch);
		return;
	}
	if (selectedElement.closest(".advance-settings_modal")) {
		const advancedSettingsBtn = selectedElement.closest(
			".advance-settings_modal"
		);
		advancedSettings.modalPopUp(advancedSettingsBtn);
	}
});
mainRoomsContainer.addEventListener("change", (e) => {
	const slider = e.target;
	const value = +(slider === null || slider === void 0 ? void 0 : slider.value);
	lightController.handleLightIntensitySlider(slider, value);
});
advanceFeaturesContainer.addEventListener("click", (e) => {
	var _a;
	const selectedElement = e.target;
	if (
		selectedElement === null || selectedElement === void 0
			? void 0
			: selectedElement.closest(".close-btn")
	) {
		advancedSettings.closeModalPopUp();
	}
	if (selectedElement.closest(".customization-btn")) {
		advancedSettings.displayCustomization(selectedElement);
	}
	if (selectedElement.matches(".defaultOn-okay")) {
		advancedSettings.customizeAutomaticOnPreset(selectedElement);
	}
	if (selectedElement.matches(".defaultOff-okay")) {
		advancedSettings.customizeAutomaticOffPreset(selectedElement);
	}
	if (
		(_a =
			selectedElement === null || selectedElement === void 0
				? void 0
				: selectedElement.textContent) === null || _a === void 0
			? void 0
			: _a.includes("Cancel")
	) {
		if (selectedElement.matches(".defaultOn-cancel")) {
			advancedSettings.customizationCancelled(selectedElement, ".defaultOn");
		} else if (selectedElement.matches(".defaultOff-cancel")) {
			advancedSettings.customizationCancelled(selectedElement, ".defaultOff");
		}
	}
});
