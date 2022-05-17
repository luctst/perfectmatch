<template>
  <header v-if="showHeader" class="header container-fluid">
    <section class="header--desktop">
      <nav class="header--desktop--nav">
        <ul class="header--desktop--nav--list">
          <li
          v-for="(item, i) in menuList"
          :key="i"
          :style="item.isBtn ? updateBackgroundBtn : ''"
          :class="[renderClassItemList(item)]">
            <div
            v-if="item.dropdown"
            @click="menuList[i].active = !menuList[i].active">
              <div class="header--desktop--nav--list--item--dropdown--actions">
                <span class="is__menu__link">{{ item.content }}</span>
                <div>
                  <dropdown-menu
                  :class="menuList[i].active && 'menu__dropdown__open'"></dropdown-menu>
                </div>
              </div>
              <div v-if="menuList[i].active" class="is__menu__dropdown__open container-fluid">
                <router-link
                v-for="(itemDp, index) in item.dropdown"
                :key="index"
                class="menu--dropdown--item"
                :to="itemDp.href">
                  <div
                  :style="`border: 1px solid ${itemDp.borderColor};`"
                  class="menu--dropdown--item--inner">
                    <div class="menu--dropdown--item--inner--icon is__container__img">
                      <component :is="itemDp.icon"></component>
                    </div>
                    <h3>
                      {{ itemDp.content }}
                    </h3>
                  </div>
                </router-link>
              </div>
            </div>
            <div
            v-else-if="item.isBtn">
              <nuxt-link
              :to="`/${item.href}`"
              class="is__menu__link">
                {{ item.content }}
              </nuxt-link>
            </div>
            <div
            v-else-if="item.isLogo">
              <nuxt-link to="/">
                <logo></logo>
              </nuxt-link>
            </div>
            <div
            v-else>
              <nuxt-link
              :to="`/${item.href}`"
              class="is__menu__link">{{ item.content }}</nuxt-link>
            </div>
          </li>
        </ul>
      </nav>
    </section>
    <section class="header--mobile">
      <div class="header--mobile--wrapperlogo">
        <logo></logo>
      </div>
      <div
      class="header--mobile--wrapperburger"
      @click="menuMobileOpen = !menuMobileOpen">
        <menu-burger></menu-burger>
      </div>
      <div
      v-if="menuMobileOpen"
      class="is__menu__dropdown__mobile container-fluid">
        <div class="is__menu__dropdown__mobile__header">
          <div
          class="is__container__img"
          @click="menuMobileOpen = !menuMobileOpen">
            <close></close>
          </div>
        </div>
        <nav class="is__menu__dropdown__mobile__nav">
          <ul class="is__menu__dropdown__mobile__nav__itemwrapper">
            <template v-for="(item, y) in menuList">
              <li
              v-if="!item.isLogo"
              :key="y"
              class="is__menu__dropdown__mobile__nav__itemwrapper__child">
                <nuxt-link
                @click.native="menuMobileOpen = false"
                v-if="!item.dropdown"
                :to="`/${item.href}`"
                class="is__menu__dropdown__mobile__nav__itemwrapper__child__link">
                  {{ item.content }}
                </nuxt-link>
                <div
                v-else
                class="is__menu__dropdown__mobile__nav__itemwrapper__child__dropdown"
                @click="menuList[y].active = !menuList[y].active">
                  <div class="is__menu__dropdown__mobile__nav__itemwrapper__child__dropdown__header">
                    <div>{{ item.content }}</div>
                    <div class="is__container__img">
                      <accordeon-plus v-if="!item.active"></accordeon-plus>
                      <accordeon-less v-else></accordeon-less>
                    </div>
                  </div>
                  <div
                  v-if="menuList[y].active"
                  class="is__menu__dropdown__mobile__nav__itemwrapper__child__dropdown__body">
                    <div
                    v-for="(innerItem, p) in item.dropdown"
                    :key="p">
                      <div
                      class="is__container__img">
                        <component :is="innerItem.icon"></component>
                      </div>
                      <nuxt-link
                      :to="innerItem.href"
                      class="is__h3"
                      @click.native="menuMobileOpen = !menuMobileOpen">
                        {{ innerItem.content }}
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </section>
  </header>
</template>

<script>
import Logo from '~/assets/img/logo.svg?inline';
import MenuBurger from '~/assets/img/menuburger.svg?inline';
import DropdownMenu from '~/assets/img/dropdownmenu.svg?inline';
import OffersFirst from '~/assets/img/offers-first.svg?inline';
import flower2 from '~/assets/img/flower-2.svg?inline';
import Flower3 from '~/assets/img/flower-3.svg?inline';
import Close from '~/assets/img/close.svg?inline';
import AccordeonPlus from '~/assets/img/accordeon-plus.svg?inline';
import AccordeonLess from '~/assets/img/accordeon-less.svg?inline';

export default {
  name: 'HeaderVue',
  components: {
    Logo,
    MenuBurger,
    DropdownMenu,
    OffersFirst,
    flower2,
    Flower3,
    Close,
    AccordeonPlus,
    AccordeonLess,
  },
  data() {
    return {
      showHeader: true,
      menuMobileOpen: false,
      menuList: [
        {
          content: 'A propos',
          href: 'about',
        },
        {
          content: 'Mariage',
          active: false,
          dropdown: [
            {
              content: 'Organisation Complète',
              icon: OffersFirst,
              href: '/wedding/complete',
              borderColor: '#FDEADD',
            },
            {
              content: 'Organisation Partielle',
              icon: flower2,
              href: '/wedding/partial',
              borderColor: '#E0F4EB',
            },
            {
              content: 'Coordination Jour J',
              icon: Flower3,
              href: '/wedding/dday',
              borderColor: '#F8ECFD',
            },
          ],
        },
        {
          content: 'Evenements',
          href: 'events',
        },
        {
          isLogo: true,
        },
        {
          content: 'Articles',
          href: 'articles',
        },
        {
          content: 'Portfolio',
          href: '',
        },
        {
          isBtn: true,
          content: 'Contactez-nous',
          href: 'contact',
        },
      ],
    };
  },
  computed: {
    updateBackgroundBtn() {
      let bgColor;

      switch (this.$route.name) {
        case 'Events':
          bgColor = '#FDEADD';
          break;
        case 'articles-id':
          bgColor = '#FDEADD';
          break;
        default:
          bgColor = 'transparent';
          break;
      }

      return `background-color:${bgColor};`;
    },
  },
  watch: {
    menuMobileOpen(newValue) {
      this.isBodyOverflowHidden(newValue);
    },
    $route() {
      this.isBodyOverflowHidden(false);
    }
  },
  created() {
    if (process.browser) {
      let lastScrollTop = 0;
  
      window.addEventListener('scroll', () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
  
        if (st > lastScrollTop) {
          this.showHeader = false;
          lastScrollTop = st <= 0 ? 0 : st;
          return false;
        }
  
        this.showHeader = true;
        lastScrollTop = st <= 0 ? 0 : st;
        return true;
      });
    }
  },
  methods: {
    isBodyOverflowHidden(isTrue) {
      const body = document.querySelector('body');
      const isOverflowHidden = 'is__overflow__hidden';

      if (!isTrue) {
        if (body.classList.contains(isOverflowHidden)) {
          body.classList.remove(isOverflowHidden);
          return true;
        }

        return true;
      }

      if (body.classList.contains(isOverflowHidden)) return true;
      body.classList.add(isOverflowHidden);

      return true;
    },
    renderClassItemList(itemData) {
      if (itemData.dropdown) {
        return 'header--desktop--nav--list--item header--desktop--nav--list--item--dropdown';
      }

      if (itemData.isBtn) {
        return 'header--desktop--nav--list--item header--desktop--nav--list--item--button';
      }

      if (itemData.isLogo) {
        return 'header--desktop--nav--list--item header--desktop--nav--list--item--logo';
      }

      return 'header--desktop--nav--list--item';
    },
  },
};
</script>

<style lang="scss" scoped>
.is__menu__dropdown__mobile {
  background-color: $colorWhite;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  &__header {
    display: flex;
    justify-content: flex-end;
    margin-top: 5rem;

    .is__container__img {
      max-width: 5rem;
      width: 1.5rem;
    }
  }

  &__nav {
    margin-top: 1rem;

    &__itemwrapper {
      padding: 0;
      list-style-type: none;

      &__child:first-child {
        padding-top: 0;
      }

      &__child {
        border-bottom: 1px solid $colorSubTitle;
        padding: 1.3rem 0;

        &__link,
        &__dropdown__header > div:first-child {
          color: $colorSubTitle;
          font-family: $mainTypo;
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 35px;
          text-decoration: none;
          text-transform: uppercase;
        }

        &__dropdown {
          &__header {
            display: flex;
            justify-content: space-between;

            .is__container__img {
              border:1px solid #FDEADD;
              background-color: #FDEADD;
              align-items: center;
              display: flex;
              justify-content: center;
              border-radius: 50%;
              height: 26px;
              width: 26px;

              svg {
                height: 10px;
                width: 10px;
              }
            }
          }

          &__body {
            display: flex;
            flex-direction: column;
            margin-top: 1.3rem;

            div {
              align-items: center;
              display: flex;

              .is__container__img {
                margin-right: 1rem;
                max-width: 2.5rem;
              }

              a {
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
}

.is__menu__dropdown__open {
  background-color: $colorWhite;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  z-index: -1;
  align-items: center;
  display: flex;

  .menu--dropdown--item {
    text-decoration: none;
    display: inline-block;

    &:nth-child(2) {
      margin: 0 16px;
    }

    &--inner {
      border-radius: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px 25px 15px 25px;

      &--icon {
        margin-right: 16px;
        width: 14%;
      }
    }
  }


  @media (min-width: 920px) {
    height: calc(30vh + 100px);
  }
}

.is__menu__link {
  color: $textColor;
  font-family: $mainTypo;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 13.8px;

  @media (min-width: 920px) {
    font-size: 12px;
  }

  @media (min-width: 950px) {
    font-size: 14px;
  }
}

.menu__dropdown__open {
  transform: rotate(180deg);
}

.header {
  box-sizing: border-box;
  height: 100px;
  position: fixed;
  width: 100%;
  max-width: 100%;
  z-index: 10;

  &--desktop {
    align-items: center;
    height: inherit;

    @media (min-width: 350px) {
      display: none;
    }
    @media (min-width: 920px) {
      display: flex;

      &--nav {
        width: 100%;

        &--list {
          align-items: center;
          display: flex;
          padding: 0;
          margin: 0;
          list-style-type: none;

          &--item {
            margin-right: 16px;
            &:last-child {
              margin-right: 0;
            }

            &--dropdown {
              &:hover {
                cursor: pointer;
              }

              &--actions {
                align-items: center;
                display: flex;

                div {
                  margin-left: 8px;
                  margin-bottom: 6px;
                }
              }
            }

            &--logo {
              display: flex;
              margin: 0 auto;
              justify-content: center;

              div {
                width: 80%;

                svg {
                  object-fit: cover;
                  max-width: 100%;
                  max-height: 100%;
                }
              }
            }

            &--button {
              border-radius: 80px;
              background-color: $colorWhite;
              padding: 10px 14px 9px;
            }
          }
        }
      }
    }

    @media (min-width: 950px) {
      &--nav {
        &--list {
          &--item {
            margin-right: 24px;

            &:last-child {
              margin-right: 0;
            }

            &--logo {
              margin: 0 auto;

              div {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }

  &--mobile {
    height: inherit;

    @media (min-width: 350px) {
      align-items: center;
      display: flex;
      justify-content: space-between;

      &--wrapperlogo,
      &--wrapperburger {
        svg {
          object-fit: cover;
          max-width: 100%;
          max-height: 100%;
        }
      }

      &--wrapperburger {
        svg {
          :hover {
            cursor: pointer;
          }
        }
      }
    }
    @media (min-width: 920px) {
      display: none;
    }
  }
}
</style>