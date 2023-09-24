# ikamo.cc
This is a personal portfolio project compiling all my front-end projects (including this one). The goal is to practice Vite with Vue and Three JS.

## Personal Takeaways
- If you're using Vue Router, scrolling interaction can only be modified on the app.vue file, so smooth scrolling and scrollIntoView() must be planned to be set up on the app.vue.
- Next time, when setting up a project, figure out a design system to better organize the CSS classes and styling.
- If there's only one font in use, you can set the font family on the html selector in CSS to apply it to all the type styles in the future.
- The template wrapping the div format is essential for any vue components for views as it affects how the library reads each file for things like transition, etc.
- Any constant updating interaction (custom cursor, smooth scrolling, etc.) must be added on the Mounted or onMounted hook for the components and pages.
- The setup added on the script tag is a way for Vue 3 to get around the traditional format, making writing JavaScript much faster and easier.
- Overlapping text is rough to code for responsive; only add to the design if it fits the brief.
- Understanding the Vue components life cycle hook is crucial for any development work in Vue.
- Data binding for components can speed up the coding process and avoid repeated code.
