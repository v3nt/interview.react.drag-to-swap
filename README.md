# Popsa.com - React Frontend test skeleton

## Getting Started

### Installation

```bash
pnpm i
# or
npm i
```

### Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

- No .env or access to external service needed
- UI: on my phone i couldn't see the circle preview as my fingers completely covered it. So i've positioned it above the point of touch or mouse
- as we are doing a simple 1 to 1 swap the user can also click to select a source image, then clicking on a second defines the destination
- I felt on the phone app i lost where the image was coming from. The faded 'selected' image was hard to notice. So i've added a white outline to clear show what you are moving. And a smaller outline on hover. Crude but can be refined & explored
- Only working with mouse events

TODO:

- Image swap transition. Didn't have time to get this finished. Prep was started but ideally i would load a new image over the current one into a mask. Then animate a growing circle mask to full frame
- More testing for click & interaction events

Nice task - thanks very much!
Any questions please get in touch.

D.
