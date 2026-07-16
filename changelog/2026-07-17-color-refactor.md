# Delivered Tasks: Color Palette Refactor

## Context

During the AI session on July 17, 2026, we performed a color palette refactor to align the application's visual theme with the game theory spectrum and move away from a strictly neutral design.

The previous neutral theme, characterized by "Cool-Toned Greys", lacked visual warmth and thematic consistency with the game's core concepts of "Rational" (cool) and "Human" (warm).

## Changes

### 1. CSS Variables (`globals.css`)

We introduced a new color system that combines a warm dark background with distinct warm and cool spectrum colors:

#### Background Colors

- **`--bg-color`**: `#2b2927` (Warm dark charcoal)
- **`--surface-color`**: `rgba(60, 58, 55, 0.7)` (Semi-transparent warm grey)
- **`--text-primary`**: `#f2efe9` (Off-white warm tone)
- **`--text-secondary`**: `#aba499` (Warm grey)

#### Neutral Spectrum

- **`--spectrum-rational`**: `#8292c4` (Cool blue-grey - represents logic, structure, and calculation)
- **`--spectrum-human`**: `#e2a563` (Warm amber-orange - represents emotion, intuition, and social dynamics)

#### Accent Glows

- **`--accent-glow-rational`**: `rgba(130, 146, 196, 0.4)`
- **`--accent-glow-human`**: `rgba(226, 165, 99, 0.4)`

#### Border Color

- **`--glass-border`**: `rgba(255, 255, 255, 0.1)`

#### Animation

- **`--transition-medium`**: `cubic-bezier(0.175, 0.885, 0.32, 1.275)` - Added custom cubic-bezier for more dynamic transitions

### 2. Component Updates

#### Button Component

- **`Button.module.css`**: Updated button variants to use the new spectrum colors instead of hardcoded RGB values
- **Rational Variant**: Now uses `--spectrum-rational` with orange tint background
- **Human Variant**: Now uses `--spectrum-human` with warm tint background
- **Primary Variant**: Updated to use `--surface-color` for a warmer background
- **Added Glow Effects**: Implemented glowing effects for rational and human variants on hover

#### Choice Card Component

- **`ChoiceCard.module.css`**: Updated card styling to integrate with the new color scheme
- **Glow Effects**: Added radial gradient glow effects that change based on the card type (rational/human)
- **Border Transitions**: Enhanced border color transitions for hover states
- **Selected State**: Updated background and shadow for selected cards

#### Score Meter Component

- **`ScoreMeter.module.css`**: Updated meter styling to use spectrum colors
- **Meter Backgrounds**: Gradient fills now use `--spectrum-rational` and `--spectrum-human`
- **Glow Effects**: Added glowing effects for meter sections
- **Center Marker**: Enhanced border and shadow for the center marker

## Impact

The color palette refactor achieves the following improvements:

### 1. Thematic Cohesion

- **Warm Dark Theme**: The warm dark background creates a cozy, engaging atmosphere suitable for a strategy game
- **Visual Warmth**: The "neutral" spectrum now has warm tones, making the interface feel more inviting and less cold
- **Clear Associations**: Rational (cool blue-grey) and Human (warm amber) colors are now visually distinct and thematically consistent with game theory concepts

### 2. Visual Polish

- **Enhanced UI**: Glassmorphism effects are more pronounced with the new color scheme
- **Engaging Interactions**: Hover and selected states now have glowing effects that draw attention and provide visual feedback
- **Smoother Animations**: Custom cubic-bezier for transitions makes interactions feel more dynamic and premium

### 3. Design System Consistency

- **Spectrum-Based**: Components now use the defined spectrum colors instead of hardcoded values
- **Maintainability**: Easier to maintain and update the color scheme in the future by modifying CSS variables in one place

## Files Modified

1. **`globals.css`**
   - Added new color palette variables
   - Added custom cubic-bezier transition timing

2. **`Button.module.css`**
   - Updated button variants to use spectrum colors
   - Added glow effects for hover states

3. **`ChoiceCard.module.css`**
   - Added radial gradient glow effects
   - Enhanced border transitions

4. **`ScoreMeter.module.css`**
   - Updated meter gradients with spectrum colors
   - Added glow effects

## Next Steps

- Monitor user feedback on the new color scheme
- Consider adding accessibility contrast checks
- Explore color variations for different game modes
