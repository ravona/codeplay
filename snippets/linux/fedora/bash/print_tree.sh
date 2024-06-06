#!/bin/bash
find . | sed -e "s/[^-][^\/]*\// |/g" -e "s/|\([^ ]\)/|-\1/"
# alternatively use 'tree' command if available

