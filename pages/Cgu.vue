<template>
  <section class="cgu">
    <header-vue></header-vue>
    <main class="container cgu--content">
      <h1><span>Politique de confidentialité </span></h1>
      <div
      v-for="(cc, i) in c"
      :key="i"
      class="subtitle"
      v-html="cc"></div>
    </main>
    <footer-vue :content="content.footer"></footer-vue>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Cgu',
  mixins: [globalMixin],
  data() {
    return {
      c: [
        'Nous attachons une importance toute particulière à la protection de vos données personnelles.',
        'La présente Politique de confidentialité a vocation à détailler de manière transparente la manière dont nous recueillons, stockons, utilisons et divulguons vos données personnelles lorsque vous utilisez le site Internet (le « Site ») et/ou que vous souhaitez obtenir des services ou informations proposés sur le Site (les « Services »).',
        'En utilisant le “Site” vous acceptez la présente Politique de confidentialité.',
        '<span>A - Les données personnelles que vous communiquez</span>',
        'Il n\'est pas impératif de transmettre des données personnelles pour consulter le Site. Nous ne collectons que les données strictement nécessaires à la mise en œuvre des Services. Afin de pouvoir bénéficier de nos services proposés, certaines pages du Site, il est nécessaire de procéder à une rapide inscription impliquant la communication de votre nom, votre prénom et de votre adresse mail.',
        'Si vous utilisez le Formulaire de Contact vous permettant de transmettre des demandes, vous devez éviter de transmettre des informations confidentielles non nécessaires dans la prise de contact.',
        '<span>B - Finalités de la collecte des données</span>',
        'Les données personnelles collectées sur le Site sont principalement traitées pour les finalités suivantes:',
        '-Traitement de vos demandes via le Site;',
        '-Analyse et suivi du trafic sur le Site ;',
        '-Amélioration du contenu et de la navigabilité du Site.',
        '<span>C - Partage et transfert des données</span>',
        'Les données collectées nous sont uniquement destinées. Le cas échéant, nous ne partageons vos données personnelles qu\'avec ses prestataires de services identifiés, notamment pour la sous-traitance de la réalisation des finalités présentées ci-dessus. En aucun cas nous ne cédons, vendons ou louons les données collectées à des tiers, que ce soit à titre onéreux ou gratuit.',
        'Par ailleurs, dans les cas où la loi l\'y oblige ou l\'y autorise, notamment du fait d\'une décision de justice ou de toute autre demande ou exigence légale, nous pourrons être amenés à divulguer ces données à des tiers.',
        'Le Site est hébergé sur des serveurs d\'OVH',
        '<span>D - Cookies</span>',
        '<span>Dispositions générales sur les cookies et la collecte automatisée de vos données personnelles</span>',
        'Lors de votre navigation sur le Site, nous sommes susceptibles de recueillir, conformément à la législation applicable et avec votre accord préalable lorsqu\'il est requis, des informations relatives à vos terminaux ou aux réseaux depuis lesquels vous accédez au Site, tels que notamment : adresses IP, données de connexion, types et versions de navigateurs internet utilisés, types et versions des plugins de votre navigateur, systèmes et plateformes d\'exploitation, données concernant votre parcours de navigation sur le Site, notamment votre parcours sur les différentes pages du Site, les contenus que vous consultez, les termes de recherches utilisés, la durée de consultation de certaines pages, les interactions avec la page ainsi que tout numéro de téléphone utilisé pour nous contacter.',
        'Parmi les technologies utilisées pour recueillir ces informations, nous avons notamment recours aux cookies, qui sont des petits fichiers de lettres et de chiffres téléchargés sur votre terminal lorsque vous accédez au Site.',
        '<span>Présentation des cookies utilisés</span>',
        'Ces cookies peuvent être de différentes natures :',
        'Les cookies de fonctionnalités et les cookies nécessaires au fonctionnement du Site',
        ': ils sont nécessaires au bon fonctionnement du Site ainsi que pour accéder à ses fonctionnalités destinées à assurer votre confort de navigation. Ils peuvent encore permettre l\'adaptation de l\'affichage du Site aux préférences de votre terminal et des logiciels de visualisation installés sur votre terminal.',
        'Les cookies analytiques',
        ': la finalité est de connaître la fréquentation, l\'utilisation et les performances du Site, et d\'en améliorer le fonctionnement et l\'ergonomie (par exemple, les pages le plus souvent consultées, les recherches des visiteurs, etc…).',
        'Nous utilisons Google Analytics et Google Search Console des services d\'analyse statistique de site Internet.',
        '<span>Gestion des cookies</span>',
        'Sauf décision de votre part de désactiver les cookies selon la procédure décrite ci-dessous, le fait de poursuivre la navigation sur le Site vaut consentement à l\'utilisation des cookies.',
        'Vous pouvez désactiver à tout moment et gratuitement l\'utilisation des cookies en sélectionnant les paramètres appropriés de votre navigateur. Les étapes à suivre étant différentes pour chaque navigateur, vous pouvez trouver des instructions dans le menu « Aide » de votre navigateur, dans la rubrique « Vos traces » du site',
        'www.cnil.fr',
        '(Commission Nationale de l\'Informatique & des Libertés).',
        'Cependant, nous vous informons qu\'une telle désactivation pourrait empêcher l\'utilisation de certaines fonctionnalités du Site.',
        '<span>Conservation des cookies</span>',
        'Les informations stockées au titre des cookies analytiques, ou tout autre élément utilisé pour vous identifier et permettant leur traçabilité ainsi que les données de fréquentation brutes associant un identifiant, ne seront pas conservées au-delà de treize mois.',
        'Les cookies de fonctionnalités ou de session disparaissent dès que vous quittez notre site.',
        'Vous pouvez paramétrer le blocage des cookies dans les préférences de votre navigateur',
        '* Internet Explorer : https://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-cookies',
        '* Safari : https://support.apple.com/fr-fr/ht1677',
        '* Google Chrome : https://support.google.com/chrome/answer/95647?hl=fr&hlrm=en&safe=on',
        '* Firefox : https://support.mozilla.org/fr/kb/activer-desactiver-cookies',
        '* Opera : https://help.opera.com/Windows/10.20/fr/cookies.html',
        '<span>E - Durée de conservation des données personnelles</span>',
        'Nous conservons ces données personnelles pour la durée strictement nécessaire à l\'accomplissement des Services et plus généralement des finalités précitées.',
        'Passé ce délai, nous archivons les données personnelles nécessaires à l\'exercice d\'un droit et à la preuve de ce droit, pour la durée des délais de prescription applicables ou en vertu des obligations légales auxquelles il est soumis.',
        '<span>F - Sécurité</span>',
        'Nous avons mis en place des mesures de sécurité physiques et logiques pour la protection des données personnelles.',
        '<span>G - Vos droits</span>',
        'Conformément aux articles 15 à 22 du Règlement Général sur la Protection des Données du 27 avril 2016, relatif à la protection des personnes physiques à l\'égard du traitement des données à caractère personnel et à la libre circulation de ces données (2016/679) (« RGPD »), toute personne physique concernée justifiant de son identité, bénéficie d\'un droit d\'accès, de rectification, d\'effacement, d\'opposition, à la portabilité des données personnelles la concernant et à la limitation des traitements ainsi qu\'au sort de ces mêmes données après la mort. Ces droits peuvent être exercés en s\'adressant à THE PERFECT MATCH, ALEXANDRA SANCHEZ-WATTELET - 24 Chemin des Chambres Neuves - 33290 LUDON-MEDOC ou contact@theperfectmatch.com.',
        'Toute personne, dont les données personnelles ont été collectées par nos services, dispose de la faculté de saisir la Commission nationale de l\'Informatique et des Libertés (dont les coordonnées figurent à l\'adresse https://www.cnil.fr/fr/vous-souhaitez-contacter-la-cnil) dans l\'hypothèse où nous n\'aurions pas fait suite à une demande dans le délai d\'un mois suivant cette demande. Au besoin, ce délai peut être prolongé de deux mois, compte tenu de la complexité et du nombre de demandes.',
        'De même, si vous vous êtes abonnés aux newsletters ou tout autre service et que vous ne souhaitez plus recevoir de communication de notre part ou que vos données soient supprimées des bases de données, veuillez envoyer un courrier électronique à l\'adresse :',
        'contact@theperfectmatch.com',
        '<span>H - Liens vers des sites internet tiers</span>',
        'Le Site peut contenir des liens vers des sites internet de tiers, qui sont régis par leurs propres politiques de confidentialité, conditions d\'utilisation et mesures de sécurité, lesquelles peuvent différer des nôtres.',
        'Nous ne pouvons être tenu responsable du contenu et des pratiques de ces sites internet. C\'est pourquoi il vous est recommandé de consulter leur politique de confidentialité avant de leur transmettre toute information ou donnée vous concernant.',
        '<span>I - Modification des termes de la Politique de confidentialité</span>',
        'Il est possible que nous soyons amenés à modifier les dispositions de la présente Politique de confidentialité en fonction des évolutions légales et réglementaires. Le cas échéant, les modifications apportées prendront effet à la date indiquée en haut des présentes. En continuant à utiliser le Site après cette date, vous acceptez les modifications effectuées.',
        'Nous vous encourageons à consulter la Politique de confidentialité chaque fois que vous utilisez le Site, afin de rester informé des pratiques mises en place en matière d\'information et des moyens que vous pouvez utiliser pour protéger votre vie privée.',
        '<span>J - Contact</span>',
        'Pour toute information relative à la présente Politique de confidentialité, vous pouvez nous contacter à l\'adresse suivante : contact@theperfectmatch.com',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cgu {
  background-color: $colorBeige;

  &--content {
    height: auto;
    position: relative;
    z-index: 3;

    h1 {
      text-align: left;
    }

    @media (min-width: 350px) {
      padding-top: 8em!important;
      padding-bottom: 4rem;
    }

    @media (min-width: 920px) {
      padding-top: 12em!important;
      padding-bottom: 6rem;
    }

    div {
      text-align: left;
    }
  }
}
</style>