import React from "react";

/* eslint-disable jsx-a11y/iframe-has-title, jsx-a11y/alt-text,  */
/* eslint-disable no-unused-vars */

import { useState } from "react";

import {
  AnimateSVG,
  Morph,
  m,
  M,
  Show,
  Notes,
  Portal,
  timeline,
  range,
  themes,
} from "immersion-presentation";

import "immersion-presentation/dist/index.css";
import step from "immersion-presentation/dist/step.macro.js";

const {
  Presentation,
  Slide,
  BibliographySlide,
  TitleSlide,
  TableOfContentsSlide,
  SectionSlide,
  QuestionSlide,
  ConclusionSlide,
  Figure,
  List,
  Item,
  Cite,
  Box,
  Qed,
} = themes.modern;

function App() {
  return (
    <Presentation>
      <TitleSlide 
        title="Advanced Topics in Computer Science" 
        subtitle="A deep dive into algorithms and data structures" 
        names={["Dr. Jane Doe"]} 
        names2={["Assistant: John Smith"]} 
        date="May 19, 2024"
      >
        <Notes>Welcome to this advanced presentation on computer science topics.</Notes>
      </TitleSlide>
      
      <TableOfContentsSlide header="Table of Contents">
        <Notes>Here is an overview of the sections we will cover today.</Notes>
      </TableOfContentsSlide>
      
      <SectionSlide section="Introduction">
        <Notes>This section provides an introduction to the core concepts.</Notes>
      </SectionSlide>
      
      <Slide steps={[1, 2, 3]}>
        {(step) => (
          <>
            <Show when={step >= 1}>
              <h2>Algorithm Analysis</h2>
              <p>Understanding the efficiency of algorithms.</p>
            </Show>
            <Show when={step >= 2}>
              <div>
                <p>Consider the following formula for time complexity:</p>
                <p>{`$$ T(n) = O(n^2) $$`}</p>
              </div>
            </Show>
            <Show when={step >= 3}>
              <Cite id="knuth1997" />
            </Show>
          </>
        )}
      </Slide>
      
      <SectionSlide section="Data Structures">
        <Notes>In this section, we'll explore various data structures.</Notes>
      </SectionSlide>
      
      <Slide steps={[1, 2]}>
        {(step) => (
          <>
            <Show when={step >= 1}>
              <h2>Trees and Graphs</h2>
              <p>Trees and graphs are essential for organizing data.</p>
            </Show>
            <Show when={step >= 2}>
              <Figure caption="An example of a binary tree">
                <img src="tree-diagram.png" alt="Binary Tree" />
              </Figure>
            </Show>
          </>
        )}
      </Slide>
      
      <Slide steps={[1, 2, 3]}>
        {(step) => (
          <>
            <Show when={step >= 1}>
              <h2>Linked Lists</h2>
              <p>Linked lists allow for efficient insertions and deletions.</p>
            </Show>
            <Show when={step >= 2}>
              <List step={step}>
                <Item name="Singly Linked List">Each node points to the next node.</Item>
                <Item name="Doubly Linked List">Each node points to both the next and the previous node.</Item>
                <Item name="Circular Linked List">The last node points back to the first node.</Item>
              </List>
            </Show>
          </>
        )}
      </Slide>
      
      <SectionSlide section="Advanced Topics">
        <Notes>We now move on to more advanced topics in algorithms and data structures.</Notes>
      </SectionSlide>
      
      <Slide steps={[1, 2]}>
        {(step) => (
          <>
            <Show when={step >= 1}>
              <h2>Dynamic Programming</h2>
              <p>Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems.</p>
            </Show>
            <Show when={step >= 2}>
              <Box title="Example: Fibonacci Sequence" className="p-4">
                <p>{`$$ F(n) = F(n-1) + F(n-2) $$`}</p>
                <p>Using memoization to store intermediate results.</p>
              </Box>
            </Show>
          </>
        )}
      </Slide>
      
      <ConclusionSlide section="Conclusion">
        <Notes>This is the conclusion of our presentation. Thank you for your attention!</Notes>
      </ConclusionSlide>
      
      <QuestionSlide title="Any Questions?">
        <Notes>Feel free to ask any questions about the topics covered.</Notes>
      </QuestionSlide>
      
      <BibliographySlide />
    </Presentation>
  );
}

export default App;
