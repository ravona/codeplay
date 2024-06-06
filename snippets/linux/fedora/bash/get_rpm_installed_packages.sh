#!/bin/bash
rpm -qa --qf '%{NAME}\n' | sort | uniq > rpm_installed_packages.txt
# sudo dnf install $(cat rpm_installed_packages.txt)
