---
sidebar_position: 3
description: WCAG 2.2 AA requirements for users with cognitive disabilities including Down syndrome, autism, and ADHD
---

# Cognitive Disabilities

Cognitive disabilities include conditions like Down syndrome, autism, ADHD, and other intellectual or developmental disabilities. These conditions affect how people process information, focus attention, and navigate interfaces. WCAG 2.2 AA provides specific requirements to make content more accessible for users with cognitive disabilities.

## Why This Matters

People with cognitive disabilities may experience:
- Difficulty processing complex information
- Challenges with memory and recall
- Attention and focus difficulties
- Problems with executive function (planning, organizing)
- Sensory processing differences
- Difficulty with abstract concepts

WCAG 2.2 AA criteria address these challenges through clear structure, consistent navigation, error handling, and timing controls.

## WCAG 2.2 AA Requirements

### 2.2.1 Timing Adjustable (Level A)

**Requirement:** Users must be able to turn off, adjust, or extend time limits, except for real-time events or when time limits are essential.

**Why it helps:** People with cognitive disabilities may need more time to read, understand, and complete tasks.

**Implementation:**
- Provide options to extend or disable time limits
- Warn users before time expires
- Allow at least 20 seconds to extend time limits
- Exception: Real-time events (auctions, ticket sales) where timing is essential

:::danger Violation Example
```html
<form onsubmit="setTimeout(() => form.reset(), 30000)">
  <p>You have 30 seconds to complete this form.</p>
</form>
```
No way to extend or disable the time limit.
:::

:::tip Compliant Example
```html
<form>
  <p>Time remaining: <span id="timer">30</span> seconds</p>
  <button type="button" onclick="extendTime()">Extend time by 1 minute</button>
</form>
```
Users can extend the time limit.
:::

### 2.2.2 Pause, Stop, Hide (Level A)

**Requirement:** Users must be able to pause, stop, or hide moving, blinking, scrolling, or auto-updating content.

**Why it helps:** Distracting content can make it difficult for users with ADHD or autism to focus.

**Implementation:**
- Provide pause/play controls for carousels
- Allow users to stop auto-updating content
- Provide option to hide animated content
- Respect `prefers-reduced-motion` media query

### 2.4.3 Focus Order (Level A)

**Requirement:** When navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

**Why it helps:** Logical focus order helps users with cognitive disabilities understand and navigate interfaces.

**Implementation:**
- Tab order should follow visual layout
- Avoid positive `tabindex` values
- Ensure focus moves logically through forms

### 2.4.7 Focus Visible (Level AA)

**Requirement:** Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

**Why it helps:** Clear focus indicators help users with ADHD or cognitive disabilities track their position.

**Implementation:**
- Never remove focus outline without providing alternative
- Ensure focus indicator has 3:1 contrast ratio
- Make focus indicator at least 2px thick

### 3.2.3 Consistent Navigation (Level AA)

**Requirement:** Navigation mechanisms that are repeated on multiple pages appear in the same relative order each time they are presented.

**Why it helps:** Consistency reduces cognitive load and helps users with memory difficulties.

**Implementation:**
- Keep navigation in same location across pages
- Maintain same order of navigation items
- Use consistent labels and icons

### 3.2.4 Consistent Identification (Level AA)

**Requirement:** Components with the same functionality are identified consistently.

**Why it helps:** Consistent identification helps users with cognitive disabilities recognize and use interface elements.

**Implementation:**
- Use same labels for same functions
- Use consistent icons and symbols
- Maintain consistent button styles and locations

### 3.3.1 Error Identification (Level A)

**Requirement:** If an input error is automatically detected, the error is identified and described to the user in text.

**Why it helps:** Clear error messages help users with cognitive disabilities understand and fix mistakes.

**Implementation:**
- Display errors in text (not just color or icons)
- Identify which field has the error
- Describe the error clearly

### 3.3.2 Labels or Instructions (Level A)

**Requirement:** Labels or instructions are provided when content requires user input.

**Why it helps:** Clear labels and instructions reduce confusion for users with cognitive disabilities.

**Implementation:**
- Label all form fields
- Provide instructions for complex inputs
- Use placeholder text as supplement, not replacement for labels

### 3.3.3 Error Suggestion (Level AA)

**Requirement:** If an input error is detected and suggestions for correction are known, the suggestions are provided to the user.

**Why it helps:** Specific suggestions help users with cognitive disabilities correct errors more easily.

**Implementation:**
- Provide specific correction suggestions
- Show examples of correct format
- Offer auto-correction when appropriate

### 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)

**Requirement:** For legal commitments, financial transactions, or data modification, at least one of the following is true:
- Reversible: Submissions are reversible
- Checked: Data is checked for errors and user can correct
- Confirmed: User can review, confirm, and correct before final submission

**Why it helps:** Prevents costly mistakes for users with cognitive disabilities.

**Implementation:**
- Provide confirmation step for important actions
- Allow users to review before submitting
- Enable undo/cancel functionality

## Design Guidelines

### Content Structure

- **Clear headings:** Use descriptive headings that summarize content
- **Short paragraphs:** Break up long blocks of text
- **Bullet points:** Use lists for key information
- **Plain language:** Avoid jargon and complex sentences
- **Visual hierarchy:** Use size, color, and spacing to show importance

### Navigation

- **Consistent placement:** Keep navigation in same location
- **Clear labels:** Use descriptive link text
- **Breadcrumbs:** Show users where they are
- **Skip links:** Allow users to skip repetitive content

### Forms

- **Clear labels:** Label all form fields
- **Instructions:** Provide examples and format hints
- **Error messages:** Show errors clearly with suggestions
- **Progress indicators:** Show progress in multi-step forms
- **Confirmation:** Confirm important actions

### Visual Design

- **Consistent styling:** Use same styles for same functions
- **Clear focus indicators:** Make focus visible and obvious
- **Adequate spacing:** Provide space between interactive elements
- **Reduce distractions:** Allow users to hide or pause animations

## Implementation Checklist

- [ ] Time limits can be extended or disabled (except when essential)
- [ ] Moving content can be paused, stopped, or hidden
- [ ] Focus order is logical and follows visual layout
- [ ] Focus indicators are visible with 3:1 contrast
- [ ] Navigation is consistent across pages
- [ ] Components with same function are identified consistently
- [ ] Form errors are identified in text
- [ ] All form fields have clear labels
- [ ] Error suggestions are provided when possible
- [ ] Important actions have confirmation steps
- [ ] Content uses plain language
- [ ] Instructions are clear and concise

## Code Example: Accessible Form with Error Handling

```html
<form>
  <div class="form-group">
    <label for="email">Email Address</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      aria-describedby="email-error email-help"
      aria-invalid="false"
      required
    >
    <div id="email-help" class="help-text">
      Enter your email address (e.g., name@example.com)
    </div>
    <div id="email-error" class="error-message" role="alert" aria-live="polite">
    </div>
  </div>

  <button type="submit">Submit</button>
  <button type="button" onclick="confirmSubmission()">Review before submitting</button>
</form>

<script>
function validateEmail() {
  const email = document.getElementById('email');
  const errorDiv = document.getElementById('email-error');
  
  if (!email.validity.valid) {
    email.setAttribute('aria-invalid', 'true');
    errorDiv.textContent = 'Please enter a valid email address (e.g., name@example.com)';
  } else {
    email.setAttribute('aria-invalid', 'false');
    errorDiv.textContent = '';
  }
}
</script>
```

## Code Example: Pause/Stop Controls

```html
<div class="carousel" role="region" aria-label="Featured content">
  <div class="carousel-controls">
    <button 
      type="button" 
      aria-label="Pause carousel"
      onclick="pauseCarousel()"
    >
      Pause
    </button>
    <button 
      type="button" 
      aria-label="Stop carousel"
      onclick="stopCarousel()"
    >
      Stop
    </button>
  </div>
  <div class="carousel-content" aria-live="off">
  </div>
</div>
```

## Testing

### Manual Testing

1. **Time limits:** Test ability to extend or disable time limits
2. **Focus order:** Tab through interface and verify logical order
3. **Error handling:** Submit invalid forms and check error messages
4. **Consistency:** Navigate between pages and verify consistent navigation
5. **Plain language:** Review content for clarity and simplicity

### Automated Testing

- **axe-core:** Detects missing labels, focus issues, and ARIA problems
- **WAVE:** Identifies form label issues and structure problems
- **Lighthouse:** Includes accessibility audit with cognitive accessibility checks

## Related WCAG Criteria

- **2.2.3 No Timing (Level AAA):** No time limits at all
- **2.2.4 Interruptions (Level AAA):** Users can postpone interruptions
- **2.2.5 Re-authenticating (Level AAA):** Extended session timeouts
- **3.1.5 Reading Level (Level AAA):** Content at lower secondary education level
- **3.3.5 Help (Level AAA):** Context-sensitive help available

## Resources

- [WCAG 2.2 - Cognitive Accessibility](https://www.w3.org/WAI/cognitive/)
- [W3C: Cognitive Accessibility at W3C](https://www.w3.org/WAI/cognitive/)
- [WebAIM: Cognitive Disabilities](https://webaim.org/articles/cognitive/)
- [Inclusive Design: Cognitive](https://www.inclusivedesigntoolkit.com/cognitive/cognitive.html)
- [A11y Project: Cognitive](https://www.a11yproject.com/posts/understanding-cognitive-accessibility/)

