import { DEFAULT_LANGUAGE } from "@/i18n/config";
import { DEFAULT_ACCENT, PREFERENCES_STORAGE_KEY } from "@/lib/theme";

/**
 * <head> içinde, React'ten önce çalışan satır içi script.
 * Kayıtlı tercihi okuyup <html>'e yazar; böylece ilk boyamada doğru tema görünür.
 * Tercih yoksa işletim sisteminin dark/light ayarına uyar (spec §5).
 */
export const themeScript = `(function(){try{
var d=document.documentElement,s={};
try{s=(JSON.parse(localStorage.getItem(${JSON.stringify(PREFERENCES_STORAGE_KEY)}))||{}).state||{}}catch(e){}
var m=s.mode||"system";
if(m==="system")m=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
d.setAttribute("data-mode",m);
d.setAttribute("data-accent",s.accent||${JSON.stringify(DEFAULT_ACCENT)});
d.setAttribute("lang",s.language||${JSON.stringify(DEFAULT_LANGUAGE)});
}catch(e){}})()`;
