# jQuery Redraw Plugin

Sometimes, iOS Safari won't correctly redraw elements after an `orientationchange` event. With this plugin, you can coax Safari into redrawing those elements by selecting them, and then calling `redraw()`:

```
$("css selector").redraw();
```

## MIT License
