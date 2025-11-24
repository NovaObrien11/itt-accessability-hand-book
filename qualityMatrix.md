# Accessibility Handbook Quality Matrix & Impact Analysis

## Executive Summary
The current "ITT Accessibility Handbook" provides a solid foundation of technical knowledge, structured effectively by role (Designer, Developer, QA). However, to achieve organization-wide impact, it must evolve from a reference document into a **living operational standard**. The current content is informative but lacks the "teeth" and integration required to enforce change across the software development lifecycle (SDLC).

## Current State Assessment

| Dimension | Rating | Observations |
|-----------|:------:|--------------|
| **Structure** | 🟢 Good | Role-based segmentation (Designer, Developer, QA) is excellent and intuitive. |
| **Content Depth** | 🟡 Mixed | Designer checklist is detailed. Developer checklist is high-level. `intro.md` is generic Docusaurus boilerplate. |
| **Actionability** | 🟡 Mixed | Good code examples for specific topics (e.g., Keyboard Nav), but lacks a unified "Golden Path" for new features. |
| **Integration** | 🔴 Poor | No mention of CI/CD pipelines, design system integration, or "Definition of Done". |
| **Policy** | 🔴 Poor | Lacks a company-specific mission statement, executive mandate, or compliance targets (e.g., "We target WCAG 2.2 AA"). |

## Strategic Recommendations for Org-Wide Impact

### 1. Cultural & Policy Foundation (High Impact, Low Effort)
*   **Replace the Generic Intro**: The `intro.md` is currently the default Docusaurus tutorial. Replace it with a **Manifesto**:
    *   *Why* we care (Legal, Ethical, Business).
    *   *What* standard we follow (e.g., WCAG 2.2 Level AA).
    *   *Who* is responsible (Everyone, not just QA).
*   **Executive Sponsorship**: Add a foreword from a CTO/VP Engineering to signal importance.

### 2. Workflow Integration (High Impact, High Effort)
*   **"Shift Left" in Design**:
    *   Mandate accessibility annotations in Figma/Sketch (link to the `designer/annotations` section).
    *   Require an "Accessibility Pass" before handoff to dev.
*   **CI/CD Gates**:
    *   Document how to run `axe-core` or `pa11y` in the build pipeline.
    *   **Recommendation**: Block merges on new accessibility violations.
*   **Definition of Done (DoD)**:
    *   Explicitly state: "A feature is not done until it passes the Automated & Manual A11y Checklist."

### 3. Developer Experience (DX) (Medium Impact, Medium Effort)
*   **Linter Config**: Provide a downloadable `.eslintrc` or shared npm package with `eslint-plugin-jsx-a11y` pre-configured.
*   **Component Library**: If the company has a Design System, link every checklist item to the corresponding accessible component.
    *   *Example*: "Don't build a modal; use `<CompanyModal>` which handles focus trapping for you."

### 4. Education & Support (Medium Impact, High Effort)
*   **Champions Program**: Create a section for "Accessibility Champions" — designated experts in each squad.
*   **Onboarding**: Add a "New Hire Quickstart" guide.

## Impact vs. Effort Matrix

| Initiative | Effort | Impact | Priority |
|:-----------|:------:|:------:|:--------:|
| **Custom Mission/Intro** | 🟢 Low | 🟡 Med | **Immediate** |
| **CI/CD Integration Guide** | 🔴 High | 🟢 High | **Long-term** |
| **Design System Mapping** | 🟡 Med | 🟢 High | **High** |
| **Linter Configuration** | 🟢 Low | 🟡 Med | **Quick Win** |
| **Champions Program** | 🔴 High | 🟡 Med | **Strategic** |

## Next Steps
1.  **Immediate**: Rewrite `intro.md` to establish the handbook's authority.
2.  **Short-term**: Flesh out the `developer/checklist.mdx` with concrete links to tooling (Linting, CI).
3.  **Mid-term**: Audit the `laws` section to ensure it aligns with the company's specific operating regions.
