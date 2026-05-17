# Interactive Rating Component

Frontend Mentor challenge – Interactive rating component UI built with HTML, CSS, JavaScript, and Bootstrap.

My solution to the [Interactive Rating Component Challenge](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI) on Frontend Mentor.

## Overview

A two-state rating interface where users select a score from 1 to 5 and submit feedback. After submission, the rating view is replaced with a thank-you card that displays the chosen rating. The layout is fully responsive across mobile, tablet, and desktop breakpoints.

A major focus of this project was **accessibility** and alignment with **WCAG** (Web Content Accessibility Guidelines) — semantic structure, keyboard support, screen reader announcements, and visible focus states were treated as core requirements, not add-ons.

## Features

- Select a rating from 1 to 5 using a native radio button group inside a `<fieldset>`
- Visual feedback for hover and selected states on rating buttons
- Submit button disabled until a rating is chosen
- Switch from the rating view to a thank-you view on submit
- Display the user's selected rating in the thank-you message
- Responsive card layout with breakpoint-specific sizing and spacing
- Overpass font (400 & 700) loaded from Google Fonts

## Accessibility & WCAG

This project was built with a heavy focus on accessible patterns and WCAG-aligned practices:

- **Semantic HTML** — `<main>`, `<article>`, `<fieldset>`, and `<legend>` for a meaningful document and form structure
- **Screen reader support** — visually hidden `<legend>` describing the rating group; decorative star icon marked with `aria-hidden`
- **Native form controls** — real `<input type="radio">` elements (visually hidden, not removed) so keyboard and assistive tech users get standard behavior
- **Proper labeling** — each radio wrapped in a `<label>` for a large click/tap target and correct name association
- **Live region** — thank-you view uses `aria-live="polite"` so the result is announced when the view changes
- **Focus management** — after submit, focus moves to the thank-you view so keyboard users are not left on hidden content
- **Visible focus** — `:focus-visible` outline on rating buttons for keyboard navigation (WCAG 2.4.7 Focus Visible)
- **Progressive enhancement** — submit stays disabled until a valid choice exists, preventing empty submissions

## Built With

- Semantic HTML5
- CSS3 (custom styles, flexbox, media queries)
- Bootstrap 5 — utility classes where helpful
- Vanilla JavaScript (no frameworks)
- Google Fonts — Overpass

## Project Structure

```
├── css/
│   ├── reset.css        # Box-sizing reset and base normalization
│   └── styles.css       # Component styles, states, and responsive
├── images/
│   ├── icon-star.svg
│   └── illustration-thank-you.svg
├── js/
│   └── rating.js        # Rating selection, submit logic, and view
├── index.html
```

## How It Works

On page load, the rating view is visible and the thank-you view is hidden. The user selects one of five radios inside the fieldset; a `change` listener on the fieldset stores the value, applies an `.active` class to the chosen label, and enables the submit button. On submit, the selected value is written into the thank-you message, the rating view is hidden, the thank-you view is shown, and focus is moved to the thank-you container so keyboard and screen reader users land on the new content immediately.

## Design

The designs for this project are provided by Frontend Mentor. Layout widths, colors, and typography are documented in `style-guide.md`. The implementation follows the design as closely as possible — including card layout, typography, spacing, button styles, hover/active states, and the orange accent palette — using custom CSS combined with selective Bootstrap utilities.

## Acknowledgements

- Challenge by [Frontend Mentor](https://www.frontendmentor.io)
