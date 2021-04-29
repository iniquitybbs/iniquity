#!/bin/sh

echo "Give me a number, any number:"
read number

if [$n -lt 100]; then
    printf "$n is less than 100\n"
fi

if [["$number" == "1"]]; then
    echo "Yes, the number is one. Exit"
    exit 0
else
    echo "No, the number is not one. Exit"
    exit 1
fi
