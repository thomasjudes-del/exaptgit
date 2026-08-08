import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Search,
  ShieldCheck,
} from 'lucide-react';

type GuideSource = {
  label: string;
  url: string;
  note?: string;
};

type GuideSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
};

type Guide = {
  slug: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  lede: string;
  answer: string;
  sections: GuideSection[];
  sources: GuideSource[];
  related: string[];
};

const GCF_URL = '/fr/green-claims-fix/';
const LIBRARY_URL = '/fr/green-claims-fix/guides/';
const UPDATED = '8 août 2026';
const UPDATED_ISO = '2026-08-08';

const sourceUrls = {
  directive: 'https://eur-lex.europa.eu/eli/dir/2024/825/oj',
  commission: 'https://commission.europa.eu/live-work-travel-eu/consumer-rights-and-complaints/sustainable-consumption_en',
  dgccrf: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/allegations-environnementales-ce-quil-faut-retenir',
  guide: 'https://www.economie.gouv.fr/files/files/directions_services/cnc/avis/2023/Allegations-environnementales/guide_2023.pdf',
  l1212: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563114',
  l1322: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049532070',
  l54191: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041555718',
  l22968: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043960256',
  ddadue: 'https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N53140',
  greenClaimsProposal: 'https://eur-lex.europa.eu/legal-content/FR/ALL/?uri=CELEX:52023PC0166',
};

export const guides: Guide[] = [
  {
    slug: 'eco-responsable-ecologique-green-durable',
    eyebrow: 'Claims génériques',
    title: 'Peut-on encore dire « éco-responsable », « écologique », « green » ou « durable » en 2026 ?',
    seoTitle: 'Éco-responsable, écologique, green, durable : règles 2026 | Green Claims Fix',
    description: 'Quand les claims éco-responsable, écologique, green ou durable deviennent-ils problématiques ? Règles France et UE, preuves, exemples et checklist 2026.',
    lede: 'Le problème n’est pas seulement le mot. C’est ce que le consommateur est raisonnablement amené à comprendre, la précision apportée au claim et la preuve qui permet de le soutenir.',
    answer: 'À partir du 27 septembre 2026, une allégation environnementale générique en B2C est interdite si l’entreprise ne peut pas démontrer une performance environnementale excellente reconnue pertinente pour cette allégation. Une formulation suffisamment précise, claire et visible sur le même support n’est plus considérée comme générique — mais elle reste soumise aux règles générales contre les pratiques trompeuses.',
    sections: [
      {
        title: 'Le point clé : passer du qualificatif vague au fait vérifiable',
        paragraphs: [
          'La directive (UE) 2024/825 cite notamment comme exemples de claims génériques « respectueux de l’environnement », « vert », « écologique », « bon pour le climat », « à faible intensité de carbone », « biodégradable » ou « biosourcé ». Le point 4a ajouté à la blacklist de la directive sur les pratiques commerciales déloyales vise ces formulations lorsqu’elles suggèrent une excellente performance environnementale sans que celle-ci puisse être démontrée.',
          'La Commission précise en 2026 qu’une spécification placée clairement et de façon proéminente sur le même support peut faire sortir le claim de la catégorie « générique ». C’est une différence très opérationnelle : un lien discret en bas de page ne joue pas le même rôle qu’une précision immédiatement associée au claim.',
        ],
        callout: 'Exemple : « emballage respectueux du climat » est générique. « 100 % de l’énergie utilisée pour produire cet emballage provient de sources renouvelables » est un claim spécifique — qui doit néanmoins être vrai, correctement périmétré et étayé.',
      },
      {
        title: 'Et aujourd’hui en France ?',
        paragraphs: [
          'Les claims environnementaux sont déjà encadrés par le droit des pratiques commerciales trompeuses. L’article L.121-2 du Code de la consommation permet notamment de sanctionner une présentation fausse ou susceptible d’induire en erreur sur l’impact environnemental d’un bien ou service ou sur la portée des engagements environnementaux de l’annonceur.',
          'Le droit français actuel contient aussi des interdictions plus spécifiques. Au 8 août 2026, l’article L.541-9-1 du Code de l’environnement interdit notamment de faire figurer sur un produit ou un emballage les mentions « biodégradable », « respectueux de l’environnement » ou équivalentes. Le projet français de transposition de la directive 2024/825 prévoit de faire évoluer ce régime ; cette transposition n’est pas encore promulguée à la date de mise à jour de ce guide.',
        ],
      },
      {
        title: 'Qu’est-ce qu’une « performance environnementale excellente reconnue » ?',
        paragraphs: [
          'La directive ne renvoie pas à n’importe quelle étude interne ou certification maison. La performance reconnue peut notamment résulter de l’Ecolabel européen, d’un système d’écolabellisation de type I EN ISO 14024 officiellement reconnu dans un État membre, ou d’une meilleure performance environnementale définie par un autre texte de l’Union applicable.',
          'La performance doit en outre être pertinente pour le claim précis. Une excellente performance sur l’efficacité énergétique ne justifie pas automatiquement un claim générique sur la biodégradabilité.',
        ],
      },
      {
        title: 'Attention aux mots « durable » et « responsable »',
        paragraphs: [
          'Le considérant 10 de la directive souligne une difficulté particulière : des mots comme « durable » ou « responsable » peuvent évoquer autre chose que l’environnement, notamment des dimensions sociales. Une excellente performance purement environnementale ne suffit donc pas nécessairement à justifier un qualificatif aussi large.',
          'Pour une marque, le réflexe le plus robuste est de réduire la promesse à ce qu’elle sait effectivement démontrer : quel aspect, quelle métrique, quel périmètre, quelle période et quelle source de preuve ?',
        ],
      },
      {
        title: 'Checklist avant publication',
        bullets: [
          'Le claim décrit-il un bénéfice précis ou une qualité générale du produit/de la marque ?',
          'La précision est-elle visible au même endroit que le claim principal ?',
          'Le périmètre est-il explicite : produit, emballage, composant, gamme ou entreprise ?',
          'La preuve couvre-t-elle exactement la promesse formulée ?',
          'La preuve est-elle actuelle, mesurable et traçable ?',
          'Une règle sectorielle plus spécifique s’applique-t-elle au produit concerné ?',
        ],
      },
    ],
    sources: [
      { label: 'Directive (UE) 2024/825 — considérants 9 et 10, blacklist', url: sourceUrls.directive },
      { label: 'Commission européenne — Q&A ECGT, juin 2026', url: sourceUrls.commission },
      { label: 'Code de la consommation — article L.121-2', url: sourceUrls.l1212 },
      { label: 'Code de l’environnement — article L.541-9-1', url: sourceUrls.l54191 },
      { label: 'Dossier français de transposition DDADUE', url: sourceUrls.ddadue },
    ],
    related: ['biosource-biobased-preuves', 'biodegradable-compostable', 'produit-emballage-portee-claim'],
  },
  {
    slug: 'neutre-carbone-zero-carbone',
    eyebrow: 'Claims carbone',
    title: '« Neutre en carbone », « zéro carbone », « climate neutral » : que peut-on encore dire ?',
    seoTitle: 'Neutre en carbone et zéro carbone : règles 2026 | Green Claims Fix',
    description: 'Neutralité carbone, zéro carbone et compensation : ce qui est autorisé aujourd’hui en France et ce qui change dans l’UE le 27 septembre 2026.',
    lede: 'Les claims carbone sont un bon exemple de la transition réglementaire en cours : le régime français actuel et la nouvelle règle européenne ne fonctionnent pas exactement de la même façon.',
    answer: 'En France aujourd’hui, une publicité affirmant qu’un produit ou service est « neutre en carbone » ou équivalent est conditionnée à la publication d’éléments précis. À partir du 27 septembre 2026, l’UE interdit en toutes circonstances les claims selon lesquels un produit a un impact GES neutre, réduit ou positif lorsque cette promesse repose sur de la compensation hors de sa chaîne de valeur.',
    sections: [
      {
        title: 'France aujourd’hui : une allégation conditionnelle, pas un blanc-seing',
        paragraphs: [
          'Au 8 août 2026, l’article L.229-68 du Code de l’environnement encadre la publicité affirmant qu’un produit ou service est « neutre en carbone » ou équivalent. Le dispositif français impose notamment de rendre accessibles un bilan des émissions du produit ou service sur son cycle de vie, une trajectoire de réduction et les modalités de compensation des émissions résiduelles.',
          'Le guide pratique DGCCRF/CNC rappelle que cette logique couvre aussi des formulations de portée équivalente telles que « zéro carbone », « empreinte carbone nulle », « climatiquement neutre », « intégralement compensé » ou « 100 % compensé ».',
        ],
      },
      {
        title: '27 septembre 2026 : la compensation ne peut plus rendre le produit « neutre »',
        paragraphs: [
          'La directive (UE) 2024/825 ajoute à la blacklist le fait d’affirmer, sur la base de la compensation d’émissions de gaz à effet de serre, qu’un produit a un impact neutre, réduit ou positif sur l’environnement en termes d’émissions de GES.',
          'Le considérant 12 cite notamment « neutre pour le climat », « certifié neutre en CO2 », « bilan carbone positif », « zéro net pour le climat », « climatiquement compensé », « impact réduit sur le climat » et « empreinte CO2 limitée » lorsqu’ils reposent sur la compensation. Le raisonnement réglementaire est simple : compenser ailleurs n’est pas équivalent à réduire l’impact réel du produit lui-même.',
        ],
        callout: 'Une réduction réelle et vérifiable dans le cycle de vie du produit n’est pas automatiquement interdite par cette règle. Elle doit toutefois rester précise, non trompeuse et correctement documentée.',
      },
      {
        title: 'Produit, entreprise et objectif futur : trois situations différentes',
        bullets: [
          'Produit + compensation : la nouvelle blacklist européenne est directement pertinente.',
          'Réduction réelle du cycle de vie du produit : possible en principe, sous réserve des autres règles et de la preuve.',
          'Entreprise qui finance un projet carbone : elle peut communiquer sur cet investissement si la présentation ne transforme pas ce financement en fausse neutralité du produit.',
          'Objectif futur du type « net zero 2030 » : il relève aussi des règles spécifiques sur les allégations de performance environnementale future.',
        ],
      },
      {
        title: 'Ce que le dossier de transposition français prévoit',
        paragraphs: [
          'Le projet français de transposition prévoit d’abroger le régime spécifique actuel des articles L.229-68 et L.229-69 afin d’articuler le droit français avec la nouvelle règle de la directive sur les pratiques commerciales déloyales. À la date de mise à jour de ce guide, cette transposition n’est pas encore promulguée.',
          'Pour une campagne lancée autour de septembre 2026, il faut donc vérifier l’état du droit au moment exact de la diffusion et ne pas fusionner prématurément le régime français actuel avec la règle européenne à venir.',
        ],
      },
      {
        title: 'Checklist de preuve',
        bullets: [
          'Le claim concerne-t-il un produit, un service, l’entreprise ou un objectif futur ?',
          'Le bénéfice annoncé repose-t-il sur des réductions dans la chaîne de valeur ou sur des crédits/compensations externes ?',
          'Le périmètre des émissions est-il explicitement défini ?',
          'La méthode, la baseline, la période et les données sont-elles disponibles ?',
          'Le consommateur peut-il distinguer réduction réelle et contribution à un projet environnemental ?',
          'Pour une promesse future, existe-t-il un plan crédible et une vérification indépendante régulière ?',
        ],
      },
    ],
    sources: [
      { label: 'Code de l’environnement — article L.229-68', url: sourceUrls.l22968 },
      { label: 'Directive (UE) 2024/825 — considérant 12 et annexe I', url: sourceUrls.directive },
      { label: 'Commission européenne — Q&A ECGT, juin 2026', url: sourceUrls.commission },
      { label: 'Guide pratique des allégations environnementales 2023', url: sourceUrls.guide },
      { label: 'Dossier français de transposition DDADUE', url: sourceUrls.ddadue },
    ],
    related: ['promesses-environnementales-futures', 'eco-responsable-ecologique-green-durable', 'produit-emballage-portee-claim'],
  },
  {
    slug: 'recyclable',
    eyebrow: 'Circularité',
    title: 'Peut-on dire qu’un produit ou un emballage est « recyclable » ?',
    seoTitle: 'Claim « recyclable » : règles, preuves et emballages | Green Claims Fix',
    description: 'Comment utiliser le claim recyclable en France : périmètre, preuves, conditions de recyclabilité, emballages, anneau de Möbius et règles européennes 2026.',
    lede: '« Recyclable » paraît factuel. Pourtant, la question utile n’est pas seulement “peut-il théoriquement être recyclé ?”, mais “quoi, dans quelles conditions, via quelle filière et avec quel niveau de preuve ?”.',
    answer: 'Le claim « recyclable » n’est pas interdit par principe. Il doit correspondre à une réalité démontrable, préciser ce qui est recyclable et ne pas exagérer la portée du bénéfice. Pour de nombreux produits soumis au dispositif français d’information environnementale, la recyclabilité est en outre encadrée par des critères et une information réglementaire spécifique.',
    sections: [
      {
        title: 'Ce que le guide français demande de clarifier',
        paragraphs: [
          'Le guide DGCCRF/CNC décrit la recyclabilité comme la capacité d’un produit, d’un emballage ou d’un composant associé à être prélevé sur un flux de déchets par des processus disponibles, collecté, traité et remis en usage sous forme de matière première ou de produit.',
          'Il recommande d’indiquer précisément ce qui est recyclable et les conditions de cette recyclabilité, par exemple une collecte ou un apport spécifique et, lorsque c’est pertinent, le taux de recyclage moyen pratiqué par la filière.',
        ],
      },
      {
        title: 'Produits concernés par l’information obligatoire',
        paragraphs: [
          'Pour plusieurs catégories soumises à responsabilité élargie du producteur, le décret n° 2022-748 organise une information du consommateur sur le caractère recyclable via une fiche produit accessible en ligne. Les formulations et critères associés à cette information réglementaire doivent être respectés.',
          'Pour les autres produits, une entreprise peut mettre en avant la recyclabilité, mais elle doit toujours pouvoir justifier la promesse et tenir compte des critères réglementaires et des règles générales relatives aux pratiques commerciales trompeuses.',
        ],
      },
      {
        title: 'Le piège produit / emballage',
        paragraphs: [
          'Un emballage recyclable ne rend pas le produit recyclable. Cette distinction est déjà centrale dans le guide français, qui demande de ne pas laisser croire qu’un bénéfice propre à l’emballage caractérise l’ensemble du produit.',
          'À partir du 27 septembre 2026, la directive 2024/825 renforce encore cette logique : présenter un bénéfice environnemental comme concernant l’ensemble d’un produit lorsqu’il ne porte que sur un aspect devient une pratique blacklistée.',
        ],
        callout: '« Emballage recyclable » et « produit recyclable » ne sont pas des formulations interchangeables. Le périmètre fait partie de la preuve.',
      },
      {
        title: 'Anneau de Möbius et Triman : ne pas confondre',
        paragraphs: [
          'Le guide DGCCRF/CNC rappelle que l’anneau de Möbius est un symbole normalisé associé à la recyclabilité ou au contenu recyclé selon son usage. Il ne doit pas être confondu avec le Triman, qui indique en France qu’un produit destiné aux consommateurs relève d’une règle de tri ou d’une collecte spécifique financée par les producteurs.',
          'Un pictogramme peut lui-même participer à la perception globale du claim : symbole, texte et contexte visuel doivent donc raconter la même chose.',
        ],
      },
      {
        title: 'Checklist de preuve pour « recyclable »',
        bullets: [
          'Qu’est-ce qui est recyclable : produit entier, emballage, composant ?',
          'Existe-t-il une filière de collecte et de traitement réellement disponible ?',
          'Quelles conditions le consommateur doit-il respecter ?',
          'Quel texte ou quelle méthode soutient la qualification utilisée ?',
          'L’information réglementaire obligatoire applicable au produit est-elle cohérente avec le marketing ?',
          'Le claim évite-t-il de transformer une qualité de l’emballage en bénéfice du produit ?',
        ],
      },
    ],
    sources: [
      { label: 'Guide pratique des allégations environnementales 2023 — « Recyclable »', url: sourceUrls.guide },
      { label: 'Code de l’environnement — article L.541-9-1', url: sourceUrls.l54191 },
      { label: 'Directive (UE) 2024/825 — portée des claims et circularité', url: sourceUrls.directive },
      { label: 'Code de la consommation — article L.121-2', url: sourceUrls.l1212 },
    ],
    related: ['produit-emballage-portee-claim', 'biosource-biobased-preuves', 'biodegradable-compostable'],
  },
  {
    slug: 'biodegradable-compostable',
    eyebrow: 'Fin de vie',
    title: '« Biodégradable » ou « compostable » : peut-on utiliser ces termes sur un produit ou un emballage ?',
    seoTitle: 'Biodégradable et compostable : règles France/UE 2026 | Green Claims Fix',
    description: 'Biodégradable, compostable à domicile ou industriel : règles françaises, emballages plastiques, preuves et évolution européenne au 27 septembre 2026.',
    lede: 'Ces deux mots sont souvent rapprochés, mais ils ne décrivent pas la même propriété et ne sont pas soumis au même régime. Leur utilisation sans contexte est particulièrement risquée.',
    answer: 'Au 8 août 2026, le droit français interdit la mention « biodégradable » sur un produit ou un emballage. « Compostable » reste possible dans certaines situations, mais doit être rattaché à des conditions de compostage précises ; un produit ou emballage plastique uniquement compostable en unité industrielle ne peut pas porter cette mention. À partir du 27 septembre, le cadre européen ajoute aussi les règles sur les allégations environnementales génériques.',
    sections: [
      {
        title: 'Biodégradable : une interdiction française actuelle sur produit et emballage',
        paragraphs: [
          'L’article L.541-9-1 du Code de l’environnement interdit actuellement de faire figurer sur un produit ou un emballage les mentions « biodégradable », « respectueux de l’environnement » ou toute autre mention équivalente.',
          'Cette règle française doit être distinguée de la directive 2024/825. Le projet de transposition prévoit une évolution du dispositif national afin de l’aligner sur le nouveau cadre européen ; au 8 août 2026, cette évolution n’est pas encore promulguée.',
        ],
      },
      {
        title: 'Compostable : préciser le milieu et les conditions',
        paragraphs: [
          'Le guide DGCCRF/CNC rappelle qu’un produit compostable est capable de se biodégrader dans des conditions de compostage normalisées en respectant des exigences de désintégration, de composition et d’écotoxicité des produits de dégradation.',
          'Le terme doit être défini par rapport à un milieu — compostage industriel ou à domicile — et à une échelle de temps. Les conditions d’un compost industriel, notamment de température et d’humidité, sont très différentes de celles d’un composteur domestique.',
        ],
      },
      {
        title: 'Le cas des plastiques uniquement compostables industriellement',
        paragraphs: [
          'Le Code de l’environnement prévoit que les produits et emballages en matière plastique dont la compostabilité ne peut être obtenue qu’en unité industrielle ne peuvent porter la mention « compostable ». Le fait qu’un matériau puisse se dégrader dans une installation spécialisée ne suffit donc pas à justifier une promesse générique au consommateur.',
          'Pour certaines catégories pouvant être collectées avec les biodéchets, des obligations d’information spécifiques existent. Le support marketing doit rester cohérent avec cette information réglementaire.',
        ],
      },
      {
        title: 'Ce qui change avec les claims génériques européens',
        paragraphs: [
          'La directive 2024/825 cite « biodégradable » parmi les exemples de claims génériques susceptibles d’être interdits lorsqu’aucune performance environnementale excellente reconnue pertinente ne peut être démontrée.',
          'La Commission précise toutefois qu’un claim accompagné d’une spécification claire et visible sur le même support n’est pas considéré comme générique. Cela ne rend pas pour autant la formulation automatiquement conforme : le droit national, les règles sectorielles et l’exactitude de la preuve restent applicables.',
        ],
      },
      {
        title: 'Checklist avant d’utiliser « compostable »',
        bullets: [
          'Le claim concerne-t-il le produit, l’emballage ou un composant ?',
          'S’agit-il de compostage domestique ou industriel ?',
          'La méthode ou norme de test utilisée correspond-elle réellement au contexte annoncé ?',
          'Le consommateur comprend-il les conditions nécessaires pour obtenir le résultat promis ?',
          'Le produit est-il soumis à une interdiction ou obligation d’information sectorielle ?',
          'Le claim risque-t-il de faire croire à une biodégradation libre dans l’environnement ?',
        ],
      },
    ],
    sources: [
      { label: 'Code de l’environnement — article L.541-9-1', url: sourceUrls.l54191 },
      { label: 'Guide pratique des allégations environnementales 2023 — « Compostable »', url: sourceUrls.guide },
      { label: 'Directive (UE) 2024/825 — claims génériques', url: sourceUrls.directive },
      { label: 'Commission européenne — Q&A ECGT, juin 2026', url: sourceUrls.commission },
      { label: 'Dossier français de transposition DDADUE', url: sourceUrls.ddadue },
    ],
    related: ['eco-responsable-ecologique-green-durable', 'biosource-biobased-preuves', 'recyclable'],
  },
  {
    slug: 'biosource-biobased-preuves',
    eyebrow: 'Matières',
    title: '« Biosourcé » / « biobased » : que signifie réellement ce claim et comment le prouver ?',
    seoTitle: 'Biosourcé / biobased : définition, preuves et règles 2026 | Green Claims Fix',
    description: 'Un produit biosourcé n’est pas automatiquement bio, biodégradable ou écologique. Découvrez quoi préciser, mesurer et prouver pour un claim biosourcé.',
    lede: '« Biosourcé » décrit l’origine d’une partie de la matière. Il ne constitue pas, à lui seul, une preuve de moindre impact environnemental.',
    answer: 'Un produit biosourcé est entièrement ou partiellement issu de biomasse. Si seule une partie l’est, la teneur doit être quantifiée et le périmètre précisé. Le claim ne permet pas de déduire automatiquement que le produit est biologique, biodégradable, compostable, recyclable, naturel ou globalement meilleur pour l’environnement.',
    sections: [
      {
        title: 'Ce que « biosourcé » dit — et ce qu’il ne dit pas',
        paragraphs: [
          'Le guide DGCCRF/CNC définit un produit biosourcé comme un produit, une matière ou un matériau entièrement ou partiellement fabriqué à partir de biomasse végétale ou animale, à l’exclusion des matières fossilisées comme le pétrole ou le charbon.',
          'La teneur biosourcée ne fournit pas, à elle seule, une information sur l’impact environnemental ou la durabilité du produit. Ces dimensions nécessitent d’autres éléments, par exemple une analyse du cycle de vie et des critères de durabilité adaptés.',
        ],
        callout: 'Biosourcé ≠ bio ≠ biodégradable ≠ compostable ≠ recyclable ≠ naturel.',
      },
      {
        title: 'Quantifier plutôt que suggérer',
        paragraphs: [
          'Dans le cas d’un produit partiellement biosourcé, le guide recommande d’associer au claim une quantification de la teneur biosourcée. Il cite plusieurs méthodes européennes normalisées permettant de mesurer la teneur en carbone biosourcé ou la teneur biosourcée.',
          'Le marketing doit également préciser ce qui est biosourcé : produit entier, emballage ou composant, ainsi que la ou les biomasses utilisées. Une mention « biosourcé » posée sur un pack sans périmètre peut conduire le consommateur à surestimer le bénéfice réel.',
        ],
      },
      {
        title: 'Le piège du préfixe « bio »',
        paragraphs: [
          'Le guide distingue clairement l’usage de « bio » au sens de l’agriculture biologique et le préfixe utilisé dans des mots comme biomasse, bioplastique ou biosourcé. Une marque ne devrait pas utiliser ce préfixe de façon à laisser croire que le produit est issu de l’agriculture biologique ou qu’il possède une propriété de biodégradabilité qui n’est pas démontrée.',
          'Plus la formulation est précise — matière, pourcentage, origine, composant — moins elle dépend d’une impression environnementale générale.',
        ],
      },
      {
        title: '27 septembre 2026 : « biobased » figure parmi les exemples de claims génériques',
        paragraphs: [
          'La directive 2024/825 cite explicitement « biobased » / « biosourcé » parmi les formulations pouvant constituer une allégation environnementale générique. Une spécification claire et visible sur le même support peut éviter cette qualification de claim générique, mais l’entreprise reste tenue de démontrer ce qu’elle affirme.',
          'Une formulation du type « coque contenant 62 % de matière biosourcée issue de… » est donc structurellement plus vérifiable qu’un simple macaron « BIOBASED » sans autre information.',
        ],
      },
      {
        title: 'Checklist de preuve',
        bullets: [
          'Quelle partie du produit est biosourcée ?',
          'Quel pourcentage de matière ou de carbone biosourcé est mesuré ?',
          'Quelle méthode ou norme a été utilisée ?',
          'Quelle biomasse est concernée et quelle est son origine ?',
          'Le claim suggère-t-il à tort une biodégradabilité ou un caractère biologique ?',
          'Si un bénéfice environnemental supplémentaire est revendiqué, existe-t-il une preuve distincte de ce bénéfice ?',
        ],
      },
    ],
    sources: [
      { label: 'Guide pratique des allégations environnementales 2023 — « Biosourcé »', url: sourceUrls.guide },
      { label: 'Directive (UE) 2024/825 — claims génériques', url: sourceUrls.directive },
      { label: 'Commission européenne — Q&A ECGT, juin 2026', url: sourceUrls.commission },
    ],
    related: ['eco-responsable-ecologique-green-durable', 'biodegradable-compostable', 'recyclable'],
  },
  {
    slug: 'labels-environnementaux',
    eyebrow: 'Labels & badges',
    title: 'Votre label ou badge environnemental sera-t-il encore utilisable après le 27 septembre 2026 ?',
    seoTitle: 'Labels environnementaux : certification obligatoire en 2026 ? | Green Claims Fix',
    description: 'Nouvelles règles UE sur les labels de durabilité : certification, tiers indépendant, badges maison, autorités publiques et anciens stocks.',
    lede: 'Le sujet ne concerne pas seulement les grands labels connus. Un badge, un sceau ou un visuel de confiance créé par une marque peut, selon son usage et la perception du consommateur, entrer dans le champ des labels de durabilité.',
    answer: 'À partir du 27 septembre 2026, afficher un label de durabilité qui n’est ni établi par une autorité publique pertinente ni fondé sur un système de certification conforme fait partie des pratiques interdites en toutes circonstances dans le cadre B2C de la directive sur les pratiques commerciales déloyales.',
    sections: [
      {
        title: 'Un « système de certification » a des critères précis',
        paragraphs: [
          'La Commission européenne rappelle en 2026 qu’un système de certification repose sur une vérification par un tiers et certifie qu’un produit, un processus ou une entreprise respecte des exigences déterminées.',
          'Les conditions du système doivent être accessibles au public. Le suivi de la conformité doit être assuré par un tiers compétent et indépendant, selon des standards ou procédures internationaux, européens ou nationaux appropriés.',
        ],
        bullets: [
          'Vérification indépendante par un tiers.',
          'Exigences et conditions accessibles publiquement.',
          'Contrôle de conformité par un tiers compétent et indépendant.',
          'Système transparent, crédible et ouvert dans des conditions équitables et non discriminatoires.',
          'Exigences établies avec consultation d’experts et parties prenantes pertinents.',
          'Possibilité d’utiliser un label correspondant au système.',
        ],
      },
      {
        title: 'Un badge maison peut devenir un vrai problème',
        paragraphs: [
          'Un cercle vert « Eco choice », une feuille avec une coche ou un sceau « Planet approved » ne sont pas automatiquement illégaux parce qu’ils sont graphiques. Mais s’ils fonctionnent comme une marque de confiance ou de qualité volontaire destinée à distinguer le produit grâce à ses caractéristiques environnementales ou sociales, ils peuvent être qualifiés de label de durabilité.',
          'La FAQ Commission ajoute que des feuilles vertes, gouttes d’eau et autres symboles naturels peuvent aussi participer à une allégation environnementale implicite selon leur contexte. Le design n’est donc pas juridiquement neutre.',
        ],
      },
      {
        title: 'Un label n’est pas un refuge pour un claim trompeur',
        paragraphs: [
          'Même lorsqu’un label est fondé sur un système de certification conforme, son usage peut encore constituer une allégation environnementale. Une certification valide ne permet donc pas d’exagérer le bénéfice, d’étendre la portée du label au-delà de ce qu’il certifie ou de transformer un critère spécifique en promesse environnementale globale.',
          'La question à poser n’est pas seulement « le label existe-t-il ? », mais « que certifie-t-il exactement, sur quel périmètre et que comprend le consommateur quand il le voit ? ».',
        ],
      },
      {
        title: 'Et les anciens stocks ?',
        paragraphs: [
          'La directive ne prévoit pas de période de transition générale au-delà du 27 septembre 2026 pour les labels qui ne répondent pas aux nouvelles exigences. La FAQ Commission évoque des solutions pratiques comme couvrir ou corriger une mention ou ajouter une information au point de vente.',
          'En juin 2026, le réseau CPC a publié une compréhension commune non contraignante sur les anciens stocks. Elle envisage une approche d’enforcement proportionnée lorsque des difficultés transitoires réelles et spécifiques existent, mais il ne s’agit pas d’une exemption juridique automatique.',
        ],
      },
      {
        title: 'Audit express d’un label',
        bullets: [
          'Qui possède le label et qui contrôle réellement la conformité ?',
          'Les critères sont-ils publics ?',
          'Le tiers de contrôle est-il juridiquement et fonctionnellement indépendant ?',
          'Le système est-il ouvert à tous les opérateurs capables de respecter les critères ?',
          'Le label certifie-t-il le produit, un composant, un processus ou l’entreprise ?',
          'La présentation marketing ne promet-elle pas davantage que le label lui-même ?',
        ],
      },
    ],
    sources: [
      { label: 'Directive (UE) 2024/825 — labels de durabilité et certification', url: sourceUrls.directive },
      { label: 'Commission européenne — Q&A ECGT, juin 2026', url: sourceUrls.commission },
      { label: 'Guide pratique des allégations environnementales 2023', url: sourceUrls.guide },
    ],
    related: ['eco-responsable-ecologique-green-durable', 'produit-emballage-portee-claim', 'promesses-environnementales-futures'],
  },
  {
    slug: 'promesses-environnementales-futures',
    eyebrow: 'Objectifs futurs',
    title: '« Net zero en 2030 », « 100 % recyclable en 2028 » : comment défendre une promesse environnementale future ?',
    seoTitle: 'Net zero 2030 et promesses environnementales futures : règles 2026 | Green Claims Fix',
    description: 'Objectifs net zero, recyclabilité future et engagements climat : plan, cibles mesurables, ressources, vérification indépendante et règles UE 2026.',
    lede: 'Une ambition environnementale future n’est pas interdite par principe. Ce qui devient beaucoup plus exigeant, c’est la distance entre la promesse affichée et le dispositif réel permettant de l’atteindre.',
    answer: 'À partir du 27 septembre 2026, une allégation liée à une performance environnementale future peut être considérée comme trompeuse si elle n’est pas soutenue par des engagements clairs, objectifs, publics et vérifiables, inscrits dans un plan de mise en œuvre détaillé et réaliste, avec des objectifs mesurables et temporels, des ressources et une vérification régulière par un tiers expert indépendant dont les conclusions sont accessibles aux consommateurs.',
    sections: [
      {
        title: 'Ce n’est pas une blacklist automatique',
        paragraphs: [
          'Contrairement aux labels non conformes ou à certains claims produit fondés sur la compensation carbone, les promesses environnementales futures relèvent d’une appréciation au cas par cas. Une entreprise peut donc annoncer une trajectoire ou un objectif futur — mais elle doit être en mesure de montrer que la promesse repose sur un système de réalisation crédible.',
          'Cette nuance est importante commercialement : il ne faut pas transformer la nouvelle règle en message simpliste du type « les objectifs climat sont interdits ». Ils ne le sont pas.',
        ],
      },
      {
        title: 'Les éléments que le plan doit réellement contenir',
        bullets: [
          'Engagements et objectifs clairs, objectifs, accessibles au public et vérifiables.',
          'Plan de mise en œuvre détaillé et réaliste.',
          'Objectifs mesurables et assortis d’échéances.',
          'Étapes intermédiaires permettant de suivre les progrès.',
          'Allocation de ressources pertinente, notamment budgétaires lorsque nécessaire.',
          'Prise en compte des évolutions technologiques nécessaires à la trajectoire.',
          'Vérification régulière par un tiers expert indépendant et sans conflit d’intérêts.',
          'Mise à disposition des conclusions du tiers pour les consommateurs.',
        ],
      },
      {
        title: 'Le tiers expert n’est pas la même chose qu’une certification de tous les green claims',
        paragraphs: [
          'La directive 2024/825 prévoit bien une vérification indépendante régulière pour les allégations de performance environnementale future. Cela ne signifie pas que toute allégation environnementale devra être vérifiée ex ante par un tiers à partir de septembre 2026.',
          'Cette confusion vient souvent de la proposition dite « Green Claims Directive » COM(2023) 166, qui envisageait un régime beaucoup plus large de vérification ex ante des allégations explicites. Au 8 août 2026, cette proposition n’est pas le droit applicable et les négociations sont bloquées / en attente.',
        ],
        callout: 'Message sûr : « certaines promesses environnementales futures doivent être adossées à un plan crédible et régulièrement vérifié par un tiers indépendant ». Pas : « tous les green claims devront être certifiés ».',
      },
      {
        title: 'Exemple : “100 % recyclable en 2028”',
        paragraphs: [
          'Un objectif de recyclabilité future devrait pouvoir être relié à un périmètre défini, une baseline, des changements industriels identifiés, des jalons, des ressources, des critères de mesure et un contrôle indépendant de la progression.',
          'Une simple intention dans un rapport RSE, répétée ensuite sur une page produit sans dispositif de réalisation ni vérification, est beaucoup plus difficile à défendre.',
        ],
      },
      {
        title: 'Checklist avant de publier un objectif futur',
        bullets: [
          'Le périmètre du claim est-il explicite ?',
          'Existe-t-il une date, une métrique et une baseline ?',
          'Les étapes intermédiaires sont-elles mesurables ?',
          'Les ressources et responsabilités sont-elles attribuées ?',
          'Le plan est-il public et suffisamment détaillé ?',
          'Un tiers expert indépendant suit-il régulièrement les progrès ?',
          'Ses conclusions sont-elles rendues accessibles aux consommateurs ?',
        ],
      },
    ],
    sources: [
      { label: 'Directive (UE) 2024/825 — article 6(2) modifié et considérant 4', url: sourceUrls.directive },
      { label: 'Commission européenne — Q&A ECGT, juin 2026', url: sourceUrls.commission },
      { label: 'Proposition Green Claims COM(2023) 166 — à ne pas confondre avec le droit applicable', url: sourceUrls.greenClaimsProposal },
    ],
    related: ['neutre-carbone-zero-carbone', 'labels-environnementaux', 'eco-responsable-ecologique-green-durable'],
  },
  {
    slug: 'produit-emballage-portee-claim',
    eyebrow: 'Périmètre du claim',
    title: 'Un bénéfice sur l’emballage permet-il de dire que le produit est « plus écologique » ?',
    seoTitle: 'Produit, emballage, marque : jusqu’où peut porter un green claim ? | Green Claims Fix',
    description: 'Comment éviter la généralisation abusive d’un bénéfice environnemental : produit, emballage, composant, gamme ou entreprise et nouvelles règles UE 2026.',
    lede: 'Une grande partie du greenwashing ne vient pas d’un chiffre faux. Elle vient d’un périmètre trop large : un fait vrai sur un composant devient une impression globale sur le produit ou la marque.',
    answer: 'Non, un bénéfice limité à l’emballage ne permet pas, à lui seul, de présenter le produit entier comme meilleur pour l’environnement. À partir du 27 septembre 2026, faire porter une allégation environnementale sur l’ensemble d’un produit ou de l’entreprise alors qu’elle ne concerne qu’un aspect ou une activité spécifique figure dans la blacklist européenne.',
    sections: [
      {
        title: 'La règle européenne vise explicitement le “scope mismatch”',
        paragraphs: [
          'Le considérant 11 de la directive 2024/825 donne un exemple très concret : commercialiser un produit comme « fabriqué avec des matériaux recyclés » de façon à laisser croire que l’ensemble du produit est fabriqué à partir de matériaux recyclés alors que seul l’emballage l’est.',
          'Autre exemple : donner l’impression qu’une entreprise utilise uniquement des sources d’énergie renouvelable alors que plusieurs de ses sites utilisent encore des combustibles fossiles. La difficulté n’est pas seulement la véracité du fait de départ ; c’est l’extension de ce fait à un périmètre qu’il ne couvre pas.',
        ],
      },
      {
        title: 'Le principe existait déjà dans les recommandations françaises',
        paragraphs: [
          'Le guide DGCCRF/CNC demande que l’information environnementale soit claire, proportionnée, dénuée d’ambiguïté et justifiée par des éléments précis et mesurables. Il insiste notamment sur le fait qu’une allégation relative à l’emballage ne doit pas laisser croire que le produit lui-même est plus respectueux de l’environnement.',
          'Pour les allégations concernant une entreprise, le guide recommande également de préciser si elles concernent toutes les activités, le processus de production ou seulement une étape particulière.',
        ],
      },
      {
        title: 'Cinq niveaux de périmètre à distinguer',
        bullets: [
          'Composant : une fibre, une matière, une pièce.',
          'Emballage : primaire, secondaire ou autre partie du packaging.',
          'Produit : le bien ou service vendu dans son ensemble.',
          'Gamme / catégorie : plusieurs produits auxquels le même claim est appliqué.',
          'Entreprise / marque : activités globales ou engagements du trader.',
        ],
        callout: 'Plus le périmètre du claim est large, plus la preuve doit couvrir un ensemble large — et plus le risque d’exagération augmente.',
      },
      {
        title: 'Le contexte B2C compte',
        paragraphs: [
          'La directive sur les pratiques commerciales déloyales et les modifications ECGT visent les pratiques commerciales B2C. Un rapport de durabilité destiné aux investisseurs n’entre pas automatiquement dans ce champ. En revanche, lorsqu’une information de ce rapport est réutilisée volontairement dans une publicité, une page produit ou une communication marketing destinée aux consommateurs, cette communication peut relever des règles B2C.',
          'Un audit de claims doit donc commencer par identifier le contexte et le support avant d’appliquer une règle au texte détecté.',
        ],
      },
      {
        title: 'Le test pratique en quatre questions',
        bullets: [
          'À quoi le consommateur pense-t-il que le claim s’applique ?',
          'À quoi la preuve s’applique-t-elle réellement ?',
          'La différence entre les deux est-elle visible immédiatement ?',
          'Le bénéfice mis en avant est-il significatif au regard des impacts du produit ou seulement périphérique ?',
        ],
      },
      {
        title: 'Exemples de reformulation structurellement plus précise',
        bullets: [
          'Au lieu de « produit fabriqué avec des matériaux recyclés » → préciser « emballage composé à X % de matière recyclée » si c’est bien l’emballage qui est concerné.',
          'Au lieu de « nous utilisons de l’énergie renouvelable » → préciser les sites, activités ou pourcentage réellement couverts.',
          'Au lieu de « gamme durable » → identifier la caractéristique environnementale concrète et les produits auxquels elle s’applique.',
        ],
      },
    ],
    sources: [
      { label: 'Directive (UE) 2024/825 — considérant 11 et blacklist', url: sourceUrls.directive },
      { label: 'Guide pratique des allégations environnementales 2023 — produit, emballage et entreprise', url: sourceUrls.guide },
      { label: 'Commission européenne — Q&A ECGT, juin 2026 — champ B2C', url: sourceUrls.commission },
      { label: 'Code de la consommation — article L.121-2', url: sourceUrls.l1212 },
    ],
    related: ['recyclable', 'eco-responsable-ecologique-green-durable', 'labels-environnementaux'],
  },
];

const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));

const upsertMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

const upsertCanonical = (href: string) => {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const resetAlternateLinks = () => {
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((element) => element.remove());
};

const setPageMetadata = (title: string, description: string, canonical: string, schema: Record<string, unknown>) => {
  document.documentElement.lang = 'fr';
  document.title = title;
  upsertMeta('meta[name="description"]', 'name', 'description', description);
  upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
  upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
  upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'article');
  upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
  upsertMeta('meta[property="og:image"]', 'property', 'og:image', 'https://exaptation.studio/green-claims-fix-card.jpg');
  upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', 'https://exaptation.studio/green-claims-fix-card.jpg');
  upsertCanonical(canonical);
  resetAlternateLinks();

  document.getElementById('green-claims-guide-schema')?.remove();
  const script = document.createElement('script');
  script.id = 'green-claims-guide-schema';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
};

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
      <a href={GCF_URL} className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">
        <ArrowLeft size={16}/>Green Claims Fix
      </a>
      <a href={GCF_URL} className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-emerald-300">
        Faire revoir mes claims
      </a>
    </div>
  </header>
);

export const GreenClaimsLibraryHub: React.FC = () => {
  useEffect(() => {
    const title = 'Guides Green Claims 2026 | Green Claims Fix';
    const description = '8 guides pratiques et sourcés pour comprendre les allégations environnementales en France et dans l’UE : claims génériques, carbone, recyclable, biosourcé, labels et plus.';
    const canonical = 'https://exaptation.studio/fr/green-claims-fix/guides/';
    setPageMetadata(title, description, canonical, {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description,
      url: canonical,
      dateModified: UPDATED_ISO,
      publisher: { '@type': 'Organization', name: 'Exaptation Studio' },
      hasPart: guides.map((guide) => ({
        '@type': 'Article',
        headline: guide.title,
        url: `${canonical}${guide.slug}/`,
      })),
    });
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">Green Claims Library</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">Des réponses pratiques aux claims qui posent vraiment question.</h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate-300">Huit guides construits à partir des textes officiels France / UE et des guides d’interprétation disponibles. Pas une liste de mots interdits : pour chaque claim, le périmètre, la preuve, la règle et l’action utile.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/55">
            <span className="rounded-full border border-white/10 px-3 py-1.5">Mis à jour le {UPDATED}</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">France & UE</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">Sources officielles</span>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 text-slate-950 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2">
          {guides.map((guide, index) => (
            <a key={guide.slug} href={`${LIBRARY_URL}${guide.slug}/`} className="group flex min-h-72 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{guide.eyebrow}</p>
                <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight md:text-3xl">{guide.title}</h2>
              <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-slate-600">{guide.lede}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-emerald-700">Lire le guide <ArrowRight size={16} className="transition group-hover:translate-x-1"/></span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 md:p-9">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 shrink-0 text-emerald-400"/>
              <div>
                <h2 className="text-2xl font-bold">Comment ces guides sont construits</h2>
                <p className="mt-3 leading-relaxed text-slate-300">Nous distinguons le droit français actuellement en vigueur, la directive (UE) 2024/825 applicable à partir du 27 septembre 2026, les documents d’interprétation non contraignants et les propositions législatives qui ne sont pas du droit applicable. Les règles sectorielles peuvent primer sur le cadre général.</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">Ces guides sont des ressources opérationnelles de préparation et ne constituent ni un avis juridique, ni une certification, ni une assurance de conformité.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Search className="mx-auto text-emerald-400" size={34}/>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">Vous avez ces claims sur votre propre site ?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">Green Claims Fix les relie aux règles pertinentes, aux preuves à réunir et aux actions à prioriser.</p>
          <a href={GCF_URL} className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 hover:bg-emerald-300">Découvrir Green Claims Fix <ArrowRight size={18}/></a>
        </div>
      </section>
    </main>
  );
};

type GreenClaimsGuidePageProps = {
  slug: string;
};

export const GreenClaimsGuidePage: React.FC<GreenClaimsGuidePageProps> = ({ slug }) => {
  const guide = guideBySlug.get(slug);

  useEffect(() => {
    if (!guide) return;
    const canonical = `https://exaptation.studio/fr/green-claims-fix/guides/${guide.slug}/`;
    setPageMetadata(guide.seoTitle, guide.description, canonical, {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: guide.title,
          description: guide.description,
          datePublished: UPDATED_ISO,
          dateModified: UPDATED_ISO,
          inLanguage: 'fr-FR',
          mainEntityOfPage: canonical,
          author: { '@type': 'Organization', name: 'Exaptation Studio' },
          publisher: { '@type': 'Organization', name: 'Exaptation Studio', parentOrganization: { '@type': 'Organization', name: 'LGI Sustainable Innovation' } },
          isPartOf: { '@type': 'CollectionPage', name: 'Green Claims Library', url: 'https://exaptation.studio/fr/green-claims-fix/guides/' },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Green Claims Fix', item: 'https://exaptation.studio/fr/green-claims-fix/' },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://exaptation.studio/fr/green-claims-fix/guides/' },
            { '@type': 'ListItem', position: 3, name: guide.title, item: canonical },
          ],
        },
      ],
    });
  }, [guide]);

  if (!guide) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <Header />
        <div className="mx-auto max-w-4xl px-6 py-24"><h1 className="text-4xl font-bold">Guide introuvable</h1><a href={LIBRARY_URL} className="mt-6 inline-flex text-emerald-400">Voir tous les guides</a></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <article>
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <a href={LIBRARY_URL} className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"><BookOpen size={16}/>Green Claims Library</a>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-emerald-400">{guide.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">{guide.title}</h1>
            <p className="mt-7 text-xl leading-relaxed text-slate-300">{guide.lede}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs text-white/50">
              <span>Mis à jour le {UPDATED}</span><span>•</span><span>France & UE · B2C</span><span>•</span><span>Sources officielles</span>
            </div>
          </div>
        </header>

        <section className="bg-white py-12 text-slate-950 md:py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7 md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">La réponse courte</p>
              <p className="mt-4 text-xl font-semibold leading-relaxed text-emerald-950 md:text-2xl">{guide.answer}</p>
            </div>
          </div>
        </section>

        <section className="bg-white pb-16 text-slate-950 md:pb-24">
          <div className="mx-auto max-w-4xl space-y-14 px-6">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-5 text-lg leading-8 text-slate-700">{paragraph}</p>)}
                {section.bullets && (
                  <div className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => <div key={bullet} className="flex items-start gap-3 text-base leading-7 text-slate-700"><CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-600"/><p>{bullet}</p></div>)}
                  </div>
                )}
                {section.callout && <div className="mt-7 rounded-2xl border-l-4 border-emerald-500 bg-slate-50 p-5 text-base font-semibold leading-7 text-slate-800">{section.callout}</div>}
              </section>
            ))}

            <section className="border-t border-slate-200 pt-10">
              <div className="flex items-center gap-3"><FileCheck2 className="text-emerald-700"/><h2 className="text-2xl font-bold">Sources principales</h2></div>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">Le statut réglementaire peut évoluer. Les sources officielles priment toujours sur ce guide.</p>
              <div className="mt-6 space-y-3">
                {guide.sources.map((source) => (
                  <a key={source.label} href={source.url} target="_blank" rel="noreferrer" className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 p-4 text-sm font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-800">
                    <span>{source.label}{source.note ? ` — ${source.note}` : ''}</span><ExternalLink size={15} className="mt-0.5 shrink-0"/>
                  </a>
                ))}
              </div>
            </section>

            <section className="border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-bold">À lire aussi</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {guide.related.map((relatedSlug) => {
                  const related = guideBySlug.get(relatedSlug);
                  if (!related) return null;
                  return <a key={related.slug} href={`${LIBRARY_URL}${related.slug}/`} className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-400 hover:shadow-md"><p className="text-xs font-black uppercase tracking-wider text-emerald-700">{related.eyebrow}</p><p className="mt-2 font-bold leading-snug">{related.title}</p></a>;
                })}
              </div>
            </section>
          </div>
        </section>
      </article>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Vous utilisez ce type de claim ?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">Green Claims Fix identifie les formulations à revoir, les preuves à réunir et les actions à prioriser sur vos propres contenus.</p>
          <a href={GCF_URL} className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 hover:bg-emerald-300">Faire revoir mes claims <ArrowRight size={18}/></a>
        </div>
      </section>
    </main>
  );
};
