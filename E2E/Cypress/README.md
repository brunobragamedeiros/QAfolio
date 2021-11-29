# QAfolio - E2E CYPRESS

I've been studying cypress for some time and I got to say: I really like it.
In this repo you will find tests performed on https://www.cypress.io/ using Cypress (not very original, I know... but it was an interesting experience).

I tested three pages: /home, /blog, and /pricing by creating UI tests (ex: checking button's title and links), E2E testing (ex: testing search feature) and automated accessibility testing.

To ensure code reuse, in some specific cases I created custom commands. For the accessibility testing, I used a plugin called Cypress Axe to identify critical accessibility problems (some critical problems were identified, such as missing alternative text in images and elements without labels).
