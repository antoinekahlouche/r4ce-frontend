<template>
	<Layout icon="file-alt" title="terms_usage">
		<Bloc>
			<div v-for="(value, key) in $t('usage')" :key="key">
				<div v-if="key.endsWith('title')" class="mb-3 mb-lg-5">
					<h2 v-if="key.split('_').length === 2">{{ key.split("_")[0] }} {{ value }}</h2>
					<h3 v-if="key.split('_').length === 3">{{ key.split("_")[0] }}.{{ key.split("_")[1] }} {{ value }}</h3>
				</div>
				<div v-else-if="key.endsWith('content')" class="mb-3 mb-lg-5" v-html="value"></div>
			</div>
		</Bloc>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Layout from "@/components/Layout"

export default {
	name: "TermsUsage",
	route: {
		name: "terms_usage",
		path: "terms/usage"
	},
	components: { Bloc, Layout },
	i18n: {
		messages: {
			fr: {
				usage: {
					"1_title": "Objet",
					"1_content": "<p>Les présentes conditions générales ont pour objet de définir les modalités et conditions d'utilisation des services proposés sur le site (ci-après : les \"Services\"), ainsi que de définir les droits et obligations des parties dans ce cadre.</p><p>Elles sont notamment accessibles et imprimables à tout moment par un lien direct en bas de la page d'accueil du site.</p><p>Elles peuvent être complétées, le cas échéant, par des conditions d'utilisation particulières à certains Services. En cas de contradiction, les conditions particulières prévalent sur ces conditions générales.</p>",
					"2_title": "Accès au site et aux Services",
					"2_content": "<p>Les Services sont accessibles, sous réserve des restrictions prévues sur le site :</p><ul><li>à toute personne physique disposant de la pleine capacité juridique pour s'engager au titre des présentes conditions générales. La personne physique qui ne dispose pas de la pleine capacité juridique ne peut accéder au Site et aux Services qu'avec l'accord de son représentant légal ;</li><li>à toute personne morale agissant par l'intermédiaire d'une personne physique disposant de la capacité juridique pour contracter au nom et pour le compte de la personne morale.</li></ul>",
					"3_title": "Acceptation des conditions générales",
					"3_content": "<p>L'acceptation des présentes conditions générales est matérialisée par une case à cocher dans le formulaire d'inscription. Cette acceptation ne peut être que pleine et entière. Toute adhésion sous réserve est considérée comme nulle et non avenue. L'Utilisateur qui n'accepte pas d'être lié par les présentes conditions générales ne doit pas utiliser les Services.</p>",
					"4_title": "Inscription sur le site",
					"4_1_title": "",
					"4_1_content": "<p>L'utilisation des Services nécessite que l'Utilisateur s'inscrive sur le site, en remplissant le formulaire prévu à cet effet. L'Utilisateur doit fournir l'ensemble des informations marquées comme obligatoires. Toute inscription incomplète ne sera pas validée.</p><p>L'inscription entraîne automatiquement l'ouverture d'un compte au nom de l'Utilisateur (ci-après : le \"Compte\"), lui donnant accès à un espace personnel (ci-après : l'\"Espace Personnel\") qui lui permet de gérer son utilisation des Services sous une forme et selon les moyens techniques que Antoine Kahlouche SASU juge les plus appropriés pour rendre lesdits Services.</p><p>L'Utilisateur garantit que toutes les informations qu'il donne dans le formulaire d'inscription sont exactes, à jour et sincères et ne sont entachées d'aucun caractère trompeur.</p><p>Il s'engage à mettre à jour ces informations dans son Espace Personnel en cas de modifications, afin qu'elles correspondent toujours aux critères susvisés.</p><p>L'Utilisateur est informé et accepte que les informations saisies aux fins de création ou de mise à jour de son Compte vaillent preuve de son identité. Les informations saisies par l'Utilisateur l'engagent dès leur validation.</p>",
					"4_2_title": "",
					"4_2_content": "<p>L'Utilisateur peut accéder à tout moment à son Espace Personnel après s'être identifié à l'aide de son identifiant de connexion ainsi que de son mot de passe.</p><p>L'Utilisateur s'engage à utiliser personnellement les Services et à ne permettre à aucun tiers de les utiliser à sa place ou pour son compte, sauf à en supporter l'entière responsabilité.</p><p>Il est pareillement responsable du maintien de la confidentialité de son identifiant et de son mot de passe. Il doit immédiatement contacter Antoine Kahlouche SASU aux coordonnées mentionnées à l'article 2 des présentes s'il remarque que son Compte a été utilisé à son insu. Il reconnaît à Antoine Kahlouche SASU le droit de prendre toutes mesures appropriées en pareil cas.</p>",
					"5_title": "Description des Services",
					"5_content": "<p>L'Utilisateur a accès aux Services décrits sur le site, sous une forme et selon les fonctionnalités et moyens techniques que Antoine Kahlouche SASU juge les plus appropriés.</p>",
					"6_title": "Services gratuits",
					"6_content": "<p>Les Services sont fournis à titre gratuit.</p>",
					"7_title": "Données",
					"7_content": "<p>L'Utilisateur reconnaît et accepte expressément :</p><ul><li>que les données recueillies sur le site et sur les équipements informatiques de Antoine Kahlouche SASU font foi de la réalité des opérations intervenues dans le cadre des présentes ;</li><li>que ces données constituent le seul mode de preuve admis entre les parties, notamment pour le calcul des sommes dues à Antoine Kahlouche SASU.</li></ul><p>L'Utilisateur peut accéder à ces données dans son Espace Personnel.</p>",
					"8_title": "Obligations de l'Utilisateur",
					"8_content": "<p>Sans préjudice des autres obligations prévues aux présentes, l'Utilisateur s'engage à respecter les obligations qui suivent :</p>",
					"8_1_title": "",
					"8_1_content": "<p>L'Utilisateur s'engage, dans son usage des Services, à respecter les lois et règlements en vigueur et à ne pas porter atteinte aux droits de tiers ou à l'ordre public.</p><p>Il est notamment seul responsable du bon accomplissement de toutes les formalités notamment administratives, fiscales et/ ou sociales et de tous les paiements de cotisations, taxes ou impôts de toutes natures qui lui incombent, le cas échéant, en relation avec son utilisation des Services. La responsabilité de Antoine Kahlouche SASU ne pourra en aucun cas être engagée à ce titre.</p>",
					"8_2_title": "",
					"8_2_content": "<p>L'Utilisateur reconnaît avoir pris connaissance sur le site des caractéristiques et contraintes, notamment techniques, de l'ensemble des Services. Il est seul responsable de son utilisation des Services.</p>",
					"8_3_title": "",
					"8_3_content": "<p>L'Utilisateur est informé et accepte que la mise en œuvre des Services nécessite qu'il soit connecté à internet et que la qualité des Services dépend directement de cette connexion, dont il est seul responsable.</p>",
					"8_4_title": "",
					"8_4_content": "<p>L'Utilisateur est également seul responsable des relations qu'il pourra nouer avec les autres Utilisateurs et des informations qu'il leur communique dans le cadre des Services. Il lui appartient d'exercer la prudence et le discernement appropriés dans ces relations et communications. L'Utilisateur s'engage en outre, dans ses échanges avec les autres Utilisateurs, à respecter les règles usuelles de politesse et de courtoisie.</p>",
					"8_5_title": "",
					"8_5_content": "<p>L'Utilisateur s'engage à faire un usage strictement personnel des Services. Il s'interdit en conséquence de céder, concéder ou transférer tout ou partie de ses droits ou obligations au titre des présentes à un tiers, de quelque manière que ce soit.</p>",
					"8_6_title": "",
					"8_6_content": "<p>L'Utilisateur s'engage à fournir à Antoine Kahlouche SASU toutes les informations nécessaires à la bonne exécution des Services. Plus généralement, l'Utilisateur s'engage à coopérer activement avec Antoine Kahlouche SASU en vue de la bonne exécution des présentes.</p>",
					"8_7_title": "",
					"8_7_content": "<p>L'Utilisateur est seul responsable des contenus de toute nature (rédactionnels, graphiques, audiovisuels ou autres, en ce compris la dénomination et/ou l'image éventuellement choisies par l'Utilisateur pour l'identifier sur le site) qu'il diffuse dans le cadre des Services (ci-après désignés : les \"Contenus\").</p><p>Il garantit à Antoine Kahlouche SASU qu'il dispose de tous les droits et autorisations nécessaires à la diffusion de ces Contenus.</p><p>Il s'engage à ce que lesdits Contenus soient licites, ne portent pas atteinte à l'ordre public, aux bonnes mœurs ou aux droits de tiers, n'enfreignent aucune disposition législative ou règlementaire et plus généralement, ne soient aucunement susceptibles de mettre en jeu la responsabilité civile ou pénale de Antoine Kahlouche SASU</p><p>L'Utilisateur s'interdit ainsi de diffuser, notamment et sans que cette liste soit exhaustive :</p><ul><li>des Contenus pornographiques, obscènes, indécents, choquants ou inadaptés à un public familial, diffamatoires, injurieux, violents, racistes, xénophobes ou révisionnistes,</li><li>des Contenus contrefaisants,</li><li>des Contenus attentatoires à l'image d'un tiers,</li><li>des Contenus mensongers, trompeurs ou proposant ou promouvant des activités illicites, frauduleuses ou trompeuses,</li><li>des Contenus nuisibles aux systèmes informatiques de tiers (tels que virus, vers, chevaux de Troie, etc.),</li><li>et plus généralement des Contenus susceptibles de porter atteinte aux droits de tiers ou d'être préjudiciables à des tiers, de quelque manière et sous quelque forme que ce soit.</li></ul>",
					"8_8_title": "",
					"8_8_content": "<p>L'Utilisateur reconnaît que les Services lui offrent une solution supplémentaire mais non alternative des moyens qu'il utilise déjà par ailleurs pour atteindre le même objectif et que cette solution ne saurait se substituer à ces autres moyens.</p>",
					"8_9_title": "",
					"8_9_content": "<p>L'Utilisateur doit prendre les mesures nécessaires pour sauvegarder par ses propres moyens les informations de son Espace Personnel qu'il juge nécessaires, dont aucune copie ne lui sera fournie.</p>",
					"8_10_title": "",
					"8_10_content": "<p>L'Utilisateur est informé et accepte que la mise en œuvre des Services nécessite qu'il soit connecté à internet et que la qualité des Services dépend directement de cette connexion, dont il est seul responsable.</p>",
					"9_title": "Garantie de l'Utilisateur",
					"9_content": "<p>L'Utilisateur garantit Antoine Kahlouche SASU contre toutes plaintes, réclamations, actions et/ou revendications quelconques que Antoine Kahlouche SASU pourrait subir du fait de la violation, par l'Utilisateur de l'une quelconque de ses obligations ou garanties aux termes des présentes conditions générales.</p><p>Il s'engage à indemniser Antoine Kahlouche SASU de tout préjudice qu'elle subirait et à lui payer tous les frais, charges et/ou condamnations qu'elle pourrait avoir à supporter de ce fait.</p>",
					"10_title": "Comportements prohibés",
					"10_1_title": "",
					"10_1_content": "<p>Il est strictement interdit d'utiliser les Services aux fins suivantes :</p><ul><li>l'exercice d'activités illégales, frauduleuses ou portant atteinte aux droits ou à la sécurité des tiers,</li><li>l'atteinte à l'ordre public ou la violation des lois et règlements en vigueur,</li><li>l'intrusion dans le système informatique d'un tiers ou toute activité de nature à nuire, contrôler, interférer, ou intercepter tout ou partie du système informatique d'un tiers, en violer l'intégrité ou la sécurité,</li><li>l'envoi d'emails non sollicités et/ou de prospection ou sollicitation commerciale,</li><li>les manipulations destinées à améliorer le référencement d'un site tiers,</li><li>l'aide ou l'incitation, sous quelque forme et de quelque manière que ce soit, à un ou plusieurs des actes et activités décrits ci-dessus,</li><li>et plus généralement toute pratique détournant les Services à des fins autres que celles pour lesquelles ils ont été conçus.</li></ul>",
					"10_2_title": "",
					"10_2_content": "<p>Il est strictement interdit aux Utilisateurs de copier et/ou de détourner à leurs fins ou à celles de tiers le concept, les technologies ou tout autre élément du site de Antoine Kahlouche SASU.</p>",
					"10_3_title": "",
					"10_3_content": "<p>Sont également strictement interdits :</p><ul><li>tous comportements de nature à interrompre, suspendre, ralentir ou empêcher la continuité des Services,</li><li>toutes intrusions ou tentatives d'intrusions dans les systèmes de Antoine Kahlouche SASU ,</li><li>tous détournements des ressources système du site,</li><li>toutes actions de nature à imposer une charge disproportionnée sur les infrastructures de ce dernier,</li><li>toutes atteintes aux mesures de sécurité et d'authentification,</li><li>tous actes de nature à porter atteinte aux droits et intérêts financiers, commerciaux ou moraux de Antoine Kahlouche SASU ou des usagers de son site, et enfin plus généralement</li><li>tout manquement aux présentes conditions générales.</li></ul>",
					"10_4_title": "",
					"10_4_content": "<p>Il est strictement interdit de monnayer, vendre ou concéder tout ou partie de l'accès aux Services ou au site, ainsi qu'aux informations qui y sont hébergées et/ou partagées.</p>",
					"11_title": "Sanctions des manquements",
					"11_content": "<p>En cas de manquement à l'une quelconque des dispositions des présentes conditions générales ou plus généralement, d'infraction aux lois et règlements en vigueur par un Utilisateur, Antoine Kahlouche SASU se réserve le droit de prendre toute mesure appropriée et notamment de :</p><ul><li>suspendre ou résilier l'accès aux Services de l'Utilisateur, auteur du manquement ou de l'infraction, ou y ayant participé,</li><li>supprimer tout contenu mis en ligne sur le site,</li><li>publier sur le site tout message d'information que Antoine Kahlouche SASU jugera utile,</li><li>avertir toute autorité concernée,</li><li>engager toute action judiciaire.</li></ul>",
					"12_title": "Responsabilité et garantie de Antoine Kahlouche SASU",
					"12_1_title": "",
					"12_1_content": "<p>Antoine Kahlouche SASU s'engage à fournir les Services avec diligence et selon les règles de l'art, étant précisé qu'il pèse sur elle une obligation de moyens, à l'exclusion de toute obligation de résultat, ce que les Utilisateurs reconnaissent et acceptent expressément.</p>",
					"12_2_title": "",
					"12_2_content": "<p>Antoine Kahlouche SASU n'a pas connaissance des Contenus mis en ligne par les Utilisateurs dans le cadre des Services, sur lesquels elle n'effectue aucune modération, sélection, vérification ou contrôle d'aucune sorte et à l'égard desquels elle n'intervient qu'en tant que prestataire d'hébergement.</p><p>En conséquence, Antoine Kahlouche SASU ne peut être tenue pour responsable des Contenus, dont les auteurs sont des tiers, toute réclamation éventuelle devant être dirigée en premier lieu vers l'auteur des Contenus en question.</p><p>Les Contenus préjudiciables à un tiers peuvent faire l'objet d'une notification à Antoine Kahlouche SASU selon les modalités prévues par l'article 6 I 5 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, Antoine Kahlouche SASU se réservant de prendre les mesures décrites à l'article 12</p>",
					"12_3_title": "",
					"12_3_content": "<p>Antoine Kahlouche SASU décline toute responsabilité en cas de perte éventuelle des informations accessibles dans l'Espace Personnel de l'Utilisateur, celui-ci devant en sauvegarder une copie et ne pouvant prétendre à aucun dédommagement à ce titre.</p>",
					"12_4_title": "",
					"12_4_content": "<p>Antoine Kahlouche SASU s'engage à procéder régulièrement à des contrôles afin de vérifier le fonctionnement et l'accessibilité du site. A ce titre, Antoine Kahlouche SASU se réserve la faculté d'interrompre momentanément l'accès au site pour des raisons de maintenance. De même, Antoine Kahlouche SASU ne saurait être tenue responsable des difficultés ou impossibilités momentanées d'accès au site qui auraient pour origine des circonstances qui lui sont extérieures, la force majeure, ou encore qui seraient dues à des perturbations des réseaux de télécommunication.</p>",
					"12_5_title": "",
					"12_5_content": "<p>Antoine Kahlouche SASU ne garantit pas aux Utilisateurs</p><ul><li>que les Services, soumis à une recherche constante pour en améliorer notamment la performance et le progrès, seront totalement exempts d'erreurs, de vices ou défauts,</li><li>que les Services, étant standard et nullement proposés à la seule intention d'un Utilisateur donné en fonction de ses propres contraintes personnelles, répondront spécifiquement à ses besoins et attentes.</li></ul>",
					"12_6_title": "",
					"12_6_content": "<p>En tout état de cause, la responsabilité susceptible d'être encourue par Antoine Kahlouche SASU au titre des présentes est expressément limitée aux seuls dommages directs avérés subis par l'Utilisateur.</p>",
					"13_title": "Propriété intellectuelle",
					"13_content": "<p>Les systèmes, logiciels, structures, infrastructures, bases de données et contenus de toute nature (textes, images, visuels, musiques, logos, marques, base de données, etc …) exploités par Antoine Kahlouche SASU au sein du site sont protégés par tous droits de propriété intellectuelle ou droits des producteurs de bases de données en vigueur. Tous désassemblages, décompilations, décryptages, extractions, réutilisations, copies et plus généralement, tous actes de reproduction, représentation, diffusion et utilisation de l'un quelconque de ces éléments, en tout ou partie, sans l'autorisation de Antoine Kahlouche SASU sont strictement interdits et pourront faire l'objet de poursuites judiciaires.</p>",
					"14_title": "Données à caractère personnel",
					"14_content": '<p>Antoine Kahlouche SASU pratique une politique de protection des données personnelles dont les caractéristiques sont explicitées dans le document intitulé "Confidentialité", dont l\'Utilisateur est expressément invité à prendre connaissance sur le site.</p>',
					"15_title": "Publicité",
					"15_content": "<p>Antoine Kahlouche SASU se réserve la faculté d'insérer sur toute page du site et dans toute communication aux Utilisateurs tous messages publicitaires ou promotionnels sous une forme et dans des conditions dont Antoine Kahlouche SASU sera seule juge.</p>",
					"16_title": "Liens et sites tiers",
					"16_content": "<p>Antoine Kahlouche SASU ne pourra en aucun cas être tenue pour responsable de la disponibilité technique de sites internet ou d'applications mobiles exploités par des tiers (y compris ses éventuels partenaires) auxquels l'Utilisateur accéderait par l'intermédiaire du site.</p><p>Antoine Kahlouche SASU n'endosse aucune responsabilité au titre des contenus, publicités, produits et/ou services disponibles sur de tels sites et applications mobiles tiers dont il est rappelé qu'ils sont régis par leurs propres conditions d'utilisation.</p><p>Antoine Kahlouche SASU n'est pas non plus responsable des transactions intervenues entre l'Utilisateur et un quelconque annonceur, professionnel ou commerçant (y compris ses éventuels partenaires) vers lequel l'Utilisateur serait orienté par l'intermédiaire du site et ne saurait en aucun cas être partie à quelques litiges éventuels que ce soit avec ces tiers concernant notamment la livraison de produits et/ou services, les garanties, déclarations et autres obligations quelconques auxquelles ces tiers sont tenus.</p>",
					"17_title": "Durée des Services, désinscription",
					"17_content": "<p>Les Services sont souscrits pour une durée indéterminée.</p><p>L'Utilisateur peut se désinscrire des Services à tout moment, en adressant une demande à cet effet à Antoine Kahlouche SASU (Cf. Informations légales).</p><p>La désinscription est effective immédiatement. Elle entraîne la suppression automatique du Compte de l'Utilisateur.</p>",
					"18_title": "Modifications",
					"18_content": "<p>Antoine Kahlouche SASU se réserve la faculté de modifier à tout moment les présentes conditions générales.</p><p>L'Utilisateur sera informé de ces modifications par tout moyen utile.</p><p>L'Utilisateur qui n'accepte pas les conditions générales modifiées doit se désinscrire des Services selon les modalités prévues à l'article 18.</p><p>Tout Utilisateur qui a recours aux Services postérieurement à l'entrée en vigueur des conditions générales modifiées est réputé avoir accepté ces modifications.</p>",
					"19_title": "Langue",
					"19_content": "<p>Dans l'hypothèse d'une traduction des présentes conditions générales dans une ou plusieurs langues, la langue d'interprétation sera la langue française en cas de contradiction ou de contestation sur la signification d'un terme ou d'une disposition.</p>",
					"20_title": "Loi applicable et juridiction",
					"20_content": "<p>Les présentes conditions générales sont régies par la loi française.</p><p>En cas de contestation sur la validité, l'interprétation et/ou l'exécution des présentes conditions générales, les parties conviennent que les tribunaux de Paris seront exclusivement compétents pour en juger, sauf règles de procédure impératives contraires.</p>",
					"21_title": "Entrée en vigueur",
					"21_content": "<p>Les présentes conditions générales sont entrées en vigueur le 01/11/2020</p>"
				}
			}
		}
	}
}
</script>

<style scoped></style>
