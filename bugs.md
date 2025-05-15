# BUGS FIXES ON _#basicSettings.ts_

# (all line numbers are with reference to the default template files)

- _Light Intensity Adjustment Bug_
  In `handleLightIntensitySlider` (line 87), the `componentData.isLightOn` was being set to `false` even when intensity > 0. The correct logic is to set it to `true` when intensity is greater than 0.

- _Slider Value Assignment Bug_
  In `toggleLightSwitch` (line 66), the slider value was assigned directly without converting the number to a string, which may cause unexpected behavior. The fix is to use `.toString()` on the number value before assigning to `slider.value`.

- _NaN Type Check Bug_
  In `handleLightIntensitySlider` (line 84), the expression `typeof(intensity) === isNaN` is invalid. It was corrected to a proper check using `isNaN(intensity)`.

- _General Type Safety and Null Checks_
  Multiple updates were made to include `HTMLElement | null` checks (e.g., in `lightSwitchOn`, `lightComponentSelectors`, `toggleLightSwitch`) to prevent runtime errors in TypeScript and improve type safety.

# BUGS FIXES ON _#main.ts_

- _Slider Target Value Bug_
  The target value of the selected slider in the `main.ts` file line 56 is supposed to be converted into a number value. This was originally being used as a string and passed directly. The fix was to convert it using `+slider.value`.

- _Optional Chaining for Selected Elements Bug_
  In `main.ts` file line 42 and 48, the `selectedElement.closest()` calls were not safely handled. If `selectedElement` was `null` or did not match the selector, it could cause errors. This was fixed by using optional chaining (`?.`) and explicit type assertions to safely access DOM elements.

- _Event Target Type Assertion Bug_
  In the default file, event targets in all event listeners were used without type assertions, which could lead to runtime errors. In the updated `main.ts`, all `e.target` references were explicitly cast to `Element` or `HTMLInputElement` to ensure TypeScript type safety.

- _Unscoped Imports Bug_
  The import paths in the default file were written as `'./js/basicSettings.js'` and `'./js/advanceSettings.js'`, assuming JavaScript modules. In the refactored TypeScript version, these were corrected to `'./basicSettings'` and `'./advanceSettings'` to align with the actual `.ts` modules, which are compiled without the `.js` extension.

- _Use of Non-Strict Mode Bug_
  The default file used `"use script"` instead of `"use strict"`, which is a typo and invalid. This has been corrected in the updated version to ensure strict mode is enforced.

- _Missing Non-Null Assertions Bug_
  Some DOM element queries like `document.querySelector('.entry_point')` might return `null`. In the updated version, non-null assertions (!) or type assertions were added to avoid potential `null` errors during runtime, assuming these elements exist in the DOM.

# BUGS FIXES ON _#advanceSettings.ts_

- _Chart.js Import Bug_
  In `advanceSettings.ts` line 2, the file imports `Chart` from `"chart.js"` with a `@ts-ignore` comment. However, `Chart` is not required during testing, and its presence without proper mocking or conditional logic can lead to runtime or test environment errors. This was resolved by adding logic to conditionally avoid initializing `Chart` when in a test environment.

- _Customize Automatic Preset Double Bang Bug_
  In line 141 of the default file, the methods `customizeAutomaticOnPreset()` and `customizeAutomaticOffPreset()` both use the condition `if (!!value) return;`. This logic exits the function when `value` is truthy, which is incorrect. It should exit when `value` is falsy. The fix was to replace it with `if (!value) return;` so that the function continues only if a valid value is present.

- _Redundant Parameter in Timer Function Bug_
  In line 227 of the default file, the `timer()` function includes a `message` parameter that is never used. This adds unnecessary clutter to the code. The solution was to remove the `message` parameter for cleaner and more maintainable code.

- _Missing Type for Component Parameter Bug_
  Still in the `timer()` function at line 227, the `component` argument is not explicitly typed. This can cause type safety issues, especially when accessing `component['element']`. The fix was to create an extended interface `ComponentWithElement` that ensures `component.element is recognized as an `HTMLElement```.

- _Private Method Access Violation Bug_
  In line 200 of the default file, the method `getSelectedSettings()` tries to call `#markup()`, a private method. Since private methods can't be accessed outside of their class, this breaks TypeScript access rules. The solution was to either remove the # to make `markup()` public or ensure it's only used internally within the class.

- _Incorrect Import Path for Light Class Bug_
  In line 4 of the default file, `Light` is imported from `"./basicSettings"` without a file extension. Depending on the bundler or compiler configuration, this may fail. The fix was to explicitly include the `.js` extension or ensure module resolution settings are configured properly in `tsconfig.json`.

- _Inconsistent Export Pattern Bug_
  At the end of the file, the default export uses `export default AdvanceSettings;`. If the project setup (e.g., Webpack or ES modules) does not support default exports well, it can cause import issues. The recommended fix is to verify that `"esModuleInterop": true` is enabled in `tsconfig.json`, or change the export to a named pattern using `export { AdvanceSettings };`.
