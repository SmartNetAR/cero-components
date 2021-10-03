import initStoryshots, { multiSnapshotWithOptions, Stories2SnapsConverter } from '@storybook/addon-storyshots' ;
initStoryshots( {
    test: multiSnapshotWithOptions(),
    story2SnapsConverter: new Stories2SnapsConverter( {
        snapshotExtension: '.js.snap',
    } ),
} ) ;
