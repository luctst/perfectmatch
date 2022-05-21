<template>
  <section class="legal">
    <header-vue></header-vue>
    <main class="container legal--content">
      <h1><span>Mentions légales</span></h1>
      <div
      v-for="(cc, i) in content"
      :key="i"
      class="subtitle"
      v-html="cc"></div>
    </main>
    <footer-vue></footer-vue>
  </section>
</template>

<script>
export default {
  name: 'Legal',
  data() {
    return {
      content: [
        'Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l\'économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs du site les présentes mentions légales. Le site est accessible à l\'adresse suivante : https://theperfectmatch.events L\'accès et l\'utilisation du Site sont soumis aux présentes "Mentions légales" détaillées ci-après ainsi qu\'aux lois et/ou règlements applicables. La connexion, l\'utilisation et l\'accès à ce Site impliquent l\'acceptation intégrale et sans réserve de l\'internaute de toutes les dispositions des présentes Mentions Légales.',
        '<span>ARTICLE 1 - INFORMATIONS LÉGALES</span>',
        'En vertu de l\'Article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique, il est précisé dans cet article l\'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.',
        '<span>Directeur de publication</span>',
        'Nom ou Raison sociale : SANCHEZ-WATTELET Alexandra',
        'Adresse : 24 Chemin des Chambres Neuves 33290 Ludon-Médoc',
        'Adresse électronique : contact@theperfectmatch.com',
        'N° SIRET de l\'établissement : XX.XX.XX',
        '<span>Editeur du site</span>',
        'Nom ou Raison sociale : SANCHEZ-WATTELET Alexandra',
        'Adresse : 24 Chemin des Chambres Neuves 33290 Ludon-Médoc',
        'Adresse électronique : contact@theperfectmatch.com',
        'N° SIRET de l\'établissement :',
        '<span>Hébergeur du site</span>',
        'Le site est hébergé par : OVH',
        'https://www.ovhcloud.com/fr',
        'SAS OVH : 2 rue Kellermann 59100 Roubaix',
        '<span>Utilisateurs</span>',
        'Sont considérés comme utilisateurs tous les internautes qui naviguent, lisent, visionnent et utilisent le site.',
        '<span>ARTICLE 2 - ACCESSIBILITÉ</span>',
        'Le Site est par principe accessible aux Utilisateurs 24/24h et 7/7j, sauf interruption, programmée ou non, pour des besoins de maintenance ou en cas de force majeure.',
        'En cas d\'impossibilité d\'accès au Site, celui-ci s\'engage à faire son maximum afin d\'en rétablir l\'accès. Le Site ne saurait être tenu pour responsable de tout dommage, quelle qu\'en soit la nature, résultant de son indisponibilité.',
        '<span>ARTICLE 3 - LOI APPLICABLE ET JURIDICTION</span>',
        'Les présentes Mentions Légales sont régies par la loi française. En cas de différend et à défaut d\'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.',
        '<span>ARTICLE 4 - CONTACT</span>',
        'Pour tout signalement de contenus ou d\'activités illicites, l\'Utilisateur peut contacter l\'Éditeur à l\'adresse suivante : contact@theperfectmatch.com, ou par courrier recommandé avec accusé de réception adressé à l\'Éditeur aux coordonnées précisées dans les présentes mentions légales.',
        '<span>ARTICLE 5 - PROTECTION DES DROITS DE PROPRIÉTÉ INTELLECTUELLE</span>',
        'Le Site Web et chacun des éléments qui le compose, et notamment les textes, articles, lettres d\'informations, communiqués, présentations, brochures, illustrations, photographies, programmes informatiques, animations, etc., sont notre propriété intellectuelle exclusive à l\'exception des marques de tiers qui pourraient être citées.',
        'L\'Utilisateur n\'est pas autorisé à reproduire, représenter, modifier, traduire et/ou adapter, partiellement ou totalement, à titre onéreux ou gratuit, le Site Web et chacun des éléments qui le compose, ni reproduire ou représenter de telles traductions, adaptations et modifications, partiellement ou totalement, à titre onéreux ou gratuit, sans notre accord préalable écrit.',
        'Toute courte citation devra faire apparaître le nom de son auteur et, le cas échéant, la date et le numéro de publication du document cité.',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.legal {
  background-color: $colorBeige;

  &--content {
    height: auto;
    position: relative;
    z-index: 3;

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