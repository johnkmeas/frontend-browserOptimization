These are the optimizations that I made:

For index.html:

- inlined css and added the @font-face to get the font efficiently.
- added media="print" to the print.css
- added  async to "js/perfmatters.js" in script tag before closing body tag


For pizza.html:
- inline css
- added to the .mover :   
	will-change:transform;
    transform: translateZ(0);
    backface-visibility: hidden;
	(to improve paint perfomance)

For main.js:
- added "use strict"; to enable strict mode in line 400
- changed the document.querySelector in the changeSliderLabel() to document.getElementById
- in changePizzaSizes(), I moved the variables outside of the loop.
- line 477, moved the pizzaDiv outside of the loop
- in updatePositions(), moved variable items and top outside of the loop. create variable called left and pass it as parameter in a newly create style transform below.
- added the updatePositions function as a parameter to the window.requestAnimationFrame method in the scroll event listener.
- reduced generated pizzas to 40 and moved the var elem outside the loop
- created var movingpizzas = document.getElementById and appended elem to movingPizzas inside of loop.

------------------------
How to run applications:

- Simply open in a browser

- For pizza.html, simple open in browser and scroll down to see the background pizzas move horizontally.
- Move slider to see changes in pizzas sizes in the foreground pizzas.
