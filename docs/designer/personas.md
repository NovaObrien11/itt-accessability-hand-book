---
sidebar_position: 9
description: Creating accessibility personas to anticipate barriers for a broad spectrum of disabilities
---

# Accessibility Personas

Designing for accessibility means anticipating and resolving potential barriers for a **broad spectrum of disabilities**. Creating accessibility personas helps teams understand how different users experience content and identify barriers before they become problems.

## Why Accessibility Personas Matter

Accessibility personas help you:
- **Think beyond compliance** - Understand real user experiences, not just checkboxes
- **Anticipate barriers** - Identify problems before users encounter them
- **Make better decisions** - Design with empathy and understanding
- **Test effectively** - Know what to test and how
- **Advocate for users** - Communicate user needs to stakeholders

## The Broad Spectrum of Disabilities

When creating personas, consider these categories:

### Visual Disabilities
- Blindness
- Low vision
- Color blindness
- Light sensitivity

### Hearing Disabilities
- Deafness
- Hard of hearing
- Audio processing disorders

### Motor Disabilities
- Limited dexterity
- Tremors
- Paralysis
- Repetitive strain injury

### Cognitive Disabilities
- Dyslexia
- ADHD
- Autism
- Down syndrome
- Memory impairments
- Learning disabilities

### Speech Disabilities
- Speech impairments
- Stuttering
- Muteness

### Multiple Disabilities
- Users with combinations of the above

## Sample Accessibility Personas

### Persona 1: Maria - Screen Reader User

**Age:** 42  
**Disability:** Blind since birth  
**Technology:** JAWS screen reader, keyboard-only navigation  
**Experience Level:** Expert screen reader user

**How Maria Accesses Content:**
- Navigates by headings, landmarks, and links list
- Listens to content read aloud
- Uses keyboard shortcuts for efficiency
- Relies on semantic HTML and ARIA

**Potential Barriers:**
- Missing or poor alt text on images
- Non-descriptive link text ("click here")
- Missing headings or poor heading hierarchy
- Form fields without labels
- Dynamic content that isn't announced
- Complex interactions without keyboard support

**Design Considerations:**
- Clear heading structure
- Descriptive link text
- Proper form labeling
- ARIA live regions for dynamic content
- Keyboard-accessible interactions

### Persona 2: James - Low Vision User

**Age:** 58  
**Disability:** Macular degeneration, low vision  
**Technology:** Screen magnification (200-400% zoom), high contrast mode  
**Experience Level:** Moderate

**How James Accesses Content:**
- Zooms content to 200-400%
- Uses high contrast mode
- Relies on large, clear text
- Needs sufficient color contrast

**Potential Barriers:**
- Text that becomes unreadable when zoomed
- Horizontal scrolling at high zoom
- Low color contrast
- Small interactive targets
- Text in images that doesn't scale
- Fixed-width layouts

**Design Considerations:**
- Responsive design that works at high zoom
- Minimum 4.5:1 text contrast
- Large touch targets (24x24px minimum)
- Scalable text (not images of text)
- Flexible layouts

### Persona 3: Sarah - Keyboard-Only User

**Age:** 35  
**Disability:** Repetitive strain injury, limited mouse use  
**Technology:** Keyboard navigation, voice input software  
**Experience Level:** Advanced

**How Sarah Accesses Content:**
- Navigates entirely with keyboard (Tab, arrows, Enter, Space)
- Uses voice input for text entry
- Relies on visible focus indicators
- Needs logical tab order

**Potential Barriers:**
- Missing or invisible focus indicators
- Keyboard traps (can't escape modals)
- Complex interactions requiring mouse
- Non-standard keyboard shortcuts
- Focus order that doesn't match visual layout

**Design Considerations:**
- Visible, high-contrast focus indicators
- Logical tab order
- Keyboard-accessible all interactions
- Skip links for navigation
- Escape routes from modals

### Persona 4: Alex - Dyslexia

**Age:** 28  
**Disability:** Dyslexia  
**Technology:** Text-to-speech software, browser zoom  
**Experience Level:** Moderate

**How Alex Accesses Content:**
- Uses text-to-speech to read content
- Adjusts text spacing (line height, letter spacing)
- Zooms text for better readability
- Prefers simple, clear language

**Potential Barriers:**
- Complex sentence structures
- Low contrast text
- Justified text (harder to read)
- Italic text
- Dense paragraphs
- Technical jargon

**Design Considerations:**
- Plain language
- High contrast (4.5:1 minimum)
- Short paragraphs
- Left-aligned text
- Sans-serif fonts
- Adjustable text spacing

### Persona 5: David - ADHD

**Age:** 24  
**Disability:** ADHD  
**Technology:** Standard browser, sometimes uses focus mode extensions  
**Experience Level:** Moderate

**How David Accesses Content:**
- Easily distracted by animations and movement
- Needs clear focus indicators
- Benefits from consistent navigation
- Prefers simple, focused interfaces

**Potential Barriers:**
- Auto-playing videos or animations
- Flashing or strobing content
- Distracting sidebars or pop-ups
- Inconsistent navigation
- Complex, cluttered interfaces
- Time limits without extensions

**Design Considerations:**
- Pause/stop controls for animations
- Consistent navigation
- Clear focus indicators
- Simple, uncluttered layouts
- Options to extend time limits
- Respect `prefers-reduced-motion`

### Persona 6: Emma - Motor Impairment

**Age:** 45  
**Disability:** Limited hand dexterity due to arthritis  
**Technology:** Voice input, large trackpad, sometimes switch control  
**Experience Level:** Moderate

**How Emma Accesses Content:**
- Uses voice input for text entry
- Needs large click targets
- Prefers simple interactions
- May use assistive pointing devices

**Potential Barriers:**
- Small buttons or links
- Complex gestures (swipe, pinch)
- Precise clicking requirements
- Short time limits
- Drag-and-drop interactions

**Design Considerations:**
- Large touch targets (24x24px minimum)
- Simple click interactions
- Extended time limits
- Alternative input methods
- No complex gestures required

### Persona 7: Michael - Color Blindness

**Age:** 32  
**Disability:** Red-green color blindness (deuteranopia)  
**Technology:** Standard browser, sometimes color correction tools  
**Experience Level:** Advanced

**How Michael Accesses Content:**
- Sees colors differently (reds and greens appear similar)
- Relies on patterns, shapes, and text
- Uses color correction tools sometimes

**Potential Barriers:**
- Color-only indicators (red/green status)
- Low contrast between similar colors
- Charts/graphs using only color
- Color-coded instructions

**Design Considerations:**
- Never rely on color alone
- Use icons, patterns, or text with color
- High contrast between all elements
- Test in grayscale
- Accessible color palettes

### Persona 8: Lisa - Cognitive Disability (Autism)

**Age:** 19  
**Disability:** Autism spectrum disorder  
**Technology:** Standard browser, sometimes uses reading assistance tools  
**Experience Level:** Moderate

**How Lisa Accesses Content:**
- Prefers predictable, consistent interfaces
- Needs clear instructions
- Benefits from plain language
- Sensitive to sensory overload

**Potential Barriers:**
- Unexpected changes or animations
- Complex navigation
- Unclear instructions
- Sensory overload (too much information)
- Inconsistent patterns

**Design Considerations:**
- Consistent navigation and layout
- Plain language
- Clear instructions
- Predictable behavior
- Options to reduce motion
- Simple, focused interfaces

## Using Personas in Design

### 1. During Design Phase

**Ask for each persona:**
- Can Maria navigate this with a screen reader?
- Can James read this at 200% zoom?
- Can Sarah use this with only a keyboard?
- Can Alex understand this text?
- Will this distract David?
- Can Emma click this target?
- Can Michael distinguish these colors?
- Will Lisa understand this interface?

### 2. During Review

**Walk through designs with personas:**
- Create a checklist for each persona
- Identify potential barriers
- Prioritize fixes based on impact
- Document decisions

### 3. During Testing

**Test with persona scenarios:**
- Test with screen reader (Maria)
- Test at high zoom (James)
- Test keyboard-only (Sarah)
- Test with text-to-speech (Alex)
- Test with reduced motion (David)
- Test with large targets (Emma)
- Test in grayscale (Michael)
- Test for consistency (Lisa)

## Creating Your Own Personas

### Step 1: Research

- Review your user base
- Consult with disability organizations
- Read user research and surveys
- Talk to users with disabilities

### Step 2: Identify Key Disabilities

- Focus on disabilities most relevant to your product
- Consider your target audience
- Include a broad spectrum

### Step 3: Create Persona Profiles

For each persona, include:
- **Name and age**
- **Disability/disabilities**
- **Technology used**
- **Experience level**
- **How they access content**
- **Potential barriers**
- **Design considerations**

### Step 4: Use Personas Regularly

- Reference personas during design reviews
- Include in design documentation
- Use in testing scenarios
- Share with stakeholders

## Barrier Analysis Framework

For each design decision, analyze:

1. **Visual barriers**: Can users see it?
2. **Motor barriers**: Can users interact with it?
3. **Cognitive barriers**: Can users understand it?
4. **Hearing barriers**: Can users hear/access audio?
5. **Multiple barriers**: How do combinations affect users?

### Example Analysis

**Feature:** Modal dialog with form

**Maria (Screen Reader):**
- ✅ Modal has proper ARIA role
- ✅ Focus trapped in modal
- ✅ Close button has accessible label
- ❌ Form fields missing labels

**James (Low Vision):**
- ✅ Modal works at 200% zoom
- ✅ High contrast text
- ❌ Close button too small (16px)

**Sarah (Keyboard-Only):**
- ✅ Keyboard accessible
- ✅ Focus visible
- ✅ Escape key closes modal
- ❌ Tab order illogical

**Alex (Dyslexia):**
- ✅ Plain language instructions
- ✅ High contrast
- ❌ Dense paragraph text

## Checklist

- [ ] Personas created for broad spectrum of disabilities
- [ ] Each persona includes how they access content
- [ ] Potential barriers identified for each persona
- [ ] Design decisions analyzed against personas
- [ ] Testing scenarios created for each persona
- [ ] Personas referenced in design reviews
- [ ] Barriers documented and prioritized
- [ ] Solutions implemented for identified barriers

## Resources

- [W3C: Involving Users in Web Projects](https://www.w3.org/WAI/test-evaluate/involving-users/)
- [WebAIM: Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey9/)
- [Microsoft: Inclusive Design](https://www.microsoft.com/design/inclusive/)
- [A11y Project: Personas](https://www.a11yproject.com/personas/)
- [Deque: Accessibility Personas](https://www.deque.com/blog/personas-for-accessibility/)

