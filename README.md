Toolbar vs Menu WebExtension Demo
=================================

This is a quick & dirty demo WebExtension for Firefox to play with styles that
adapt to browser action popups invoked from the toolbar versus the (presumably
narrower) menu sidebar.

### Usage

1. Clone this repo
1. Go to [`about:debugging`](https://developer.mozilla.org/en-US/docs/Tools/about:debugging) in Firefox
1. Load `manifest.json` as a temporary add-on.

### TODOs / Challenges

- [ ] Reliably detect placement in Toolbar vs Menu (mostly works, sometimes buggy)
- [ ] Sub-panels with slide-in transitions
- [x] UX with header title, footer controls, and content area that fills the popup
- [x] Popup from toolbar with fixed 320 x 480 dimensions
- [x] Popup from menu sidebar that adapts to the fixed width and default height

### What?

A WebExtension in Firefox can add a button that summons a popup
panel, using [`browser_action`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction)
in `manifest.json`.

By default, this button is in the toolbar and [the popup is automatically sized
to fit the content](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/User_interface_components#Popup_resizing).
However, [this button can be moved to the sidebar menu](https://support.mozilla.org/t5/Customize-controls-options-and/Customize-Firefox-controls-buttons-and-toolbars/ta-p/2715#w_customize-the-menu-or-the-toolbar)
and in this case the popup gets a fixed width. Though, of course, this fixed
width is specified in `em` font units and actually *varies* depending on font
sizes & DPI between platforms.

Anyway. It would be nice to have popup styles that vary between the variable sizing
from the toolbar and the fixed width (but semi-variable height!) from the sidebar
menu.

<img width="391" alt="screenshot 2017-03-09 17 13 25" src="https://cloud.githubusercontent.com/assets/21687/23773123/d46b7620-04eb-11e7-905c-503e924dd6cd.png">

<img width="297" alt="screenshot 2017-03-09 17 13 46" src="https://cloud.githubusercontent.com/assets/21687/23773125/d92d0520-04eb-11e7-8864-c23bc43d901b.png">

### Credits

* [`718smiley.svg` by East718 from Wikimedia Commons](https://commons.wikimedia.org/wiki/File:718smiley.svg)
