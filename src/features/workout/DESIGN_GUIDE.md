# 🎨 Visual Design Guide - Workout Execution

## 📐 Layout Architecture

```
┌─────────────────────────────────────┐
│         HEADER (60px)               │  ← Back button, Title, Menu
├─────────────────────────────────────┤
│                                     │
│      PROGRESS INDICATOR             │  ← Workout progress card
│                                     │
│ ┌─────────────────────────────────┐ │
│ │                                 │ │
│ │     EXERCISE PREVIEW            │ │  ← Image/GIF/Video (75% width)
│ │     (Video/Image/GIF)           │ │     With green glow border
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│      EXERCISE INFO                  │  ← Name, Sets, Reps, Weight
│      • Exercise Name                │
│      • Sets: 1/4  Reps: 12  80kg   │
│      • [●][○][○][○] Set indicators │
│                                     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   [   COMPLETE SET BUTTON   ]      │  ← Primary action (green)
│                                     │
│   [ Skip ]    [ Finish Workout ]   │  ← Secondary actions
│                                     │
└─────────────────────────────────────┘
```

## 🎭 Rest Mode Layout

```
┌─────────────────────────────────────┐
│         HEADER                      │
├─────────────────────────────────────┤
│                                     │
│                                     │
│         ╔══════════════╗            │
│         ║              ║            │
│         ║              ║            │
│         ║     1:30     ║  ← Animated timer
│         ║   DESCANSO   ║     (with glow)
│         ║              ║            │
│         ╚══════════════╝            │
│                                     │
│     ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░             │  ← Progress bar
│                                     │
│    [+15s]  [+30s]  [+60s]          │  ← Quick add time
│                                     │
│    [    PAUSE TIMER    ]           │  ← Primary action
│                                     │
│    [   SKIP REST   ]               │  ← Secondary action
│                                     │
└─────────────────────────────────────┘
```

## 🎨 Color Palette Usage

### Primary Actions

```
Background: #B5FF4D (Green neon)
Text: #0A0A0A (Black)
Shadow: rgba(181, 255, 77, 0.3)
```

### Secondary Actions

```
Background: #161616 (Card gray)
Border: #2C2C2E (Border gray)
Text: #8E8E93 (Secondary text)
```

### Critical State (Last 10s)

```
Timer Color: #FF453A (Error red)
Border: #FF453A with pulse animation
Glow: rgba(255, 69, 58, 0.5)
```

### Card Backgrounds

```
Main: #161616
Input: #1C1C1E
Borders: #2C2C2E
```

## 🎬 Animation Timings

### Fast Interactions (200-300ms)

- Button presses
- Card elevation changes
- State toggles

### Medium Transitions (300-500ms)

- Screen transitions
- Component mounting/unmounting
- Set completion animations

### Slow Emphasis (1000-2000ms)

- Timer glow pulse
- Success celebrations
- Achievement reveals

## 📏 Spacing System

```
XXS: 4px   - Tight spacing between related elements
XS:  8px   - Icon-text gaps
SM:  12px  - Small component padding
MD:  16px  - Standard component padding
LG:  24px  - Section spacing
XL:  32px  - Large section spacing
2XL: 48px  - Screen edge padding
```

## 🔠 Typography Hierarchy

### Display Text

```
Exercise Name:
Font: Bold, 32px, -0.5 tracking
Color: #FFFFFF
```

### Section Headers

```
"DESCANSO", "SÉRIES":
Font: Semibold, 12px, 2.0 tracking
Color: #8E8E93
Transform: UPPERCASE
```

### Timer Display

```
Rest Timer:
Font: Bold, 72px
Color: #B5FF4D (normal) / #FF453A (critical)
```

### Body Text

```
Stats, Labels:
Font: Medium, 14-16px
Color: #FFFFFF (primary) / #8E8E93 (secondary)
```

### Hints & Tips

```
Font: Regular, 14px
Color: #8E8E93
Line Height: 1.5
```

## 🎯 Component States

### Button States

```
Default:     opacity: 1.0
Pressed:     opacity: 0.8, scale: 0.98
Disabled:    opacity: 0.5
Loading:     opacity: 0.7 + spinner
```

### Timer States

```
Normal:      Green border, steady glow
Critical:    Red border, pulse animation
Paused:      Gray border, no glow
Completed:   Success animation
```

### Set Indicators

```
Pending:     Gray circle, empty
Current:     Green border, highlighted
Completed:   Green filled, checkmark
```

## 📱 Responsive Breakpoints

### Small Phones (<375px width)

- Reduce preview height to 60% width
- Smaller timer (60px font)
- Stack secondary buttons vertically

### Standard Phones (375-430px)

- Default layout (as designed)
- 75% width preview
- 72px timer font

### Large Phones (>430px)

- Max content width: 500px
- Centered layout
- Increased touch targets

## 🌟 Microinteractions

### Set Completion

```
1. Button press → haptic feedback
2. Scale button down (0.95)
3. Set indicator fills with green
4. Checkmark animation
5. Next set highlights
6. Haptic success feedback
```

### Rest Timer Start

```
1. Screen transition (fade out exercise)
2. Timer scales in from 0.5 → 1.0
3. Glow animation starts
4. Progress bar animates
5. Start countdown
```

### Critical Time Warning

```
1. Timer color changes to red
2. Pulse animation starts (scale 1.0 → 1.1 → 1.0)
3. Glow intensifies
4. Last 3 seconds: haptic on each second
5. Final: double haptic + completion
```

### Exercise Transition

```
1. Completion celebration (scale + fade)
2. Alert modal slides up
3. User taps "Next"
4. Modal slides down
5. Content cross-fade to next exercise
6. Preview animates in
```

## 🎨 Shadow & Elevation

### Level 1 - Cards

```
shadowColor: #000000
shadowOffset: { width: 0, height: 2 }
shadowOpacity: 0.1
shadowRadius: 8
elevation: 2
```

### Level 2 - Primary Button

```
shadowColor: #B5FF4D
shadowOffset: { width: 0, height: 8 }
shadowOpacity: 0.3
shadowRadius: 16
elevation: 8
```

### Level 3 - Modals

```
shadowColor: #000000
shadowOffset: { width: 0, height: 16 }
shadowOpacity: 0.3
shadowRadius: 24
elevation: 16
```

## 🎭 Dark Mode Considerations

This design is optimized for dark mode:

- Deep black background (#0A0A0A) reduces OLED burn-in
- High contrast green (#B5FF4D) pops on dark
- Subtle grays prevent pure black/white extremes
- Glows and shadows work better on dark backgrounds

## 📐 Safe Areas & Notches

```
Top Safe Area:     StatusBar height + 16px
Bottom Safe Area:  Home indicator + 24px
Side Padding:      20px minimum
```

For devices with notch:

- Header respects safe area
- Timer content stays within safe bounds
- Bottom actions elevated above home indicator

## 🔄 Loading States

### Exercise Loading

```
┌─────────────────┐
│                 │
│   █████░░░░░    │  ← Skeleton shimmer
│   ███░░░░░░░    │
│   ████████░░    │
│                 │
└─────────────────┘
```

### Action Processing

```
[  COMPLETANDO...  ⟳  ]  ← Spinner + Text
```

## ✨ Success Celebrations

### Set Completed

- Subtle scale bounce
- Green flash on set indicator
- Haptic "success" feedback

### Exercise Completed

- Checkmark animation
- Green glow pulse
- Alert with encouragement

### Workout Completed

- Full screen celebration
- Confetti animation (optional)
- Stats reveal with stagger
- Trophy icon animation

---

**Design Philosophy**: Clean, bold, motivating. Every interaction should feel purposeful and rewarding.
