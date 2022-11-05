# formatted-logs
Time-stamped and labeled Console logs.

## TimeStamp and label structure
```
HH:mm:ss message
HH:mm:ss [label] message
```

## test.js output
```
17:34:17 [t] Hex white
17:34:17 [c] Text color white
17:34:17 [r] Text color red
17:34:17 [f] Invalid text color
17:34:17 [o] Rgb r:123, g:55, b:113
17:34:17 [e] No color
17:34:17 just text
Empty log:
17:34:17
Variable:
17:34:17 2
fString:
17:34:17 test: 2

Raw

17:34:17 [INFO] info
Empty info:
17:34:17 [INFO]

17:34:17 [WARN] warn
Empty warn:
17:34:17 [WARN]

17:34:17 [error] error
Empty error:
17:34:17 [error]

------17:34:17------
┌─────────┬──────────────────┬────────┬────────┬────────┬────────┬────────┐
│ (index) │        0         │   1    │   2    │   3    │   4    │   5    │
├─────────┼──────────────────┼────────┼────────┼────────┼────────┼────────┤
│    0    │ '2d array table' │ 'test' │ 'test' │ 'test' │ 'test' │ 'test' │
│    1    │      'test'      │ 'test' │ 'test' │        │        │        │
└─────────┴──────────────────┴────────┴────────┴────────┴────────┴────────┘
------17:34:17------
┌─────────┬──────────────────┐
│ (index) │      Values      │
├─────────┼──────────────────┤
│    0    │ '1d array table' │
└─────────┴──────────────────┘
------17:34:17------
┌─────────┬───────────────────────────────┐
│ (index) │            Values             │
├─────────┼───────────────────────────────┤
│    0    │ 'no array only single string' │
└─────────┴───────────────────────────────┘
Empty table:
------17:34:17------
┌─────────┐
│ (index) │
├─────────┤
└─────────┘

.timeStamp():
17:34:17

17:34:17 Align
         1 line
         2
         lines
Empty newLine:

.white():


.createTimeStamp()
createTimeStamp: 17:34:17

.createLabel()
createLabel 'test', 'green': [test]
createLabel 'test', 'gre': [test]
createLabel 'test': [test]
createLabel: []

Show : FLogs.addOptions({ hide: false}):
17:34:17 This should be visible
This should be visible
17:34:17 [INFO] This should be visible
17:34:17 [WARN] This should be visible
17:34:17 [error] This should be visible
         This should be
         visible
------17:34:17------
┌─────────┬──────────────────────────┐
│ (index) │          Values          │
├─────────┼──────────────────────────┤
│    0    │ 'This should be visible' │
└─────────┴──────────────────────────┘

17:34:17
Hide : FLogs.addOptions({hide: true}):

timeStruct : FLogs.addOptions({timeStruct: 'HH:mm:ss' }):
17:34:17 HH:mm:ss

timeStruct : FLogs.addOptions({timeStruct: 'HH:mm' }):
17:34 HH:mm

17:34:17 1
2
17:34:17 [INFO] 3
17:34:17 [WARN] 4
17:34:17 [error] 5
         6
         6.1
------17:34:17------
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  '7'   │
└─────────┴────────┘

17:34:17
```