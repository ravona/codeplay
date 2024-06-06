#!/bin/bash
dnf history userinstalled | grep -E '^[a-zA-Z0-9]' | awk '{print $1}' | sed 's/-[0-9].*//' | sort | uniq > dnf_installed_packages.txt
# sudo dnf install $(cat dnf_installed_packages.txt)