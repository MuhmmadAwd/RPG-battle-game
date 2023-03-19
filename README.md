<h1 align="center">RolePlaying App</h1>

<div align="center">
  <h3>
    <a href="https://muhmmadawd.github.io/RestaurantOrderingApp/">
      Live Demo
    </a>
  </h3>
</div>

![screenshot](https://ncf-ec2-east-41-hv.xconvert.com/file/converter/download/gP418VcvpFU-z-0-y-641334d6b2caae1aad4cf15c.gif)

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

<!-- Introduce your projects by taking a screenshot or a gif. Try to tell visitors a
story about your project by answering: -->

<!-- - Where can I see your demo?
- What was your experience?
- What have you learned/improved?
- Your wisdom? :) -->

- app that allows the user to select items from a menu, add or remove them from
  an invoice order, and view the total price of the orders in an invoice.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [css grid]()
- [js]()

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

- init(): This function initializes the program by rendering the menu HTML and
  adding a click event listener to the main element.

- renderMenuHtml(): This function renders the menu items HTML by generating the
  HTML for each item using the generateMenuItemHtml() function and appending it
  to the menu element.

- generateMenuItemHtml(): This function generates the HTML for a single menu
  item using the data from the menuArray imported from data.js and the uuidv4
  function from the uuid library.

- handleClick(e): This function handles the click events on the menu items and
  updates the orders array and the invoice HTML accordingly.

- addOrderToInvoice(name, price): This function adds an order to the orders
  array. If the order already exists in the array, its quantity is incremented.

- removeOrderFromInvoice(name, price): This function removes an order from the
  orders array. If the order exists in the array and its quantity is greater
  than one, its quantity is decremented.

- findOrderIndexByName(name): This function finds the index of an order in the
  orders array based on its name.

- orderExists(name): This function checks if an order with a given name exists
  in the orders array.

- generateInvoiceOrderHtml(): This function generates the HTML for the orders in
  the invoice based on the data in the orders array.

- renderInvoiceOrders(): This function renders the orders HTML for the invoice
  by generating the HTML using the generateInvoiceOrderHtml() function and
  appending it to the invoice orders element.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

- [practice js method](https://www.w3schools.com/jsref/met_node_appendchild.asp)

## Contact

<h5> If you have any questions or feedback, please feel free to contact me at
<a href="mailto:muhmmad.awd@gmail.com">muhmmad.awd@gmail.com</a>
</h5>
<div align="center">
  <h5>
    <a href="https://www.linkedin.com/in/muhmmadawd/">
      linkedin - muhmmadawd
    </a>
  </h5>
</div>
<div align="center">
  <h5>
    <a href="https://github.com/MuhmmadAwd/">
      GitHub - muhmmadawd
    </a>
  </h5>
</div>
