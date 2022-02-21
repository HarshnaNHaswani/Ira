# Ira
Ira is the component library for scalable, modern, and beautiful UI. Ira is developed with the objective to cater to a wide range of audience.

COLOR PROPERTIES FOR BRAND
--color-primary
--color-secondary
--color-accent
--color-background
TEXT COLOR PROPERTIES FOR BACKGROUND
--color-primary-inverse
--color-secondary-inverse
--color-accent-inverse
--color-text

Alerts

Alerts are used to display short, important message to the user. To implement this functionality, add the alert class to your <p> tag

Standard Alerts
Based on the purpose 0f the alert, a second class is to be added to the tag. This class adds background color to the alert.

STATUS CLASSES FOR BACKGROUND
status-plain-bg
status-info-bg
status-warning-bg
status-error-bg
status-success-bg
To adjust the color of any of the above status classes, in your stylesheet do :root { --color-status-success: <color>; --color-inverse-status-success: <color>; } . This will change the the color wherever you use the status class, that is, in status-warning-outline (borders), status-warning-bg (bacground), and status-warning (text) classes. The inverse --color-inverse-status-warning property is used to provide appropriate text color against the status background.

  
ay notifs, and status. To implement this functionality, add the badge-wrapper class to the <div> tag. Inside this wrapper div, give the avatar/ icon. Also, give a <span>tag with class badge to add the badge.

To know more about avatar, see Avatar. For icons, add class icon to the tag.

To make a status badge, leave the badge span empty. For numbered badges, add the required number within the span.

Additional Classes For <Span Class="Badge">
SIZE CLASSES
badge-sm
badge-md
badge-lg
STATUS CLASSES
These classes add a background to the badges. They may indicate availability or purpose of the badge(for icons)

status-available-bg
status-busy-bg
status-idle-bg
status-active-bg
status-inactive-bg
status-plain-bg
status-info-bg
status-warning-bg
status-error-bg
status-success-bg
To adjust the color of any of the above status classes, in your stylesheet do :root { --color-status-success: <color>; --color-inverse-status-success: <color>; } . This will change the the color wherever you use the status class, that is, in status-warning-outline (borders), status-warning-bg (bacground), and status-warning (text) classes. The inverse --color-inverse-status-warning property is used to provide appropriate text color against the status background.

POSITION CLASSES
Position classes are used to set the position of the badge on the required component.

badge-left
badge-right
  
BUTTONS
 To give a basic design to the buttons, add the btn class to the <button> tag.

Additional Classes
CLASSES BASED ON USECASE
bg-primary
bg-secondary
bg-accent
outline-primary
outline-secondary
outline-accent
outline-default
The outline buttons can be used for the alternate choice buttons. The default button is based on the web app's background and text colors and blends in with it. The outline buttons also get their text color from the site's text color. The background buttons have their own text properties. 
  
Inputs are used to display get data from the user. To implement this functionality, wrap the input element. On the wrapper, add the form-item class. To the <input type="text"> tag, give the class form-input.
  
LIST
To implement the list functionality, add the list class to the <ul> tag. Also, add the style class to specify the style of the list.
  

STYLE CLASSES
list-bulleted
list-inline
list-stacked
  
Avatar
Avatars are used to represent users in a virtual community. They can be the user's picture or graphical illustrations. To implement this functionality, add the avatar class to the <img> tag

Additional Classes
round class is used in the below example to make the avatars round.

SIZE CLASSES FOR AVATAR
avatar-xs
avatar-sm
avatar-md
avatar-lg
  
grid
Grid component is used to create a matrix of elements. Ira provides two basic column layouts for grid - grid foe two columns and grid for 3 columns. To implement this, add the grid-container class to the wrapper. To each child, give the grid-child class. Wrappers can be <div> or <section> elements. Child elements can be images, cards, etc.

To make a two column grid layout add the class grid-col2 to the wrapper. Similarly, to make a three column grid layout add the class grid-col3 to the wrapper.

 MODAL
 modal class to the wrapper element.

Additional Classes
SECOND CLASS OF WRAPPER
modal-simple
modal-stacked
  
NAV
 add the nav class to the <nav; tag. Also add a second class to specify the type of navigation.

SECOND CLASS FOR NAV
nav-site
nav-scrolling
                                
<IMG> ELEMENT
img-round
img-responsive
  
CARD CLASSES
card-container
Card Type Class
card-primary-content
media
card-header
card-body
actions
action-buttons
action-icons
CARD TYPE CLASSES
card-basic
card-title-float
card-title-top
card-buttons-only
card-icons-only
card-horizontal
card-thumbnail
  
Rating
To implement a rating component, create a wrapper element and add the class rating-wrapper to it. Inside the wrapper create the required number of radio buttons with label. Give the desired icon inside the label element.

To create rating with primary/secondary colors, add the class wrap-primary to the wrapper. To create rating with other colors, add the class wrap-color to the wrapper.
  
Snackbars are also known as toasts. Snackbard are similar to modals. The key difference is that they don't interrupt the user's interction with the system and fade away after a while. They need not have action buttons

To create a basic snackbar, add the class, snackbar to the element.

SECOND CLASS
baseline
leading
stacked
  
HEADINGS
headings
heading-xs
heading-sm
heading-md
heading-lg
heading-xl
TEXT
text
text-xs
text-sm
text-md
text-lg
text-xl
GRAY TEXT
grey-text
CENTERED TEXT
center-x
center-y
center-xy
  
  
STATUS CLASSES

status-available-bg
status-busy-bg
status-idle-bg
status-active-bg
status-inactive-bg
status-plain-bg
status-info-bg
status-warning-bg
status-error-bg
status-success-bg
