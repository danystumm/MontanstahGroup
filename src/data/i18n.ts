// =============================================================================
// i18n strings — EN / IT / DE / ES
// Used by client-side language switcher (no SSR locale routing — single page).
// =============================================================================

export type Lang = 'en' | 'it' | 'de' | 'es';

export const langs: Lang[] = ['en', 'it', 'de', 'es'];

export const strings: Record<Lang, Record<string, string>> = {
  en: {
    'brand.group': 'Group',
    'nav.overview': 'Overview', 'nav.companies': 'Companies', 'nav.presence': 'Presence', 'nav.history': 'History', 'nav.contact': 'Contact',

    'hero.eyebrow': 'The Montanstahl Group',
    'hero.title': 'A global <strong>metallurgical group</strong> of companies engineering <span class="accent">special steel profiles</span>.',
    'hero.lede': 'Headquartered in Stabio, Switzerland, the Montanstahl Group operates <strong>five production facilities</strong> across Europe and North America and a global network of commercial offices, mastering <strong>six core production technologies</strong> for custom steel profiles and structural stainless steel sections.',
    'hero.purpose': '<strong>One Stop Solution Provider</strong> for custom profiles in steel and structural profiles in stainless steel — worldwide.',
    'hero.m0': 'Employees', 'hero.m1': 'Production sites', 'hero.m2': 'Technologies', 'hero.m4': 'Countries served',

    'ov.label': 'Group Overview',
    'ov.title': 'A <strong>600-strong</strong> metallurgical organization.',
    'ov.p1': 'The Montanstahl Group currently has <strong>over 600 employees</strong>, with about 299 in Stabio (Canton of Ticino, Switzerland) and the remainder located across four production facilities in Schwerte (Germany), Talamona (Italy), Conroe (Texas, USA) and Tunica (Mississippi, USA) — as well as numerous commercial offices around the world.',
    'ov.p2': 'The Group masters — often combining — <strong>six different production technologies</strong>: laser welding, hot rolling, hot extrusion, drawing, cold rolling and punching. This integrated capability allows us to meet every type of customer requirement with high-quality, economically advantageous solutions.',
    'ov.p3': 'Thanks to their versatility and quality, Montanstahl profiles are used in <strong>construction, energy, oil &amp; gas, industrial plants, automotive, nuclear, defense, architecture</strong> and many more sectors.',
    'ov.techLabel': 'Six production technologies',
    'ov.indLabel': 'Industries served',

    'tech.lw': 'Laser Welding', 'tech.he': 'Hot Extrusion', 'tech.hr': 'Hot Rolling',
    'tech.dr': 'Drawing', 'tech.cr': 'Cold Rolling', 'tech.pn': 'Punching',

    'ind.con': 'Construction', 'ind.ene': 'Energy', 'ind.oil': 'Oil & Gas',
    'ind.ip': 'Industrial Plants', 'ind.aut': 'Automotive', 'ind.nuc': 'Nuclear',
    'ind.def': 'Defense', 'ind.arc': 'Architecture', 'ind.more': '… and more',

    'companies.title': 'Five companies, <strong>one purpose</strong>.', 'companies.label': 'Portfolio',
    'btn.visit': 'Visit website',
    'lbl.role': 'Role', 'lbl.products': 'Products', 'lbl.address': 'Address', 'lbl.phone': 'Phone',

    'msah.tag': 'Group Headquarters', 'msah.role': 'Group Headquarters',
    'msah.desc': 'Global producer and supplier of <strong>stainless steel structural sections</strong> and custom special profiles. From its Swiss headquarters in Stabio (Ticino), Montanstahl coordinates the Group\'s engineering, innovation and worldwide commercial network, operating an integrated portfolio of manufacturing technologies under one roof.',
    'msah.prod': 'Stainless structurals, custom profiles, architectural sections',
    'sid.tag': 'Hot Extrusion Specialist',
    'sid.desc': 'Highly specialized in the <strong>hot extrusion</strong> of carbon steel, stainless steel and titanium. From its plant in the Valtellina valley, Siderval engineers solid and hollow custom profiles for the most demanding markets — including aerospace, nuclear energy, naval, medical, forklift &amp; material handling, and other high-precision sectors — combining shape flexibility with the most stringent quality and safety standards.',
    'ssa.tag': 'North American Operations',
    'ssa.desc': 'The Group\'s North American arm, headquartered in Conroe, Texas. Operating the <strong>largest laser-fusion line in America</strong>, Stainless Structurals delivers ready-to-install stainless steel beams, channels, custom sections and tubing — supplying data centers, architecture and industrial customers across the continent under a "Made in the USA" mandate.',
    'ext.tag': 'U.S. Hot Extrusion Facility',
    'ext.desc': 'The Group\'s hot extrusion plant in the United States, located in Tunica, Mississippi. Extralloys operates <strong>one of the largest hot extrusion presses in the country</strong>, producing extruded profiles in steel, stainless steel and specialty alloys — reinforcing the Group\'s domestic supply for industrial, energy and infrastructure customers across North America.',
    'msde.tag': 'European Hot Extrusion Plant',
    'msde.desc': 'The Group\'s hot extrusion plant in Europe, based in <strong>Schwerte, Germany</strong> (formerly HOESCH, acquired in 2021). Specialized in the production of hot extruded profiles in steel as well as nickel-base and titanium alloys, Montanstahl GmbH is the reference site when section design is particularly complex — serving European customers from the heart of the continent\'s industrial heartland.',
    'msah.ratingLbl': 'Risk Indicator',
    'msah.ratingTitle': 'Dun & Bradstreet / Bisnode Rating',
    'msah.ratingDesc': 'Montanstahl is evaluated annually by Dun &amp; Bradstreet / Bisnode with a risk indicator of <strong>1</strong> — ranking among the best-performing companies operating in Switzerland.',

    'map.title': 'A <strong>global</strong> manufacturing footprint.', 'map.label': 'Presence',
    'map.s1': 'Production sites', 'map.s3': 'Continents', 'map.s4': 'Markets served',

    'hist.title': 'Our <strong>History</strong>.', 'hist.label': 'History',
    'hist.lede': 'From a Swiss rolling mill founded in 1983 to a transatlantic metallurgical group of five companies — four decades of continuous expansion in technology, products and geography.',

    'tl1.t': 'Founding of Montanstahl SA', 'tl1.d': 'Foundation in Ticino as a rolling mill for steel profiles.',
    'tl2.t': 'Cold drawing', 'tl2.d': 'Introduction of cold drawing — Montanstahl extends its portfolio of in-house production technologies.',
    'tl3.t': 'Laser welding', 'tl3.d': 'Investment in proprietary laser-welding technology — Montanstahl becomes a reference for tailor-made structural sections.',
    'tl4.t': 'Architectural Steel Profiles', 'tl4.d': 'Launch of the Architectural Steel Profiles line — bespoke sections for façades, windows and architecture.',
    'tl5.t': 'Stainless Structurals — Texas', 'tl5.d': 'Launch of Stainless Structurals in Conroe, Texas — North American operations begin.',
    'tl6.t': 'Ottostumm', 'tl6.d': 'Integration of Ottostumm — strengthening the offer for steel window and façade systems.',
    'tl7.t': 'Acquisition of HOESCH', 'tl7.d': 'Acquisition of HOESCH in Germany — becomes Montanstahl GmbH, the Group\'s European hot extrusion plant.',
    'tl8.t': 'Acquisition of Siderval', 'tl8.d': 'Acquisition of Siderval S.p.A. in Talamona, Italy — world-class hot extrusion in steel and titanium joins the Group.',
    'tl9.t': 'Extralloys — Tunica', 'tl9.d': 'Extralloys established in Tunica, Mississippi — one of the largest hot extrusion presses in the United States.',

    'ctc.title': 'Get in <strong>touch</strong>.', 'ctc.label': 'Contact',
    'ctc.lede': 'For commercial inquiries, partnerships, press or careers — reach out directly to the relevant company based on your location.',
    'ctc.text': 'Each company in the Group operates with its own commercial team and technical sales contacts. For Group-level matters, contact Montanstahl AG.',
    'ctc.hq': 'Group Headquarters', 'ctc.addr': 'Address', 'ctc.phone': 'Phone', 'ctc.web': 'Web', 'ctc.hours': 'Hours',
    'ctc.hoursVal': 'Mon–Fri · 08:00–12:00 / 13:00–17:00 CET',

    'foot.group': 'Group', 'foot.rights': 'All rights reserved', 'foot.privacy': 'Privacy',
  },

  it: {
    'brand.group': 'Gruppo',
    'nav.overview': 'Panoramica', 'nav.companies': 'Aziende', 'nav.presence': 'Presenza', 'nav.history': 'Storia', 'nav.contact': 'Contatti',
    'hero.eyebrow': 'Il Gruppo Montanstahl',
    'hero.title': 'Un <strong>gruppo metallurgico</strong> globale di aziende per i <span class="accent">profili in acciaio speciali</span>.',
    'hero.lede': 'Con sede a Stabio, in Svizzera, il Gruppo Montanstahl gestisce <strong>cinque stabilimenti produttivi</strong> tra Europa e Nord America e una rete globale di uffici commerciali, padroneggiando <strong>sei tecnologie produttive core</strong> per profili speciali in acciaio e sezioni strutturali in acciaio inossidabile.',
    'hero.purpose': '<strong>One Stop Solution Provider</strong> per profili speciali in acciaio e profili strutturali in acciaio inossidabile — a livello globale.',
    'hero.m0': 'Dipendenti', 'hero.m1': 'Siti produttivi', 'hero.m2': 'Tecnologie', 'hero.m4': 'Paesi serviti',

    'ov.label': 'Panoramica del Gruppo',
    'ov.title': 'Un\'organizzazione metallurgica di <strong>oltre 600 persone</strong>.',
    'ov.p1': 'Il Gruppo Montanstahl conta attualmente <strong>oltre 600 dipendenti</strong>, di cui circa 299 a Stabio (Canton Ticino, Svizzera) e i restanti distribuiti tra quattro stabilimenti produttivi a Schwerte (Germania), Talamona (Italia), Conroe (Texas, USA) e Tunica (Mississippi, USA) — oltre a numerosi uffici commerciali in tutto il mondo.',
    'ov.p2': 'Il Gruppo padroneggia — spesso combinandole — <strong>sei diverse tecnologie produttive</strong>: saldatura laser, laminazione a caldo, estrusione a caldo, trafilatura, laminazione a freddo e punzonatura. Questa capacità integrata permette di soddisfare ogni tipo di esigenza del cliente con soluzioni di alta qualità ed economicamente vantaggiose.',
    'ov.p3': 'Grazie alla loro versatilità e qualità, i profili Montanstahl sono utilizzati in <strong>edilizia, energia, oil &amp; gas, impianti industriali, automotive, nucleare, difesa, architettura</strong> e molti altri settori.',
    'ov.techLabel': 'Sei tecnologie produttive',
    'ov.indLabel': 'Settori serviti',

    'tech.lw': 'Saldatura Laser', 'tech.he': 'Estrusione a Caldo', 'tech.hr': 'Laminazione a Caldo',
    'tech.dr': 'Trafilatura', 'tech.cr': 'Laminazione a Freddo', 'tech.pn': 'Punzonatura',

    'ind.con': 'Edilizia', 'ind.ene': 'Energia', 'ind.oil': 'Oil & Gas',
    'ind.ip': 'Impianti Industriali', 'ind.aut': 'Automotive', 'ind.nuc': 'Nucleare',
    'ind.def': 'Difesa', 'ind.arc': 'Architettura', 'ind.more': '… e altro',

    'companies.title': 'Cinque aziende, <strong>uno scopo</strong>.', 'companies.label': 'Portfolio',
    'btn.visit': 'Visita il sito',
    'lbl.role': 'Ruolo', 'lbl.products': 'Prodotti', 'lbl.address': 'Indirizzo', 'lbl.phone': 'Telefono',

    'msah.tag': 'Sede del Gruppo', 'msah.role': 'Sede del Gruppo',
    'msah.desc': 'Produttore e fornitore globale di <strong>sezioni strutturali in acciaio inossidabile</strong> e profili speciali su misura. Dalla sede svizzera di Stabio (Ticino), Montanstahl coordina l\'ingegneria, l\'innovazione e la rete commerciale globale del Gruppo, gestendo un portafoglio integrato di tecnologie produttive sotto un unico tetto.',
    'msah.prod': 'Profili strutturali inox, profili speciali, sezioni architettoniche',
    'sid.tag': 'Specialista di Estrusione a Caldo',
    'sid.desc': 'Altamente specializzata nell\'<strong>estrusione a caldo</strong> di acciaio al carbonio, acciaio inossidabile e titanio. Dallo stabilimento in Valtellina, Siderval progetta profili pieni e cavi su misura per i mercati più esigenti — tra cui aerospaziale, energia nucleare, navale, medicale, carrelli elevatori e movimentazione, e altri settori di alta precisione — combinando flessibilità di forma con i più rigorosi standard di qualità e sicurezza.',
    'ssa.tag': 'Operazioni Nord Americane',
    'ssa.desc': 'Il braccio nordamericano del Gruppo, con sede a Conroe, in Texas. Gestendo la <strong>più grande linea di laser-fusion d\'America</strong>, Stainless Structurals consegna travi, canali, sezioni personalizzate e tubi in acciaio inossidabile pronti all\'installazione — fornendo data center, architettura e clienti industriali in tutto il continente sotto un mandato "Made in the USA".',
    'ext.tag': 'Stabilimento USA di Estrusione a Caldo',
    'ext.desc': 'Lo stabilimento di estrusione a caldo del Gruppo negli Stati Uniti, situato a Tunica, Mississippi. Extralloys opera <strong>una delle più grandi presse di estrusione a caldo del paese</strong>, producendo profili estrusi in acciaio, acciaio inossidabile e leghe speciali — rafforzando l\'approvvigionamento domestico del Gruppo per clienti industriali, energetici e infrastrutturali in Nord America.',
    'msde.tag': 'Stabilimento Europeo di Estrusione a Caldo',
    'msde.desc': 'Lo stabilimento di estrusione a caldo del Gruppo in Europa, con sede a <strong>Schwerte, Germania</strong> (ex HOESCH, acquisito nel 2021). Specializzato nella produzione di profili estrusi a caldo in acciaio e in leghe a base di nichel e titanio, Montanstahl GmbH è il sito di riferimento quando il design della sezione è particolarmente complesso — al servizio dei clienti europei dal cuore della regione industriale del continente.',
    'msah.ratingLbl': 'Indicatore di Rischio',
    'msah.ratingTitle': 'Rating Dun & Bradstreet / Bisnode',
    'msah.ratingDesc': 'Montanstahl è valutata annualmente da Dun &amp; Bradstreet / Bisnode con indicatore di rischio pari a <strong>1</strong> — collocandosi tra le aziende più performanti operanti in Svizzera.',

    'map.title': 'Una presenza produttiva <strong>globale</strong>.', 'map.label': 'Presenza',
    'map.s1': 'Siti produttivi', 'map.s3': 'Continenti', 'map.s4': 'Mercati serviti',

    'hist.title': 'La nostra <strong>storia</strong>.', 'hist.label': 'Storia',
    'hist.lede': 'Da un laminatoio svizzero fondato nel 1983 a un gruppo metallurgico transatlantico di cinque aziende — quattro decenni di espansione continua in tecnologia, prodotti e geografia.',

    'tl1.t': 'Fondazione di Montanstahl SA', 'tl1.d': 'Fondazione in Ticino come laminatoio per profili in acciaio.',
    'tl2.t': 'Trafilatura a freddo', 'tl2.d': 'Introduzione della trafilatura a freddo — Montanstahl amplia il proprio portafoglio di tecnologie produttive interne.',
    'tl3.t': 'Saldatura laser', 'tl3.d': 'Investimento nella tecnologia di saldatura laser proprietaria — Montanstahl diventa il riferimento per sezioni strutturali su misura.',
    'tl4.t': 'Profili in acciaio per architettura', 'tl4.d': 'Lancio della linea Architectural Steel Profiles — sezioni dedicate per facciate, finestre e architettura.',
    'tl5.t': 'Stainless Structurals — Texas', 'tl5.d': 'Avvio di Stainless Structurals a Conroe, Texas — iniziano le operazioni in Nord America.',
    'tl6.t': 'Ottostumm', 'tl6.d': 'Integrazione di Ottostumm — rafforzamento dell\'offerta nei sistemi di serramenti e facciate in acciaio.',
    'tl7.t': 'Acquisizione di HOESCH', 'tl7.d': 'Acquisizione di HOESCH in Germania — diventa Montanstahl GmbH, lo stabilimento europeo di estrusione a caldo del Gruppo.',
    'tl8.t': 'Acquisizione di Siderval', 'tl8.d': 'Acquisizione di Siderval S.p.A. a Talamona, Italia — entra nel Gruppo l\'estrusione a caldo di livello mondiale in acciaio inossidabile e titanio.',
    'tl9.t': 'Extralloys — Tunica', 'tl9.d': 'Nasce Extralloys a Tunica, Mississippi — una delle più grandi presse di estrusione a caldo degli Stati Uniti.',

    'ctc.title': 'Mettiti in <strong>contatto</strong>.', 'ctc.label': 'Contatti',
    'ctc.lede': 'Per richieste commerciali, partnership, stampa o opportunità di carriera — contatta direttamente l\'azienda di riferimento in base alla tua localizzazione.',
    'ctc.text': 'Ogni azienda del Gruppo ha un proprio team commerciale e referenti tecnici. Per questioni a livello di Gruppo, contattare Montanstahl AG.',
    'ctc.hq': 'Sede del Gruppo', 'ctc.addr': 'Indirizzo', 'ctc.phone': 'Telefono', 'ctc.web': 'Web', 'ctc.hours': 'Orari',
    'ctc.hoursVal': 'Lun–Ven · 08:00–12:00 / 13:00–17:00 CET',

    'foot.group': 'Gruppo', 'foot.rights': 'Tutti i diritti riservati', 'foot.privacy': 'Privacy',
  },

  de: {
    'brand.group': 'Gruppe',
    'nav.overview': 'Überblick', 'nav.companies': 'Unternehmen', 'nav.presence': 'Präsenz', 'nav.history': 'Geschichte', 'nav.contact': 'Kontakt',
    'hero.eyebrow': 'Die Montanstahl Gruppe',
    'hero.title': 'Eine globale <strong>metallurgische Gruppe</strong> von Unternehmen für <span class="accent">Spezialstahlprofile</span>.',
    'hero.lede': 'Mit Hauptsitz in Stabio, Schweiz, betreibt die Montanstahl Gruppe <strong>fünf Produktionsstandorte</strong> in Europa und Nordamerika sowie ein globales Netzwerk von Vertriebsbüros und beherrscht <strong>sechs Kernfertigungstechnologien</strong> für kundenspezifische Stahlprofile und strukturelle Edelstahlprofile.',
    'hero.purpose': '<strong>One Stop Solution Provider</strong> für kundenspezifische Stahlprofile und strukturelle Edelstahlprofile — weltweit.',
    'hero.m0': 'Mitarbeitende', 'hero.m1': 'Produktionsstandorte', 'hero.m2': 'Technologien', 'hero.m4': 'Belieferte Länder',

    'ov.label': 'Überblick der Gruppe',
    'ov.title': 'Eine metallurgische Organisation mit <strong>über 600 Mitarbeitenden</strong>.',
    'ov.p1': 'Die Montanstahl Gruppe beschäftigt derzeit <strong>über 600 Mitarbeitende</strong>, davon etwa 299 in Stabio (Kanton Tessin, Schweiz) und die übrigen verteilt auf vier Produktionsstandorte in Schwerte (Deutschland), Talamona (Italien), Conroe (Texas, USA) und Tunica (Mississippi, USA) — sowie zahlreiche Vertriebsbüros weltweit.',
    'ov.p2': 'Die Gruppe beherrscht — oft in Kombination — <strong>sechs unterschiedliche Fertigungstechnologien</strong>: Laserschweißen, Warmwalzen, Warmstrangpressen, Ziehen, Kaltwalzen und Stanzen. Diese integrierte Kompetenz ermöglicht es, jeden Kundenanspruch mit hochwertigen und wirtschaftlich vorteilhaften Lösungen zu erfüllen.',
    'ov.p3': 'Dank ihrer Vielseitigkeit und Qualität werden Montanstahl-Profile in <strong>Bauwesen, Energie, Öl &amp; Gas, Industrieanlagen, Automobil, Kernkraft, Verteidigung, Architektur</strong> und vielen weiteren Branchen eingesetzt.',
    'ov.techLabel': 'Sechs Fertigungstechnologien',
    'ov.indLabel': 'Belieferte Branchen',

    'tech.lw': 'Laserschweißen', 'tech.he': 'Warmstrangpressen', 'tech.hr': 'Warmwalzen',
    'tech.dr': 'Ziehen', 'tech.cr': 'Kaltwalzen', 'tech.pn': 'Stanzen',

    'ind.con': 'Bauwesen', 'ind.ene': 'Energie', 'ind.oil': 'Öl & Gas',
    'ind.ip': 'Industrieanlagen', 'ind.aut': 'Automobil', 'ind.nuc': 'Kernkraft',
    'ind.def': 'Verteidigung', 'ind.arc': 'Architektur', 'ind.more': '… und mehr',

    'companies.title': 'Fünf Unternehmen, <strong>ein Ziel</strong>.', 'companies.label': 'Portfolio',
    'btn.visit': 'Website besuchen',
    'lbl.role': 'Rolle', 'lbl.products': 'Produkte', 'lbl.address': 'Adresse', 'lbl.phone': 'Telefon',

    'msah.tag': 'Hauptsitz der Gruppe', 'msah.role': 'Hauptsitz der Gruppe',
    'msah.desc': 'Globaler Hersteller und Lieferant von <strong>strukturellen Edelstahlprofilen</strong> und kundenspezifischen Sonderprofilen. Vom Schweizer Hauptsitz in Stabio (Tessin) aus koordiniert Montanstahl Engineering, Innovation und das weltweite Vertriebsnetzwerk der Gruppe und betreibt ein integriertes Portfolio an Fertigungstechnologien unter einem Dach.',
    'msah.prod': 'Edelstahl-Strukturprofile, Sonderprofile, Architekturprofile',
    'sid.tag': 'Spezialist für Warmstrangpressen',
    'sid.desc': 'Hochspezialisiert auf das <strong>Warmstrangpressen</strong> von Kohlenstoffstahl, Edelstahl und Titan. Vom Werk im Valtellina-Tal aus konstruiert Siderval massive und hohle kundenspezifische Profile für die anspruchsvollsten Märkte — darunter Luft- und Raumfahrt, Kernenergie, Marine, Medizintechnik, Gabelstapler &amp; Materialhandhabung und andere Hochpräzisionsbranchen — mit Formflexibilität und strengsten Qualitäts- und Sicherheitsstandards.',
    'ssa.tag': 'Nordamerikanische Aktivitäten',
    'ssa.desc': 'Der nordamerikanische Arm der Gruppe mit Sitz in Conroe, Texas. Stainless Structurals betreibt die <strong>größte Laserfusion-Linie Amerikas</strong> und liefert einbaufertige Edelstahlträger, -kanäle, kundenspezifische Profile und Rohre — für Rechenzentren, Architektur und Industriekunden auf dem gesamten Kontinent unter dem Auftrag "Made in the USA".',
    'ext.tag': 'US-Werk für Warmstrangpressen',
    'ext.desc': 'Das Warmstrangpresswerk der Gruppe in den USA, gelegen in Tunica, Mississippi. Extralloys betreibt <strong>eine der größten Warmstrangpressen des Landes</strong> und produziert Strangpressprofile in Stahl, Edelstahl und Speziallegierungen — und stärkt damit die inländische Versorgung der Gruppe für Industrie-, Energie- und Infrastrukturkunden in Nordamerika.',
    'msde.tag': 'Europäisches Warmstrangpresswerk',
    'msde.desc': 'Das Warmstrangpresswerk der Gruppe in Europa, mit Sitz in <strong>Schwerte, Deutschland</strong> (ehemals HOESCH, 2021 übernommen). Spezialisiert auf die Produktion warmstranggepresster Profile aus Stahl sowie aus Nickelbasis- und Titanlegierungen, ist Montanstahl GmbH der Referenzstandort, wenn das Profildesign besonders komplex ist — im Dienst europäischer Kunden aus dem Herzen des industriellen Kernlands.',
    'msah.ratingLbl': 'Risikoindikator',
    'msah.ratingTitle': 'Dun & Bradstreet / Bisnode Rating',
    'msah.ratingDesc': 'Montanstahl wird jährlich von Dun &amp; Bradstreet / Bisnode bewertet und erhält den Risikoindikator <strong>1</strong> — und zählt damit zu den leistungsstärksten Unternehmen in der Schweiz.',

    'map.title': 'Eine <strong>globale</strong> Fertigungspräsenz.', 'map.label': 'Präsenz',
    'map.s1': 'Produktionsstandorte', 'map.s3': 'Kontinente', 'map.s4': 'Belieferte Märkte',

    'hist.title': 'Unsere <strong>Geschichte</strong>.', 'hist.label': 'Geschichte',
    'hist.lede': 'Von einem 1983 gegründeten Schweizer Walzwerk zu einer transatlantischen metallurgischen Gruppe aus fünf Unternehmen — vier Jahrzehnte kontinuierlicher Expansion in Technologie, Produkten und Geografie.',

    'tl1.t': 'Gründung von Montanstahl SA', 'tl1.d': 'Gründung im Tessin als Walzwerk für Stahlprofile.',
    'tl2.t': 'Kaltziehen', 'tl2.d': 'Einführung des Kaltziehens — Montanstahl erweitert sein Portfolio interner Fertigungstechnologien.',
    'tl3.t': 'Laserschweißen', 'tl3.d': 'Investition in eigene Laserschweißtechnologie — Montanstahl wird zur Referenz für maßgeschneiderte Strukturprofile.',
    'tl4.t': 'Architectural Steel Profiles', 'tl4.d': 'Einführung der Linie Architectural Steel Profiles — maßgeschneiderte Profile für Fassaden, Fenster und Architektur.',
    'tl5.t': 'Stainless Structurals — Texas', 'tl5.d': 'Gründung von Stainless Structurals in Conroe, Texas — Beginn der nordamerikanischen Aktivitäten.',
    'tl6.t': 'Ottostumm', 'tl6.d': 'Integration von Ottostumm — Stärkung des Angebots im Bereich Stahlfenster- und Fassadensysteme.',
    'tl7.t': 'Übernahme von HOESCH', 'tl7.d': 'Übernahme von HOESCH in Deutschland — wird zur Montanstahl GmbH, dem europäischen Warmstrangpresswerk der Gruppe.',
    'tl8.t': 'Übernahme von Siderval', 'tl8.d': 'Übernahme von Siderval S.p.A. in Talamona, Italien — erstklassiges Warmstrangpressen in Edelstahl und Titan kommt zur Gruppe.',
    'tl9.t': 'Extralloys — Tunica', 'tl9.d': 'Gründung von Extralloys in Tunica, Mississippi — eine der größten Warmstrangpressen der Vereinigten Staaten.',

    'ctc.title': 'Nehmen Sie <strong>Kontakt auf</strong>.', 'ctc.label': 'Kontakt',
    'ctc.lede': 'Für kommerzielle Anfragen, Partnerschaften, Presse oder Karriere — wenden Sie sich direkt an das jeweilige Unternehmen entsprechend Ihrem Standort.',
    'ctc.text': 'Jedes Unternehmen der Gruppe verfügt über ein eigenes Vertriebsteam und technische Ansprechpartner. Für Gruppenangelegenheiten wenden Sie sich an Montanstahl AG.',
    'ctc.hq': 'Hauptsitz der Gruppe', 'ctc.addr': 'Adresse', 'ctc.phone': 'Telefon', 'ctc.web': 'Web', 'ctc.hours': 'Öffnungszeiten',
    'ctc.hoursVal': 'Mo–Fr · 08:00–12:00 / 13:00–17:00 MEZ',

    'foot.group': 'Gruppe', 'foot.rights': 'Alle Rechte vorbehalten', 'foot.privacy': 'Datenschutz',
  },

  es: {
    'brand.group': 'Grupo',
    'nav.overview': 'Visión General', 'nav.companies': 'Empresas', 'nav.presence': 'Presencia', 'nav.history': 'Historia', 'nav.contact': 'Contacto',
    'hero.eyebrow': 'El Grupo Montanstahl',
    'hero.title': 'Un <strong>grupo metalúrgico</strong> global de empresas para <span class="accent">perfiles de acero especiales</span>.',
    'hero.lede': 'Con sede en Stabio, Suiza, el Grupo Montanstahl opera <strong>cinco plantas de producción</strong> entre Europa y Norteamérica y una red global de oficinas comerciales, dominando <strong>seis tecnologías de producción core</strong> para perfiles especiales de acero y secciones estructurales en acero inoxidable.',
    'hero.purpose': '<strong>One Stop Solution Provider</strong> para perfiles especiales de acero y perfiles estructurales en acero inoxidable — a nivel global.',
    'hero.m0': 'Empleados', 'hero.m1': 'Plantas productivas', 'hero.m2': 'Tecnologías', 'hero.m4': 'Países atendidos',

    'ov.label': 'Visión General del Grupo',
    'ov.title': 'Una organización metalúrgica de <strong>más de 600 personas</strong>.',
    'ov.p1': 'El Grupo Montanstahl cuenta actualmente con <strong>más de 600 empleados</strong>, de los cuales aproximadamente 299 están en Stabio (Cantón del Tesino, Suiza) y el resto distribuidos en cuatro plantas de producción en Schwerte (Alemania), Talamona (Italia), Conroe (Texas, EE. UU.) y Tunica (Mississippi, EE. UU.) — además de numerosas oficinas comerciales en todo el mundo.',
    'ov.p2': 'El Grupo domina — a menudo combinándolas — <strong>seis tecnologías de producción diferentes</strong>: soldadura láser, laminación en caliente, extrusión en caliente, estirado, laminación en frío y punzonado. Esta capacidad integrada permite satisfacer cualquier exigencia del cliente con soluciones de alta calidad y económicamente ventajosas.',
    'ov.p3': 'Gracias a su versatilidad y calidad, los perfiles Montanstahl se utilizan en <strong>construcción, energía, oil &amp; gas, plantas industriales, automotriz, nuclear, defensa, arquitectura</strong> y muchos otros sectores.',
    'ov.techLabel': 'Seis tecnologías de producción',
    'ov.indLabel': 'Sectores atendidos',

    'tech.lw': 'Soldadura Láser', 'tech.he': 'Extrusión en Caliente', 'tech.hr': 'Laminación en Caliente',
    'tech.dr': 'Estirado', 'tech.cr': 'Laminación en Frío', 'tech.pn': 'Punzonado',

    'ind.con': 'Construcción', 'ind.ene': 'Energía', 'ind.oil': 'Oil & Gas',
    'ind.ip': 'Plantas Industriales', 'ind.aut': 'Automotriz', 'ind.nuc': 'Nuclear',
    'ind.def': 'Defensa', 'ind.arc': 'Arquitectura', 'ind.more': '… y más',

    'companies.title': 'Cinco empresas, <strong>un propósito</strong>.', 'companies.label': 'Portafolio',
    'btn.visit': 'Visitar el sitio',
    'lbl.role': 'Rol', 'lbl.products': 'Productos', 'lbl.address': 'Dirección', 'lbl.phone': 'Teléfono',

    'msah.tag': 'Sede del Grupo', 'msah.role': 'Sede del Grupo',
    'msah.desc': 'Productor y proveedor global de <strong>secciones estructurales en acero inoxidable</strong> y perfiles especiales a medida. Desde su sede suiza en Stabio (Tesino), Montanstahl coordina la ingeniería, la innovación y la red comercial global del Grupo, operando un portafolio integrado de tecnologías de fabricación bajo un mismo techo.',
    'msah.prod': 'Perfiles estructurales inoxidables, perfiles especiales, secciones arquitectónicas',
    'sid.tag': 'Especialista en Extrusión en Caliente',
    'sid.desc': 'Altamente especializada en la <strong>extrusión en caliente</strong> de acero al carbono, acero inoxidable y titanio. Desde su planta en el valle de Valtellina, Siderval diseña perfiles macizos y huecos a medida para los mercados más exigentes — incluyendo aeroespacial, energía nuclear, naval, médico, montacargas y manipulación de materiales, y otros sectores de alta precisión — combinando flexibilidad de forma con los más estrictos estándares de calidad y seguridad.',
    'ssa.tag': 'Operaciones Norteamericanas',
    'ssa.desc': 'El brazo norteamericano del Grupo, con sede en Conroe, Texas. Operando la <strong>mayor línea de laser-fusion de América</strong>, Stainless Structurals entrega vigas, canales, secciones a medida y tubos en acero inoxidable listos para instalar — abasteciendo a data centers, arquitectura y clientes industriales en todo el continente bajo un mandato "Made in the USA".',
    'ext.tag': 'Planta de Extrusión en Caliente de EE. UU.',
    'ext.desc': 'La planta de extrusión en caliente del Grupo en los Estados Unidos, situada en Tunica, Mississippi. Extralloys opera <strong>una de las mayores prensas de extrusión en caliente del país</strong>, produciendo perfiles extruidos en acero, acero inoxidable y aleaciones especiales — reforzando el suministro doméstico del Grupo para clientes industriales, energéticos y de infraestructura en Norteamérica.',
    'msde.tag': 'Planta Europea de Extrusión en Caliente',
    'msde.desc': 'La planta de extrusión en caliente del Grupo en Europa, con sede en <strong>Schwerte, Alemania</strong> (anteriormente HOESCH, adquirida en 2021). Especializada en la producción de perfiles extruidos en caliente en acero y en aleaciones a base de níquel y titanio, Montanstahl GmbH es el sitio de referencia cuando el diseño de la sección es particularmente complejo — al servicio de clientes europeos desde el corazón de la región industrial del continente.',
    'msah.ratingLbl': 'Indicador de Riesgo',
    'msah.ratingTitle': 'Calificación Dun & Bradstreet / Bisnode',
    'msah.ratingDesc': 'Montanstahl es evaluada anualmente por Dun &amp; Bradstreet / Bisnode con un indicador de riesgo de <strong>1</strong> — situándose entre las empresas con mejor desempeño que operan en Suiza.',

    'map.title': 'Una presencia industrial <strong>global</strong>.', 'map.label': 'Presencia',
    'map.s1': 'Plantas productivas', 'map.s3': 'Continentes', 'map.s4': 'Mercados atendidos',

    'hist.title': 'Nuestra <strong>historia</strong>.', 'hist.label': 'Historia',
    'hist.lede': 'De un laminador suizo fundado en 1983 a un grupo metalúrgico transatlántico de cinco empresas — cuatro décadas de expansión continua en tecnología, productos y geografía.',

    'tl1.t': 'Fundación de Montanstahl SA', 'tl1.d': 'Fundación en el Tesino como laminador para perfiles de acero.',
    'tl2.t': 'Estirado en frío', 'tl2.d': 'Introducción del estirado en frío — Montanstahl amplía su portafolio de tecnologías de producción internas.',
    'tl3.t': 'Soldadura láser', 'tl3.d': 'Inversión en tecnología de soldadura láser propia — Montanstahl se convierte en referencia para secciones estructurales a medida.',
    'tl4.t': 'Perfiles de acero para arquitectura', 'tl4.d': 'Lanzamiento de la línea Architectural Steel Profiles — secciones a medida para fachadas, ventanas y arquitectura.',
    'tl5.t': 'Stainless Structurals — Texas', 'tl5.d': 'Lanzamiento de Stainless Structurals en Conroe, Texas — comienzan las operaciones norteamericanas.',
    'tl6.t': 'Ottostumm', 'tl6.d': 'Integración de Ottostumm — refuerzo de la oferta en sistemas de ventanas y fachadas de acero.',
    'tl7.t': 'Adquisición de HOESCH', 'tl7.d': 'Adquisición de HOESCH en Alemania — se convierte en Montanstahl GmbH, la planta europea de extrusión en caliente del Grupo.',
    'tl8.t': 'Adquisición de Siderval', 'tl8.d': 'Adquisición de Siderval S.p.A. en Talamona, Italia — la extrusión en caliente de clase mundial en acero inoxidable y titanio se incorpora al Grupo.',
    'tl9.t': 'Extralloys — Tunica', 'tl9.d': 'Se crea Extralloys en Tunica, Mississippi — una de las mayores prensas de extrusión en caliente de los Estados Unidos.',

    'ctc.title': 'Ponte en <strong>contacto</strong>.', 'ctc.label': 'Contacto',
    'ctc.lede': 'Para consultas comerciales, alianzas, prensa o carrera — contacta directamente con la empresa correspondiente según tu ubicación.',
    'ctc.text': 'Cada empresa del Grupo cuenta con su propio equipo comercial y contactos técnicos de ventas. Para asuntos a nivel de Grupo, contactar con Montanstahl AG.',
    'ctc.hq': 'Sede del Grupo', 'ctc.addr': 'Dirección', 'ctc.phone': 'Teléfono', 'ctc.web': 'Web', 'ctc.hours': 'Horario',
    'ctc.hoursVal': 'Lun–Vie · 08:00–12:00 / 13:00–17:00 CET',

    'foot.group': 'Grupo', 'foot.rights': 'Todos los derechos reservados', 'foot.privacy': 'Privacidad',
  },
};
