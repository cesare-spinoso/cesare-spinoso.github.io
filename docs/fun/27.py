#!/bin/python3

for i in range(0, 100):
    # Represent the number as a string
    i_as_str = str(i)
    # Get x and y
    if len(i_as_str) == 1:
        x = 0
        y = int(i_as_str[0])
    else:
        x = int(i_as_str[0])
        y = int(i_as_str[1])
    # Sum from x to y if x <= y
    if x > y:
        continue
    interval_sum = sum([j for j in range(x, y + 1)])
    if interval_sum == i:
        print(f"Found an interval sum : {i}")