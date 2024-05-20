import React from "react";

/* eslint-disable jsx-a11y/iframe-has-title, jsx-a11y/alt-text,  */
/* eslint-disable no-unused-vars */

import { useState } from "react";

import {
  AnimateSVG,
  Morph,
  InlineMath, DisplayMath,
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
    <Presentation bibUrl={null} compileHost={null} embed={false} preamble="" embedOptions={{ render: null, slideIndex: 0, stepIndex: 0 }}>
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

      <SectionSlide section="Introduction" />

      <Slide steps={[1, 2]}>
        {(step) =>
          <>
            <Show when={step >= 1}>
              <Portal zoomin>
                <div>Main Content - Part 1</div>
                <div>Detailed Explanation</div>
              </Portal>
            </Show>
            <Show when={step >= 2}>
              <Portal zoomin>
                <div>Detailed Explanation</div>
              </Portal>
            </Show>
          </>}
      </Slide>

      <Slide steps={[1, 2]}>
        {(step) =>(
          <>
            <AnimateSVG
              src={"./assets/example-image.svg"}
              step={step == 1 ? {rect1: {opacity: 1}, circle1: {opacity: 0}} : {circle1: {opacity: 1, seconds: 0.3}, rect1: {opacity: 0.3, seconds: 0.3}}
              }
              width="200px"
              height="200px"
              style={{ border: '1px solid black', margin: '20px auto' }}
              className="animated-svg"
            />
            <Morph>{step == 1 ? "TEST" : "NOTEST"}</Morph>
          </>
          )}
      </Slide>

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
                <InlineMath>T(n) = O(n^2)</InlineMath>
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
              <Box title="Example: Fibonacci Sequence">
                <p>The Fibonacci sequence is defined as:</p>
                {M`F(n) = F(n-1) + F(n-2)`}
                <p>with initial values:</p>
                {m`F(0) = 0, F(1) = 1`}
              </Box>
            </Show>
            <Show when={step >= 3}>
              <Cite id="cormen2009" />
            </Show>
          </>
        )}
      </Slide>

      <QuestionSlide title="Any Questions?">
        <Notes>Feel free to ask any questions you might have.</Notes>
      </QuestionSlide>

      <ConclusionSlide section="Conclusion">
        <Notes>Summarizing the key points covered in the presentation.</Notes>
      </ConclusionSlide>

      <BibliographySlide>
        <Notes>Here are the references used throughout this presentation.</Notes>
      </BibliographySlide>
    </Presentation>
  );
}

export default App;
