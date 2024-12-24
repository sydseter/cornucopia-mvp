import aboutPage from '$data/website/phrases/en/about.json';
import cardPage from '$data/website/phrases/en/cards.json';
import homePage from '$data/website/phrases/en/home.json';
import newsPage from '$data/website/phrases/en/news.json';
import playPage from '$data/website/phrases/en/play.json';
import printingPage from '$data/website/phrases/en/printing.json';
import swagsPage from '$data/website/phrases/en/swags.json';
import taxonomyPage from '$data/website/phrases/en/taxonomy.json';
import layoutPage from '$data/website/phrases/en/layout.json';

export default {
  layout: layoutPage.layout,
  about: aboutPage.about,
  cards: cardPage.cards,
  home: homePage.home,
  news: newsPage.news,
  play: playPage.play,
  printing: printingPage.printing,
  swags: swagsPage.swags,
  taxonomy: taxonomyPage.taxonomy,
  webshop: {title: "Webshop"}
};