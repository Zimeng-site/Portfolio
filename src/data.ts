export type SectionItem = {
    title: string;
    meta?: string;
    details?: string;
    bullets?: string[];
    links?: { href: string; label: string }[];
    category?: string;
    source?: string;
    date?: string;
    href?: string;
};

export type Section = {
    title: string;
    subtitle?: string;
    view?: string;
    items: SectionItem[];
};

export type Profile = {
    name: string;
    tagline: string;
    about: string;
    contact: { email: string; phone: string; linkedin: string };
    languages: { name: string; level: string }[];
    skills: string[];
};

export const profile: Profile = {
    name: 'Zimeng Yan',
    tagline: 'Multilingual correspondent connecting Europe, Latin America and China through rigorous reporting.',
    about:
        'Multilingual journalist (Mandarin, Spanish, English) with three years of living and reporting experience in Spain. Currently based in Beijing while traveling frequently, reporting on Europe and Latin America for Chinese audiences, and on China for European newsrooms. Builds original sourcing worldwide, with rigorous fact-checking and data analysis underpinning all reporting.',
    contact: {
        email: 'zimengyan2001@gmail.com',
        phone: '+34 652826659',
        linkedin: 'https://www.linkedin.com/in/zimengyan',
    },
    languages: [
        { name: 'Chinese', level: 'Native' },
        { name: 'English', level: 'C1, IELTS 7.5' },
        { name: 'Spanish', level: 'C1, DELE' },
        { name: 'Catalan', level: 'Conversational' },
    ],
    skills: [
        'Microsoft Office (MOS Expert – Word & Excel)',
        'Video editing (Adobe Premiere)',
        'Graphic design (Photoshop, Canva)',
        'Drums (band performance experience in China and Europe)',
    ],
};

export const sections: Section[] = [
    {
        title: 'Professional experience',
        items: [
            {
                title: 'Fixer, China Bureau, El País | Beijing',
                meta: 'February 2025 – Present',
                details:
                    '',
                bullets: [
                    "Cover EU-China relations from within China — e.g. reported on the EUChina EV tariff dispute; visited Chinese export manufacturing hubs to gather exporters' perspectives on global trade.",
                    "Identify and pitch stories relevant to Spanish-speaking audiences, drawing on sourcing and trust-building — e.g. Chinese public reaction to the Spanish Prime Minister's visit to China.",
                    "Conduct interviews, interpretation, and field investigation across Chinese, Spanish, and English, providing cultural mediation to ensure communication is accurate and appropriate across both settings.",
                    "Review Spanish reporters' copy prior to publication, checking accuracy of Chinese terms, political context, and cultural nuance; also draft background briefings and source summaries in support of the reporting team.",
                ],
            },
            {
                title: 'Contributing Reporter, International Desk, Phoenix Weekly | Europe/Remote',
                meta: 'March 2024 – Present',
                details:
                    '',
                bullets: [
                    "Write investigative features on Europe through fieldwork — e.g. covered local anti-overtourism protests; investigated the structural problems of vulnerable urban neighbourhoods, interviewing residents, scholars, and local criminal networks.",
                    "Report on International relations and the experiences of Chinese individuals and companies overseas",
                    "Conduct interviews in Spanish or English with native speakers, synthesising findings through multi-source interviewing, open-source investigation, and fact-checking, with multiple pieces exceeding 100,000 views."
                ],
            },
            {
                title: 'Marketing Intern, Nomahub | Barcelona',
                meta: 'January 2024 – February 2024',
                details:
                    'Worked in a fully Spanish-speaking team to identify and vet local influencer profiles for brand campaigns including La Pedrera and Emma Colchón, managing outreach and coordination with collaborators.',
            },
            {
                title: 'Spanish Language Intern, CCTV+ | Beijing',
                meta: 'February 2023 – April 2023',
                details:
                    'Contributed to short-form video content for platforms such as YouTube, assisting with filming, editing, subtitle translation and localisation for Spanish- and English-speaking markets.',
            },
            {
                title: 'Digital Content Intern, China Newsweek | Beijing',
                meta: 'November 2022 – February 2023',
                details:
                    'Produced explanatory content for digital platforms, turning trending cultural phenomena into in-depth analytical pieces and continuing as a freelance contributor with ongoing commissions following the internship.',
            },

        ],
    },
    {
        title: 'Portfolio highlights',
        subtitle: 'Selected reporting and fixer work with direct publication links.',
        view: 'portfolio',
        items: [
            {
                title: 'Right-Wing Influencers Turn Europe’s Vulnerable Neighborhoods into Decline Porn',
                category: 'Reporting',
                source: 'Phoenix TV & Phoenix Weekly',
                date: 'June 2026',
                href: 'https://mp.weixin.qq.com/s/R7hg5xUULVPoaSPMtdJa0w',
            },
            {
                title: 'Mango Heir Faces Patricide Charges',
                category: 'Reporting',
                source: 'Phoenix Weekly',
                date: 'June 2026',
                href: 'https://mp.weixin.qq.com/s/VHUPHz--o_cobZnyW7Dzpw',
            },
            {
                title: 'Teenagers in Europe and Latin America who want to be animals',
                category: 'Reporting',
                source: 'Phoenix TV & Phoenix Weekly',
                date: 'May 2026',
                href: 'https://mp.weixin.qq.com/s/x6it5-JBybxoWCXUW_Lvww',
            },
            {
                title: 'Against the Tide — Spain’s mass regularisation sparks controversy',
                category: 'Reporting',
                source: 'Phoenix Weekly',
                date: 'February 2026',
                href: 'https://www.toutiao.com/article/7603212409432310312/',
            },
            {
                title: 'The Future of Foreign Investment in Venezuela',
                category: 'Reporting',
                source: 'Phoenix Weekly',
                date: 'January 2026',
                href: 'https://www.toutiao.com/article/7596899075522576930/',
            },
            {
                title: 'Just Waiting for This to Pass — Voices from Venezuela',
                category: 'Reporting',
                source: 'Phoenix Weekly',
                date: 'January 2026',
                href: 'https://www.toutiao.com/article/7592156668612575807/',
            },
            {
                title: 'Your Holiday, My Nightmare — Anti-overtourism protests across Europe',
                category: 'Reporting',
                source: 'Phoenix Weekly',
                date: 'June 2025',
                href: 'https://www.toutiao.com/article/7518357032848704039/',
            },
            {
                title: 'Spain’s Deadliest Flood — Institutional failure or disaster?',
                category: 'Reporting',
                source: 'Phoenix Weekly',
                date: 'November 2024',
                href: 'https://mp.weixin.qq.com/s/5FUSP6Y2I8sqgmc1W8JyFg',
            },
            {
                title: 'China people speak about Trump’s visit',
                category: 'Fixer',
                source: 'El País',
                date: 'May 2026',
                href: 'https://elpais.com/internacional/2026-05-11/los-chinos-hablan-sobre-la-visita-de-trump-no-le-doy-la-bienvenida-porque-ha-iniciado-guerras.html',
            },
            {
                title: 'Mandarin and university scholarships in Africa',
                category: 'Fixer',
                source: 'El País',
                date: 'March 2026',
                href: 'https://elpais.com/planeta-futuro/2026-03-27/mandarin-y-becas-universitarias-asi-teje-china-su-influencia-en-africa-a-traves-de-la-educacion.html',
            },
            {
                title: 'China accelerates in the race for brain implants',
                category: 'Fixer',
                source: 'El País',
                date: 'March 2026',
                href: 'https://elpais.com/ciencia/2026-03-30/china-pisa-el-acelerador-en-la-carrera-de-los-implantes-cerebrales.html',
            },
            {
                title: 'A night train from Beijing to North Korea’s border',
                category: 'Fixer',
                source: 'El País',
                date: 'March 2026',
                href: 'https://elpais.com/internacional/2026-03-29/viaje-en-el-expreso-nocturno-desde-pekin-a-la-frontera-de-la-hermetica-corea-del-norte.html',
            },
            {
                title: 'What Chinese politicians think about the attack on Iran',
                category: 'Fixer',
                source: 'El País',
                date: 'March 2026',
                href: 'https://elpais.com/internacional/2026-03-06/que-piensan-los-politicos-chinos-sobre-el-ataque-a-iran-este-no-es-el-orden-internacional-con-el-que-yo-creci.html',
            },
            {
                title: 'The long shadow of the one-child policy',
                category: 'Fixer',
                source: 'El País',
                date: 'December 2025',
                href: 'https://elpais.com/sociedad/2025-12-28/la-larga-sombra-del-hijo-unico-china-paga-con-una-crisis-demografica-su-mayor-experimento-social.html',
            },
            {
                title: 'China builds the world’s most ambitious clean energy network',
                category: 'Fixer',
                source: 'El País',
                date: 'November 2025',
                href: 'https://elpais.com/clima-y-medio-ambiente/2025-11-14/china-teje-la-red-mas-ambiciosa-del-mundo-para-transportar-su-energia-limpia.html',
            },
            {
                title: 'Rising costs push young Chinese to second-tier cities',
                category: 'Fixer',
                source: 'El País',
                date: 'November 2025',
                href: 'https://elpais.com/internacional/2025-11-20/el-coste-de-la-vida-y-la-vivienda-fuerza-a-los-jovenes-chinos-a-buscar-su-sitio-en-ciudades-secundarias.html',
            },
            {
                title: 'A woman will lead Japan — feminist progress is not guaranteed',
                category: 'Fixer',
                source: 'El País',
                date: 'October 2025',
                href: 'https://elpais.com/internacional/2025-10-24/una-mujer-gobernara-japon-pero-eso-no-garantiza-un-avance-feminista.html',
            },
            {
                title: 'BYD — the company Musk once mocked and now fears',
                category: 'Fixer',
                source: 'El País',
                date: 'October 2025',
                href: 'https://elpais.com/economia/negocios/2025-10-17/byd-el-fabricante-de-coches-chino-del-que-musk-se-mofo-y-ahora-teme.html',
            },
            {
                title: 'Young Chinese nostalgic for the 2000s boom',
                category: 'Fixer',
                source: 'El País',
                date: 'September 2025',
                href: 'https://elpais.com/internacional/2025-09-29/la-nostalgia-de-los-jovenes-por-el-boom-de-los-2000-arrasa-en-las-redes-sociales-chinas.html',
            },
            {
                title: 'Guangzhou defies Trump despite trade war pressure',
                category: 'Fixer',
                source: 'El País',
                date: 'April 2025',
                href: 'https://elpais.com/economia/2025-04-20/guangzhou-la-ciudad-china-golpeada-por-los-aranceles-de-trump.html',
            },
            {
                title: 'A journey to Hangzhou, the birthplace of DeepSeek',
                category: 'Fixer',
                source: 'El País',
                date: 'March 2025',
                href: 'https://elpais.com/economia/2025-03-09/viaje-a-hangzhou-la-cuna-de-deepseek.html',
            },
            {
                title: 'A Chinese victim enslaved by cybercrime gangs in Myanmar',
                category: 'Fixer',
                source: 'El País',
                date: 'March 2025',
                href: 'https://elpais.com/internacional/2025-03-02/una-victima-china-esclavizada-por-las-mafias-de-ciberestafas-en-myanmar-muchas-veces-pense-que-no-saldria.html',
            },
        ],
    },
    {
        title: 'Education',
        items: [
            {
                title: 'MA in Specialised Communication, University of Barcelona',
                meta: '2023 – 2024',
            },
            {
                title: 'BA in Hispanic Philology, Beijing Language and Culture University',
                meta: '2019 – 2023',
            },
            {
                title: 'Exchange Programme, Faculty of Philology, University of Santiago de Compostela',
                meta: '2021 – 2022',
            },
        ],
    },
    {
        title: 'Publications & creative work',
        items: [
            {
                title: 'Creative and literary publications',
                links: [
                    { href: 'https://www.macaodaily.com/html/2026-02/13/content_1889162.htm', label: 'Wrong Translation — Macao Daily, February 2026' },
                    { href: 'https://www.macaodaily.com/html/2024-11/22/content_1795684.htm', label: 'Yulia’s Balcony — Macao Daily, November 2024' },
                    { href: 'https://www.macaodaily.com/html/2024-05/15/content_1755069.htm', label: 'The Melancholy Hill — Macao Daily, May 2024' },
                    { href: 'https://www.macaodaily.com/html/2024-02/14/content_1735061.htm', label: 'Matthew’s Accent — Macao Daily, February 2024' },
                    { href: 'https://www.macaodaily.com/html/2023-11/15/content_1714921.htm', label: 'Adiós Mi Amor — Macao Daily, November 2023' },
                    { href: 'https://www.macaodaily.com/html/2023-08/30/content_1697751.htm', label: 'Night talk with André — Macao Daily, August 2023' },
                    { href: 'https://art.ltn.com.tw/article/paper/1518099', label: 'I don’t hold any dissidence — Liberty Times, Taiwan' },
                ],
            },
        ],
    },
];
