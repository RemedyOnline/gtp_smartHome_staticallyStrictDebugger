import AdvanceSettings from "../advanceSettings";
describe("AdvanceSettings class", () => {
    let adv;
    beforeEach(() => {
        adv = new AdvanceSettings();
    });
    it("should instantiate without errors", () => {
        expect(adv).toBeInstanceOf(AdvanceSettings);
    });
    it("should capitalize first letter", () => {
        expect(adv.capFirstLetter("test")).toBe("Test");
    });
    it("should format time string to Date", () => {
        const date = adv.formatTime("12:34");
        expect(date).toBeInstanceOf(Date);
        expect(date.getHours()).toBe(12);
        expect(date.getMinutes()).toBe(34);
    });
});
