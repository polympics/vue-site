<template lang="pug">
main.main
    section.page_intro
        h1.page_intro__header About Polympics
        p.page_intro__slogan A worldwide event to bring the Polytopia community together for a summer of fun.
    img.page_image(src='/img/logo.png', alt='Polympics logo')
    section.page_content
        h3.page_content__header Most cats have
        p.page_content__p five claws on their front paws, and four on their rear paws. The dewclaw is proximal to the other claws. More proximally is a protrusion which appears to be a sixth "finger". This special feature of the front paws, on the inside of the wrists has no function in normal walking, but is thought to be an antiskidding device used while jumping. Some cat breeds are prone to having extra digits (“polydactyly”).
    section.page_content
        h3.page_content__header The domestic cat's hearing
        p.page_content__p is most acute in the range of 500 Hz to 32 kHz.
        p.page_content__p Its hearing sensitivity is enhanced by its large movable outer ears, the pinnae, which amplify sounds and help detect the location of a noise. It can detect ultrasound, which enables it to detect ultrasonic calls made by rodent prey.
    section.page_content
        h3.page_content__header To aid with navigation and sensation,
        p.page_content__p cats have dozens of movable whiskers (vibrissae) over their body, especially their faces. These provide information on the width of gaps and on the location of objects in the dark, both by touching objects directly and by sensing air currents; they also trigger protective blink reflexes to protect the eyes from damage.:47
    section.page_content
        h3.page_content__header Cats conserve energy
        p.page_content__p by sleeping more than most animals, especially as they grow older. The daily duration of sleep varies, usually between 12 and 16 hours, with 13 and 14 being the average. Some cats can sleep as much as 20 hours. The term "cat nap" for a short rest refers to the cat's tendency to fall asleep (lightly) for a brief period. While asleep, cats experience short periods of rapid eye movement sleep often accompanied by muscle twitches, which suggests they are dreaming.
    section.page_content
        h3.page_content__header Purring may have developed
        p.page_content__p as an evolutionary advantage as a signalling mechanism of reassurance between mother cats and nursing kittens. Post-nursing cats often purr as a sign of contentment: when being petted, becoming relaxed.
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";

@Component
export default class About extends BaseView {}
</script>
