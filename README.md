# Presentation

> Made with immersion

The present repository contains an example of a presentation. The code has been spat out by ChatGPT, but it seems to work properly.

What is still missing:
 - Trying out the animations. There is a list of animations that will be played. Checking the code that prints out that info should provide clues for it
 - Trying out the latex formulas. I haven't checked this properly

## Immersion Presentation Example

This repository contains an example presentation built using the `immersion-presentation` library. The presentation covers advanced topics in computer science, including algorithm analysis, data structures, and dynamic programming.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Development](#development)
- [License](#license)

## Installation

First, clone the repository to your local machine. Then, install the necessary dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

## Usage

To start the presentation, run the following command:

```bash
npm start
# or
yarn start
```

This will start the development server and open the presentation in your default web browser. The presentation will automatically reload if you make changes to the code.

## Components

The presentation makes use of various components provided by the `immersion-presentation` library. Here is an overview of the components used:

- **TitleSlide**: Displays the title, subtitle, presenter names, and date.
- **TableOfContentsSlide**: Lists the sections of the presentation.
- **SectionSlide**: Introduces a new section of the presentation.
- **Slide**: A general-purpose slide that can contain multiple steps.
- **Figure**: Displays an image with a caption.
- **List**: Displays a list of items, which can be revealed step by step.
- **Item**: An item in a list.
- **Box**: A styled container for emphasizing content.
- **Cite**: Adds a citation.
- **QuestionSlide**: A slide for questions.
- **ConclusionSlide**: The conclusion slide.
- **BibliographySlide**: Lists the references used in the presentation.

### Example

Here is a snippet of how the components are used in the `Presentation.js` file:
