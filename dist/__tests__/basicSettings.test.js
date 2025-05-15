import Light from "../basicSettings";
describe("Light class", () => {
    let light;
    beforeEach(() => {
        light = new Light();
    });
    it("should instantiate without errors", () => {
        expect(light).toBeInstanceOf(Light);
    });
    it("should return a notification string", () => {
        const msg = "Test notification";
        const html = light.notification(msg);
        expect(typeof html).toBe("string");
        expect(html).toContain(msg);
    });
    it("should set light on attributes", () => {
        const el = document.createElement("img");
        light.lightSwitchOn(el);
        expect(el.getAttribute("src")).toBe("./assets/svgs/light_bulb.svg");
        expect(el.getAttribute("data-lightOn")).toBe("./assets/svgs/light_bulb_off.svg");
    });
    it("should set light off attributes", () => {
        const el = document.createElement("img");
        light.lightSwitchOff(el);
        expect(el.getAttribute("src")).toBe("./assets/svgs/light_bulb_off.svg");
        expect(el.getAttribute("data-lightOn")).toBe("./assets/svgs/light_bulb.svg");
    });
});
