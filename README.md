# standalone-vexflow-context
Browser independent VexFlow context

## Getting Started
`npm install standalone-vexflow-context`

Ex)
```
import { ReactNativeSVGContext, NotoFontPack } from 'standalone-vexflow-context';
...
  render() {
    const context = new ReactNativeSVGContext(NotoFontPack, { width: 400, height: 400 });
    const stave = new Stave(100, 150, 200);
    stave.setContext(context);
    stave.setClef('treble');
    stave.setTimeSignature('4/4');
    stave.draw();

    return (
      <View>{ context.render() }</View>
    );
  }
...
```

And you can also start from this seed project, https://github.com/panarch/react-native-vexflow-seed
