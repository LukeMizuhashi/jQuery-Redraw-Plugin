# jQuery Redraw Plugin

Sometimes, iOS Safari won't correctly redraw elements after an `orientationchange` event. With this plugin, you can coax Safari into redrawing those elements by selecting them, and then calling `redraw()`:

```
$("css selector").redraw();
```

Currently hard-coded as an AMD module. Bower and Browseriy friendly verions soon to come. Or, if you've got the time, why not make a pull request?

# MIT License
