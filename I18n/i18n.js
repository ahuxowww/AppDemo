import en from './en.json'
import vi from './vi.json'
import { I18n } from "i18n-js";



const i18n = new I18n({
    ...en,
    ...vi,
});

export default i18n;
