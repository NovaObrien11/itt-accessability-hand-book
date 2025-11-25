---
sidebar_position: 5
description: Captions, audio descriptions, and transcripts for video and audio content
---

# Captions, Audio Descriptions & Transcripts

Video and audio content must be accessible to users who are deaf, hard of hearing, or blind. WCAG 2.2 Level AA requires captions, audio descriptions, and transcripts for time-based media.

## Making Videos Accessible: The Complete Solution

The most common and effective way to make videos accessible for people who are deaf, blind, or deaf-blind is to provide **all three accessibility features**:

1. **Captions** - For users who are deaf or hard of hearing
   - Text versions of spoken dialogue and important sounds
   - Synchronized with the video

2. **Audio Descriptions** - For users who are blind or have low vision
   - Spoken narrations describing important visual information
   - Describes actions, scenes, and visual elements not conveyed in dialogue

3. **Transcripts** - For users who are deaf-blind or prefer text
   - Complete text version of all audio and visual content
   - Includes dialogue, sound effects, and visual descriptions
   - Can be read by screen readers or braille displays

**For deaf-blind users specifically:** Transcripts are essential, as they can be accessed through screen readers with braille displays or text-to-speech, providing access to both the audio content (via captions in the transcript) and visual content (via audio descriptions in the transcript).

## Quick Answer: Making Videos Accessible

**For users who are deaf:** Provide **captions** (text of spoken dialogue and sounds)

**For users who are blind:** Provide **audio descriptions** (spoken descriptions of visual content)

**For users who are deaf-blind:** Provide **enhanced transcripts** (complete text including dialogue, sounds, and visual descriptions that can be read by screen readers/braille displays)

**Best practice:** Provide all three (captions, audio descriptions, and transcripts) to ensure maximum accessibility.

## WCAG Requirements

- **1.2.2 Captions (Prerecorded) (Level A)**: Captions provided for all prerecorded video content
- **1.2.4 Captions (Live) (Level AA)**: Captions provided for live video content
- **1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)**: Audio description or alternative provided
- **1.2.5 Audio Description (Prerecorded) (Level AA)**: Audio description provided for prerecorded video

## Captions

### What Are Captions?

Captions are text versions of spoken dialogue and important non-verbal audio cues (sound effects, music, speaker identification) synchronized with video content.

### Types of Captions

**Closed Captions:**
- Can be turned on/off by the user
- Standard format (SRT, VTT, WebVTT)
- Required for WCAG compliance

**Open Captions:**
- Always visible, cannot be turned off
- Burned into the video
- Less flexible but always available

### What Captions Must Include

1. **All spoken dialogue** - Every word that's spoken
2. **Speaker identification** - Who is speaking (when not obvious)
3. **Sound effects** - Important non-speech audio (e.g., [door slams], [phone rings])
4. **Music description** - When music is important (e.g., [upbeat music], [ominous music])
5. **Tone and emotion** - When relevant (e.g., [sarcastically], [whispering])

### Enhanced Captions

Enhanced captions go beyond basic captions to include:
- **Speaker identification** for all speakers
- **Sound descriptions** in brackets
- **Music descriptions** when relevant
- **Tone indicators** when important
- **Background information** when needed

**Example of Enhanced Captions:**
```
00:00:05 --> 00:00:08
[Upbeat music playing]

00:00:09 --> 00:00:12
JOHN: Welcome to our tutorial.

00:00:13 --> 00:00:16
[Clicking sound]

00:00:17 --> 00:00:20
JOHN: As you can see here...
```

### Caption Best Practices

- **Synchronization**: Captions must match the timing of speech
- **Readability**: 2-3 lines maximum, readable font size
- **Positioning**: Don't obscure important visual content
- **Accuracy**: Word-for-word accuracy for dialogue
- **Punctuation**: Proper punctuation for clarity
- **Line breaks**: Break at natural speech pauses

## Audio Descriptions

### What Are Audio Descriptions?

Audio descriptions (also called "video descriptions" or "descriptive narration") are spoken narrations that describe important visual information in videos that isn't conveyed through dialogue or sound.

### When Are Audio Descriptions Needed?

Audio descriptions are needed when:
- Visual information is important to understanding the content
- Actions, gestures, or visual elements aren't explained in dialogue
- Text appears on screen that isn't read aloud
- Scene changes or settings are important
- Visual gags or humor rely on visual elements

### What Audio Descriptions Include

1. **Visual actions** - "John opens the door and walks outside"
2. **Scene descriptions** - "The scene changes to a busy city street"
3. **On-screen text** - "The screen shows 'Error 404'"
4. **Facial expressions** - "Sarah looks confused"
5. **Important visual details** - "A red warning light flashes"

### Audio Description Best Practices

- **Timing**: Fit descriptions into natural pauses in dialogue
- **Clarity**: Use clear, descriptive language
- **Relevance**: Only describe what's important to understanding
- **Neutral tone**: Don't interpret, just describe
- **Synchronization**: Match the timing of visual events

### Example

**Video Scene:** Person points to a chart on screen, then clicks a button.

**Audio Description:** "The presenter points to the sales chart, then clicks the 'Generate Report' button."

## Transcripts

### What Are Transcripts?

Transcripts are text versions of audio or video content. They can be:
- **Spoken transcripts**: Read aloud by screen readers
- **Written transcripts**: Text documents users can read

### Types of Transcripts

**Simple Transcript:**
- Just the spoken words
- Basic text document
- Good for audio-only content

**Enhanced Transcript:**
- Includes speaker identification
- Includes sound effects and music descriptions
- Includes visual descriptions
- More comprehensive

**Spoken Transcript:**
- Audio version of the transcript
- Read by text-to-speech or human narrator
- Useful for users who prefer audio

### When Transcripts Are Required

**For Audio-Only Content:**
- Podcasts, audio interviews, audio books
- Must provide a transcript (WCAG 1.2.1)

**For Video Content:**
- Transcripts are recommended but not always required if captions and audio descriptions are provided
- Transcripts are helpful for users who prefer text

### Transcript Best Practices

- **Complete**: Include all spoken content
- **Speaker identification**: Clearly identify who is speaking
- **Timestamps**: Include timestamps for video transcripts
- **Formatting**: Use clear formatting (headings, paragraphs)
- **Accessibility**: Ensure transcripts are accessible (proper HTML, readable format)

### Example Transcript Format

```
PODCAST: Accessibility in Web Development
Episode 1: Getting Started

[00:00] HOST: Welcome to our podcast on web accessibility.

[00:05] GUEST: Thank you for having me. Accessibility is crucial for...

[00:15] [Music fades in]

[00:20] HOST: Let's start with the basics. What is WCAG?
```

## WCAG 2.2 AA Requirements Summary

| Content Type | Captions | Audio Description | Transcript |
|--------------|----------|-------------------|------------|
| **Prerecorded Video** | Required (Level A) | Required (Level AA) | Recommended |
| **Live Video** | Required (Level AA) | Not required | Recommended |
| **Audio-Only** | N/A | N/A | Required (Level A) |
| **Video-Only** | N/A | Required (Level A) | Required (Level A) |

## Implementation

### HTML5 Video with Captions

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track 
    kind="captions" 
    src="captions.vtt" 
    srclang="en" 
    label="English"
    default
  >
  <track 
    kind="descriptions" 
    src="audio-descriptions.vtt" 
    srclang="en"
  >
</video>
```

### Providing Transcripts

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" default>
</video>

<div>
  <h2>Transcript</h2>
  <a href="/transcripts/video-transcript.txt">Download transcript (TXT)</a>
  <a href="/transcripts/video-transcript.html">View transcript (HTML)</a>
</div>
```

## Checklist

- [ ] All prerecorded videos have closed captions
- [ ] Live videos have real-time captions
- [ ] Videos have audio descriptions for important visual content
- [ ] Audio-only content has transcripts
- [ ] Captions are synchronized with speech
- [ ] Captions include sound effects and music descriptions
- [ ] Speaker identification is included when needed
- [ ] Transcripts are provided and accessible
- [ ] Audio descriptions fit into natural pauses
- [ ] All media has controls to pause, stop, and adjust volume

## Resources

- [WCAG 2.2 - 1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/WCAG22/#captions-prerecorded)
- [WCAG 2.2 - 1.2.4 Captions (Live)](https://www.w3.org/TR/WCAG22/#captions-live)
- [WCAG 2.2 - 1.2.3 Audio Description or Media Alternative](https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded)
- [WCAG 2.2 - 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/TR/WCAG22/#audio-description-prerecorded)
- [WebVTT Format](https://www.w3.org/TR/webvtt1/) - Web Video Text Tracks format
- [W3C: Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/articles/av/)