<template lang="pug">
nav(class='navbar')
    router-link(to='/', class='navbar__link navbar__link--home')
        img(
            src='/img/icons/icon-192.png'
            alt='Polympics Logo'
            class='navbar__link__icon'
        )
        span(class='navbar__link__text') Polympics
    router-link(to='/accounts' class='navbar__link') Members
    router-link(to='/teams' class='navbar__link') Teams
    router-link(to='/about' class='navbar__link') About
</template>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.navbar
  display: flex
  justify-content: flex-end
  flex-wrap: wrap

.navbar__link
  margin: 2em
  color: $body-text
  text-decoration: none
  transition: color 0.5s
  text-transform: lowercase
  font-variant: small-caps
  font-weight: 900
  display: flex
  align-items: center

.navbar__link:hover
  color: $navbar-text-hover

.navbar__link--home
  text-transform: none
  font-variant: normal
  margin-right: auto
  font-weight: 800

.navbar__link__icon
  height: 2.5em
  margin-right: 0.5em

@media only screen and (max-width: 700px)
  .navbar__link
    margin: 1.5em

  .navbar__link--home
    margin-right: auto

@media only screen and (max-width: 470px)
    .navbar
        justify-content: center

    .navbar__link--home
        font-variant: small-caps
        font-weight: 900
        margin-right: 1.5em
        .navbar__link__text
            display: none

        &::after
            content: "home"

    .navbar__link__icon
        display: none

@media only screen and (max-width: 430px)
  .navbar__link
    margin: 1em

  .navbar__link--home
    margin-right: 1.5em
</style>
