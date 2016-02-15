# Video Clipper
Hi there. Although *Video Clipper* is still pretty *bare bone* app, I believe it meets basic test assignment requirements. Please note this app has only been tested in *Chrome* and *Firefox*. I hope it should work in *Safari* as well. *IE* has issues with HTML5 video URI fragments. My other comments can be found below in **\[ D.S. ... \]**.

Demo page: [donsro.atwebpages.com/projects/krossover] (http://donsro.atwebpages.com/projects/krossover/index.html).

Thank you.

### Assignment
Create an application that allows a user to slice up a video sample video: http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4 into clips. As part of this application, use at least one of the following frameworks to facilitate development however you may also use any other tools to help complete the project:

- [x] AngularJS **\[ D.S. AngularJS version 1.4.9. \]**
- [ ] Angular 2
- [ ] Ember
- [ ] ReactJS
- [ ] AureliaJS

### Mandatory Features
- [x] An HTML5 video player that utilizes media fragments.
- [x] A list of clips to be played in the video player.
- [x] The first item in the list should be the full video.
- [x] An interface to add new clips to the list by specifying a name, start time, and end time.
- [x] The ability to delete clips from the list (*excluding the full video item*).
- [x] The ability to edit existing clips in the list.
- [x] The ability to play clips in the video player.

**\[ D.S. All completed. \]**

### Bonus (Optional)
- [x] The ability to automatically jump to the next clip after it finishes, with a 3 second waiting period and appropriate loading animation. **\[ D.S. I added *Play All* button. It plays all clips in the list from top to bottom with 3s delay. \]**
- [x] The ability to save clips for persistent use.
- [x] The ability to add arbitrary 'tags' to clips so that they can be filtered by the tag name. **\[ D.S. Yes you can add, modify and filter clips by *tag* property's value. \]**
- [ ] Hotkeys to jump between the current clip and next and previous clips (if there are any).
- [ ] Markers on the video player timeline that denote where a clip starts (full video only).
- [ ] Clicking the marker chooses that clip and plays it from that point.
- [x] The ability to reuse the the player and playlist on another page without the editing capabilities. **\[ D.S. There are Admin and User views. Upper left corner links. \]**
