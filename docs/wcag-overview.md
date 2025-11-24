---
sidebar_position: 1
slug: /wcag-overview
description: Comprehensive overview of Web Content Accessibility Guidelines (WCAG) 2.2
---

# WCAG 2.2 Overview

The **Web Content Accessibility Guidelines (WCAG) 2.2** is the latest version of accessibility standards published by the World Wide Web Consortium (W3C) in 2024. WCAG has become the internationally recognized standard for web accessibility, with WCAG 2.0 being adopted as an ISO standard (ISO/IEC 40500:2012) in 2012.

WCAG is designed to be **technology-neutral**, ensuring the guidelines apply to all web technologies—both current and future—including HTML, PDF, mobile applications, video players, and emerging technologies.

## Why WCAG Matters

WCAG 2.2 Level AA is the **global standard** for web accessibility. It serves as the foundation for:

- **Legal compliance** in many countries (ADA in the US, EAA in Europe, AODA in Canada)
- **Procurement requirements** for government contracts
- **Industry best practices** for inclusive design
- **User experience** improvements for all users, not just those with disabilities

At In Time Tec, we target **WCAG 2.2 Level AA** as our standard for all digital products.

## Conformance Levels: A, AA, and AAA

WCAG organizes success criteria into three conformance levels:

- **Level A**: Basic accessibility requirements—the minimum standard
- **Level AA**: Enhanced accessibility requirements—the recommended standard
- **Level AAA**: Advanced accessibility requirements—the highest standard

### Why Level AA?

**Level AA** has become the industry standard for several reasons:

- **Legal compliance**: Most accessibility laws reference Level AA as the required standard
- **Practical balance**: Level AA provides meaningful accessibility improvements without being overly burdensome to implement
- **Broad coverage**: Level AA addresses the needs of most users with disabilities

While Level AAA criteria are valuable and necessary for some users, achieving full AAA conformance across an entire website is often impractical. However, teams should still consider Level AAA criteria where feasible, as they benefit users with specific needs.

### Our Standard

**ITT targets WCAG 2.2 Level AA** for all digital products. This means we must meet all Level A and Level AA success criteria.

## The 4 Main Principles: POUR

The main accessibility principles identified in WCAG form the acronym **POUR**:

### 1. Perceivable

**Information and user interface components must be presentable to users in ways they can perceive.**

Users must be able to perceive content through at least one of their senses. This includes:
- Text alternatives for images and non-text content
- Captions and transcripts for audio and video
- Sufficient color contrast for text and UI elements
- Content that can be presented in different formats (text, audio, visual)

### 2. Operable

**User interface components and navigation must be operable.**

All functionality must be accessible to users regardless of how they interact with the interface. This includes:
- Full keyboard accessibility (not just mouse)
- No seizure-inducing content (flashing, strobing)
- Adequate time limits with options to extend
- Clear navigation mechanisms and orientation cues

### 3. Understandable

**Information and the operation of user interface must be understandable.**

Content and interface behavior must be clear and predictable. This includes:
- Readable, plain language content
- Consistent navigation and interface patterns
- Clear error messages and correction guidance
- Predictable behavior when users interact with controls

### 4. Robust

**Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.**

Content must work with current and future assistive technologies. This includes:
- Valid, well-formed HTML markup
- Proper semantic HTML elements
- Correct use of ARIA when needed
- Compatibility with screen readers and other assistive tools

## The 13 Guidelines

There is a total of **13 guidelines** beneath the four main principles. Each guideline contains multiple success criteria that must be met for conformance.

### Perceivable

#### 1.1 Text Alternatives
Ensure all non-text content has text alternatives that can be converted into other formats (large print, braille, speech, symbols, or simplified language).

**Key Success Criteria:**
- 1.1.1 Non-text Content (Level A)

#### 1.2 Time-based Media
Provide alternatives for time-based media.

**Key Success Criteria:**
- 1.2.1 Audio-only and Video-only (Prerecorded) (Level A)
- 1.2.2 Captions (Prerecorded) (Level A)
- 1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)
- 1.2.4 Captions (Live) (Level AA)
- 1.2.5 Audio Description (Prerecorded) (Level AA)

#### 1.3 Adaptable
Create content that can be presented in different ways (for example simpler layout) without losing information or structure.

**Key Success Criteria:**
- 1.3.1 Info and Relationships (Level A)
- 1.3.2 Meaningful Sequence (Level A)
- 1.3.3 Sensory Characteristics (Level A)
- 1.3.4 Orientation (Level AA)
- 1.3.5 Identify Input Purpose (Level AA)

#### 1.4 Distinguishable
Ensure content is easy to see and hear by providing sufficient contrast between foreground and background elements.

**Key Success Criteria:**
- 1.4.1 Use of Color (Level A)
- 1.4.2 Audio Control (Level A)
- 1.4.3 Contrast (Minimum) (Level AA)
- 1.4.4 Resize Text (Level AA)
- 1.4.5 Images of Text (Level AA)
- 1.4.10 Reflow (Level AA)
- 1.4.11 Non-text Contrast (Level AA)
- 1.4.12 Text Spacing (Level AA)
- 1.4.13 Content on Hover or Focus (Level AA)

### Operable

#### 2.1 Keyboard Accessible
Make all functionality available from a keyboard.

**Key Success Criteria:**
- 2.1.1 Keyboard (Level A)
- 2.1.2 No Keyboard Trap (Level A)
- 2.1.4 Character Key Shortcuts (Level A)

#### 2.2 Enough Time
Provide users enough time to read and use content.

**Key Success Criteria:**
- 2.2.1 Timing Adjustable (Level A)
- 2.2.2 Pause, Stop, Hide (Level A)
- 2.2.3 No Timing (Level AAA)
- 2.2.4 Interruptions (Level AAA)
- 2.2.5 Re-authenticating (Level AAA)

#### 2.3 Seizures and Physical Reactions
Do not design content in a way that is known to cause seizures.

**Key Success Criteria:**
- 2.3.1 Three Flashes or Below Threshold (Level A)

#### 2.4 Navigable
Provide ways to help users navigate, find content, and determine where they are.

**Key Success Criteria:**
- 2.4.1 Bypass Blocks (Level A)
- 2.4.2 Page Titled (Level A)
- 2.4.3 Focus Order (Level A)
- 2.4.4 Link Purpose (In Context) (Level A)
- 2.4.5 Multiple Ways (Level AA)
- 2.4.6 Headings and Labels (Level AA)
- 2.4.7 Focus Visible (Level AA)
- 2.4.11 Focus Not Obscured (Minimum) (Level AA)
- 2.4.12 Focus Not Obscured (Enhanced) (Level AAA)
- 2.4.13 Focus Appearance (Level AAA)

#### 2.5 Input Modalities
Make it easier for users to operate functionality through various inputs beyond keyboard.

**Key Success Criteria:**
- 2.5.1 Pointer Gestures (Level A)
- 2.5.2 Pointer Cancellation (Level A)
- 2.5.3 Label in Name (Level A)
- 2.5.4 Motion Actuation (Level A)
- 2.5.5 Target Size (Level AAA)
- 2.5.6 Concurrent Input Mechanisms (Level AAA)

### Understandable

#### 3.1 Readable
Make text content readable and understandable.

**Key Success Criteria:**
- 3.1.1 Language of Page (Level A)
- 3.1.2 Language of Parts (Level AA)
- 3.1.3 Unusual Words (Level AAA)
- 3.1.4 Abbreviations (Level AAA)
- 3.1.5 Reading Level (Level AAA)
- 3.1.6 Pronunciation (Level AAA)

#### 3.2 Predictable
Make Web pages appear and operate in predictable ways.

**Key Success Criteria:**
- 3.2.1 On Focus (Level A)
- 3.2.2 On Input (Level A)
- 3.2.3 Consistent Navigation (Level AA)
- 3.2.4 Consistent Identification (Level AA)
- 3.2.5 Change on Request (Level AAA)

#### 3.3 Input Assistance
Help users avoid and correct mistakes.

**Key Success Criteria:**
- 3.3.1 Error Identification (Level A)
- 3.3.2 Labels or Instructions (Level A)
- 3.3.3 Error Suggestion (Level AA)
- 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)
- 3.3.5 Help (Level AAA)
- 3.3.6 Error Prevention (All) (Level AAA)

### Robust

#### 4.1 Compatible
Maximize compatibility with current and future user agents, including assistive technologies.

**Key Success Criteria:**
- 4.1.1 Parsing (Level A)
- 4.1.2 Name, Role, Value (Level A)
- 4.1.3 Status Messages (Level AA)

## How to Use This Handbook

This handbook is organized to help you implement WCAG 2.2 Level AA:

- **[Designer Checklist](/docs/designer-checklist)**: Design-time considerations for WCAG compliance
- **[Developer Checklist](/docs/developer-checklist)**: Implementation patterns and code examples
- **[QA/SDET Testing](/docs/qa/testing-tools)**: How to test for WCAG conformance
- **[Conditions & Disabilities](/docs/conditions/epilepsy)**: Specific guidance for epilepsy, dyslexia, and cognitive conditions
- **[Laws & Compliance](/docs/laws/play-it-safe)**: Legal requirements that reference WCAG

## Quick Reference

- [WCAG 2.2 Full Specification](https://www.w3.org/TR/WCAG22/)
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/)
- [How to Meet WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/)

## Related Standards

While WCAG is the primary standard, there are related guidelines:

- **[ATAG](/docs/accessibility-standards#atag)**: Authoring Tool Accessibility Guidelines (tools that create content)
  - See **[WCAG vs ATAG comparison](/docs/accessibility-standards#wcag-vs-atag-whats-the-difference)** to understand when each applies
- **[WAI-ARIA](/docs/accessibility-standards#wai-aria)**: Accessible Rich Internet Applications
- **[WCAG-EM](/docs/accessibility-standards#wcag-em)**: Website Accessibility Conformance Evaluation Methodology

