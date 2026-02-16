import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
    en: {
        translation: {
            "dashboard": "Dashboard",
            "aircraft_setup": "Aircraft List Setup",
            "component_list_setup": "Component List Setup",
            "service_list_setup": "Service List Setup",
            "section_a": "Section A: Aircraft Setup",
            "section_b": "Section B: APU Details",
            "section_c": "Section C: Main Landing Gear Details (Left)",
            "section_d": "Section D: Main Landing Gear Details (Right)",
            "section_e": "Section E: Nose Landing Gear Details",
            "aircraft_model": "Aircraft Model",
            "msn": "MSN",
            "re_enter_msn": "Re-Enter MSN",
            "country": "Country",
            "select_language": "Select Language",
            "search": "Search...",
            "sign_out": "Sign Out",
            "save_configuration": "Save Configuration",
            "cancel": "Cancel",
            "saving": "Saving..."
        }
    },
    es: {
        translation: {
            "dashboard": "Tablero",
            "aircraft_setup": "Configuración de Lista de Aeronaves",
            "component_list_setup": "Configuración de Lista de Componentes",
            "service_list_setup": "Configuración de Lista de Servicios",
            "section_a": "Sección A: Configuración de Aeronaves",
            "section_b": "Sección B: Detalles de APU",
            "section_c": "Sección C: Detalles del Tren de Aterrizaje Principal (Izquierdo)",
            "section_d": "Sección D: Detalles del Tren de Aterrizaje Principal (Derecho)",
            "section_e": "Sección E: Detalles del Tren de Aterrizaje de Nariz",
            "aircraft_model": "Modelo de Aeronave",
            "msn": "MSN",
            "re_enter_msn": "Reingrese MSN",
            "country": "País",
            "select_language": "Seleccionar Idioma",
            "search": "Buscar...",
            "sign_out": "Cerrar Sesión",
            "save_configuration": "Guardar Configuración",
            "cancel": "Cancelar",
            "saving": "Guardando..."
        }
    },
    de: {
        translation: {
            "dashboard": "Instrumententafel",
            "aircraft_setup": "Einrichtung der Flugzeugliste",
            "component_list_setup": "Einrichtung der Komponentenliste",
            "service_list_setup": "Einrichtung der Serviceliste",
            "section_a": "Abschnitt A: Flugzeugeinrichtung",
            "section_b": "Abschnitt B: APU-Details",
            "section_c": "Abschnitt C: Hauptfahrwerk Details (Links)",
            "section_d": "Abschnitt D: Hauptfahrwerk Details (Rechts)",
            "section_e": "Abschnitt E: Bugfahrwerk Details",
            "aircraft_model": "Flugzeugmodell",
            "msn": "MSN",
            "re_enter_msn": "MSN erneut eingeben",
            "country": "Land",
            "select_language": "Sprache auswählen",
            "search": "Suche...",
            "sign_out": "Abmelden",
            "save_configuration": "Konfiguration speichern",
            "cancel": "Abbrechen",
            "saving": "Speichern..."
        }
    },
    ru: {
        translation: {
            "dashboard": "Приборная панель",
            "aircraft_setup": "Настройка списка воздушных судов",
            "component_list_setup": "Настройка списка компонентов",
            "service_list_setup": "Настройка списка услуг",
            "section_a": "Раздел A: Настройка ВС",
            "section_b": "Раздел B: Детали ВСУ",
            "section_c": "Раздел C: Основная опора шасси (Левая)",
            "section_d": "Раздел D: Основная опора шасси (Правая)",
            "section_e": "Раздел E: Передняя опора шасси",
            "aircraft_model": "Модель ВС",
            "msn": "Заводской номер (MSN)",
            "re_enter_msn": "Повторите MSN",
            "country": "Страна",
            "select_language": "Выберите язык",
            "search": "Поиск...",
            "sign_out": "Выйти",
            "save_configuration": "Сохранить конфигурацию",
            "cancel": "Отмена",
            "saving": "Сохранение..."
        }
    },
    it: {
        translation: {
            "dashboard": "Cruscotto",
            "aircraft_setup": "Configurazione Lista Aerei",
            "component_list_setup": "Configurazione Lista Componenti",
            "service_list_setup": "Configurazione Lista Servizi",
            "section_a": "Sezione A: Configurazione Aereo",
            "section_b": "Sezione B: Dettagli APU",
            "section_c": "Sezione C: Dettagli Carrello Principale (Sinistro)",
            "section_d": "Sezione D: Dettagli Carrello Principale (Destro)",
            "section_e": "Sezione E: Dettagli Carrello Anteriore",
            "aircraft_model": "Modello Aereo",
            "msn": "MSN",
            "re_enter_msn": "Reinserire MSN",
            "country": "Paese",
            "select_language": "Seleziona Lingua",
            "search": "Cerca...",
            "sign_out": "Disconnettersi",
            "save_configuration": "Salva Configurazione",
            "cancel": "Annulla",
            "saving": "Salvataggio..."
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
